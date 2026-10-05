import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCarouselProps {
    testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Number of items to show at once (responsive logic handled via CSS/media queries in a way, 
    // but for a true carousel logic we usually need to know the window size or fix it. 
    // For simplicity, we'll design a 1-item mobile / 2-item tablet / 3-item desktop view 
    // by calculating the visible window indices)

    // Actually, to make it robust without window listeners, let's just make it a simple slider 
    // where we can "page" through. 

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Helper to get the visible items based on current index.
    // We'll render 3 items always in the DOM but hide them on smaller screens via CSS.
    // This allows us to keep the logic simple.
    const getVisibleTestimonials = () => {
        const items = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            items.push(testimonials[index]);
        }
        return items;
    };

    const visibleItems = getVisibleTestimonials();

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Navigation Buttons - Absolute positioning nicely outside or on edge of content */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 hidden md:block -ml-4 lg:-ml-12">
                <button
                    onClick={prevSlide}
                    className="p-3 rounded-full bg-sand-800 text-sand-50 shadow-md hover:bg-clay-600 transition-all duration-700 hover:shadow-lg"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft size={24} />
                </button>
            </div>

            <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 hidden md:block -mr-4 lg:-mr-12">
                <button
                    onClick={nextSlide}
                    className="p-3 rounded-full bg-sand-800 text-sand-50 shadow-md hover:bg-clay-600 transition-all duration-700 hover:shadow-lg"
                    aria-label="Next testimonial"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Mobile Nav (Below items usually) */}
            <div className="flex md:hidden justify-center gap-4 mb-6">
                <button onClick={prevSlide} className="p-3 rounded-full bg-sand-800 text-sand-50 shadow-sm"><ChevronLeft size={20} /></button>
                <button onClick={nextSlide} className="p-3 rounded-full bg-sand-800 text-sand-50 shadow-sm"><ChevronRight size={20} /></button>
            </div>


            {/* Carousel Track */}
            <div className="overflow-hidden py-8">
                <motion.div
                    // We use a simple key change to trigger animation for the group 
                    // This is a "page transition" style simple carousel
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {visibleItems.map((testimonial, i) => (
                        <div
                            key={`${testimonial.id}-${i}`} // Composite key to ensure uniqueness in render map
                            className={`
                    relative bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-sand-200 hover:shadow-medium transition-all duration-700 flex flex-col h-full
                    ${i === 1 ? 'hidden md:flex' : ''} 
                    ${i === 2 ? 'hidden lg:flex' : ''}
                    ${i === 0 ? 'flex' : ''}
                `}
                        >
                            <div className="absolute top-6 left-6 text-clay-100 opacity-40">
                                <Quote size={48} fill="currentColor" strokeWidth={0} />
                            </div>

                            <div className="flex-grow pt-6 relative z-0">
                                <p className="font-serif italic text-sand-800 leading-relaxed text-xl">
                                    "{testimonial.quote}"
                                </p>
                            </div>

                            <div className="pt-6 mt-6 border-t border-sand-100">
                                <div className="font-sans font-bold text-sm tracking-widest text-sand-900 uppercase">
                                    {testimonial.author}
                                </div>
                                {testimonial.context && (
                                    <div className="text-xs text-sand-500 font-medium tracking-wide mt-1">
                                        {testimonial.context}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Pagination Indicators (Dots) */}
            <div className="flex justify-center gap-2 mt-4">
                {/* Only show a few dots or just current status to avoid 60 dots */}
                <div className="text-xs font-medium text-sand-400 tracking-widest">
                    {currentIndex + 1} / {testimonials.length}
                </div>
            </div>
        </div>
    );
};
