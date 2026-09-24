import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform, type Variants } from 'framer-motion';

// Motion constants for the whole site (organic grammar: things grow and settle, nothing bounces).
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const DUR_ENTER = 0.9;
export const STAGGER = 0.08;
const DIST = 24;
const SCALE_FROM = 0.97;

type Variant = 'rise' | 'fade' | 'grow';
// Older call sites used these names.
type LegacyVariant = 'fadeUp' | 'fadeIn' | 'scaleUp';

const ALIASES: Record<LegacyVariant, Variant> = { fadeUp: 'rise', fadeIn: 'fade', scaleUp: 'grow' };

const VARIANTS: Record<Variant, Variants> = {
  rise: { hidden: { opacity: 0, y: DIST }, visible: { opacity: 1, y: 0 } },
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  grow: { hidden: { opacity: 0, scale: SCALE_FROM }, visible: { opacity: 1, scale: 1 } },
};

interface RevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  delay?: number;
  className?: string;
  variant?: Variant | LegacyVariant;
  as?: 'div' | 'li' | 'section';
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  width = '100%',
  delay = 0,
  className = '',
  variant = 'rise',
  as = 'div',
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -8% 0px' });
  const reduce = useReducedMotion();
  const key = (ALIASES as Record<string, Variant>)[variant] ?? (variant as Variant);
  const Tag = motion[as];

  return (
    <Tag
      ref={ref}
      style={{ width }}
      className={className}
      variants={VARIANTS[key]}
      initial={reduce ? 'visible' : 'hidden'}
      animate={inView || reduce ? 'visible' : 'hidden'}
      transition={{ duration: DUR_ENTER, delay, ease: EASE }}
    >
      {children}
    </Tag>
  );
};

interface PhotoProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Corner radius of the frame, must match the frame's own rounding. */
  radius?: string;
  priority?: boolean;
  delay?: number;
  /** CSS object-position for the picture. */
  pos?: string;
  /** Parallax: the picture drifts this many px inside its frame as the frame crosses the viewport. */
  drift?: number;
}

/** A photo that grows open from its center, like a window being drawn back. */
export const Photo: React.FC<PhotoProps> = ({
  src,
  alt,
  className = '',
  imgClassName = '',
  radius = '28px',
  priority = false,
  delay = 0,
  drift = 0,
  pos,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotion();
  const [frameH, setFrameH] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || !drift) return;
    const ro = new ResizeObserver(([e]) => setFrameH(e.contentRect.height));
    ro.observe(el);
    return () => ro.disconnect();
  }, [drift]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [-drift, drift]);
  const moving = drift > 0 && !reduce;
  // A drifting picture is held just large enough (scale grows from the center) to cover the full drift.
  const rest = moving && frameH > 0 ? 1 + (2 * drift + 4) / frameH : moving ? 1.25 : 1;
  const open = `inset(0% 0% 0% 0% round ${radius})`;
  const closed = `inset(9% 9% 9% 9% round ${radius})`;

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ borderRadius: radius }}
      initial={reduce ? { clipPath: open } : { clipPath: closed }}
      animate={inView || reduce ? { clipPath: open } : { clipPath: closed }}
      transition={{ duration: 1.3, delay, ease: EASE }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className={`w-full h-full object-cover ${imgClassName}`}
        style={{ objectPosition: pos, ...(moving ? { y } : {}) }}
        initial={reduce ? { scale: rest } : { scale: rest + 0.12 }}
        animate={inView || reduce ? { scale: rest } : { scale: rest + 0.12 }}
        transition={{ duration: 1.6, delay, ease: EASE }}
      />
    </motion.div>
  );
};
