import React, { useEffect, useState } from 'react';
import { Button } from './Button';

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

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
            <Button
                variant="primary"
                size="md"
                className="shadow-medium bg-sand-900 text-sand-50 hover:bg-clay-600"
                onClick={() => window.open('https://calendly.com', '_blank')}
            >
                Book a Free Chat
            </Button>
        </div>
    );
};
