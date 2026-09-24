import React, { useEffect, useId, useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useTime,
  useTransform,
  type MotionValue,
} from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

// Her logo: two overlapping circles. Geometry lives in one 200x120 box.
const VB_W = 200;
const VB_H = 120;
const R = 50;
const CX_L = 72;
const CX_R = 128;
const CY = 60;

// One full breath: 5s in, 5s out.
export const BREATH_MS = 10000;
const DRIFT = 9; // how far each ring moves apart on the inhale
const GROW = 3; // radius gain on the inhale

// 0 -> 1 -> 0 over one breath, sine-shaped so the turn at the top feels soft.
const breathCurve = (ms: number) => (1 - Math.cos((2 * Math.PI * (ms % BREATH_MS)) / BREATH_MS)) / 2;

type Num = number | MotionValue<number>;

interface CirclesProps {
  cxL: Num;
  cxR: Num;
  r: Num;
  lensOpacity: Num;
  color: string;
  sw: number;
  glow?: string;
  /** Animate the stroke drawing on (first appearance only). */
  draw: boolean;
}

// The drawing itself. Takes plain numbers (still) or motion values (breathing).
const Circles: React.FC<CirclesProps> = ({ cxL, cxR, r, lensOpacity, color, sw, glow, draw }) => {
  const clipId = useId().replace(/:/g, '');
  const drawFor = (delay: number) =>
    draw
      ? {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.6, delay, ease: EASE },
        }
      : {};
  return (
    <>
      {glow && (
        <>
          <defs>
            <clipPath id={`lens-${clipId}`}>
              <motion.circle cx={cxR} cy={CY} r={r} />
            </clipPath>
          </defs>
          <motion.circle
            cx={cxL}
            cy={CY}
            r={r}
            fill={glow}
            style={{ opacity: lensOpacity }}
            clipPath={`url(#lens-${clipId})`}
          />
        </>
      )}
      <motion.circle cx={cxL} cy={CY} r={r} fill="none" stroke={color} strokeWidth={sw} {...drawFor(0)} />
      <motion.circle cx={cxR} cy={CY} r={r} fill="none" stroke={color} strokeWidth={sw} {...drawFor(0.25)} />
    </>
  );
};

type BreathingProps = Omit<CirclesProps, 'cxL' | 'cxR' | 'r' | 'lensOpacity'> & {
  onPhase?: (phase: 'in' | 'out') => void;
};

// Mounted only while a breathing ring is on screen, so idle rings never run a frame clock.
const BreathingCircles: React.FC<BreathingProps> = ({ onPhase, ...rest }) => {
  const time = useTime();
  const s = useTransform(time, breathCurve);
  const cxL = useTransform(s, (v) => CX_L - DRIFT * v);
  const cxR = useTransform(s, (v) => CX_R + DRIFT * v);
  const r = useTransform(s, (v) => R + GROW * v);
  const lensOpacity = useTransform(s, (v) => 0.15 + 0.55 * v);

  const phase = useRef<'in' | 'out' | null>(null);
  useMotionValueEvent(time, 'change', (t) => {
    if (!onPhase) return;
    const next = t % BREATH_MS < BREATH_MS / 2 ? 'in' : 'out';
    if (next !== phase.current) {
      phase.current = next;
      onPhase(next);
    }
  });

  return <Circles cxL={cxL} cxR={cxR} r={r} lensOpacity={lensOpacity} {...rest} />;
};

interface RingsProps {
  className?: string;
  /** Stroke color (any CSS color). */
  color?: string;
  /** On-screen stroke width in px. */
  strokeWidth?: number;
  /** Draw the circles on when they first enter the viewport. */
  draw?: boolean;
  /** Slow in/out breathing while on screen. */
  breathe?: boolean;
  /** Tint the overlap (lens) as the rings breathe in. */
  glow?: string;
  /** Called with 'in' | 'out' when the breath turns (only while breathing). */
  onPhase?: (phase: 'in' | 'out') => void;
  title?: string;
}

export const Rings: React.FC<RingsProps> = ({
  className = '',
  color = 'currentColor',
  strokeWidth = 1.25,
  draw = false,
  breathe = false,
  glow,
  onPhase,
  title,
}) => {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { margin: '-10% 0px' });
  const seen = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduce = useReducedMotion();
  const live = breathe && !reduce && inView;

  // Keep the stroke a constant on-screen width. (vector-effect: non-scaling-stroke would do this,
  // but it breaks pathLength, which the draw-on relies on.)
  const [unitsPerPx, setUnitsPerPx] = useState(1);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const w = e.contentRect.width;
      if (w > 0) setUnitsPerPx(VB_W / w);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const sw = strokeWidth * unitsPerPx;

  // Draw on once; after that, swapping between still and breathing circles must not redraw.
  const drawn = useRef(false);
  useEffect(() => {
    if (!seen || !draw) return;
    const id = window.setTimeout(() => (drawn.current = true), 1900);
    return () => window.clearTimeout(id);
  }, [seen, draw]);

  const animateDraw = draw && !reduce;
  const common = { color, sw, glow, draw: animateDraw && !drawn.current };

  let body: React.ReactNode = null;
  if (animateDraw && !seen) body = null; // wait offscreen so the draw-on is actually seen
  else if (live) body = <BreathingCircles {...common} onPhase={onPhase} />;
  else body = <Circles cxL={CX_L} cxR={CX_R} r={R} lensOpacity={0.15} {...common} />;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      overflow="visible"
    >
      {body}
    </svg>
  );
};
