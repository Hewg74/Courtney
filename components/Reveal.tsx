import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: 'fit-content' | '100%';
    delay?: number;
    className?: string;
    variant?: 'fadeUp' | 'fadeIn' | 'scaleUp';
}

export const Reveal: React.FC<RevealProps> = ({
    children,
    width = 'fit-content',
    delay = 0,
    className = "",
    variant = 'fadeUp'
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        scaleUp: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
        },
    };

    return (
        <div ref={ref} style={{ position: 'relative', width }} className={className}>
            <motion.div
                variants={variants[variant]}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.8, delay: delay, ease: [0.22, 1, 0.36, 1] }} // Custom easing for "premium" feel
            >
                {children}
            </motion.div>
        </div>
    );
};
