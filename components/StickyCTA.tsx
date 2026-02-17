import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './Button';
import { CALENDLY_URL, openExternal } from '../constants';

export const StickyCTA: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past hero (approx 800px)
            setIsVisible(window.scrollY > 800);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-6 right-6 z-40"
                >
                    <Button
                        variant="primary"
                        size="md"
                        className="shadow-lg bg-sand-900 text-sand-50 hover:bg-clay-600 border border-sand-800 hover:shadow-xl"
                        onClick={() => openExternal(CALENDLY_URL)}
                    >
                        Book a Free Chat
                    </Button>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
