import React, { useState, useMemo, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { Button } from './Button';

interface TestimonialGridProps {
    testimonials: Testimonial[];
}

/**
 * Distribute items into columns round-robin style.
 * Because the assignment is index-based, existing items never change
 * columns when new items are appended — only new items fill in after them.
 */
function distributeToColumns<T>(items: T[], columnCount: number): T[][] {
    const columns: T[][] = Array.from({ length: columnCount }, () => []);
    items.forEach((item, i) => {
        columns[i % columnCount].push(item);
    });
    return columns;
}

export const TestimonialGrid: React.FC<TestimonialGridProps> = ({ testimonials }) => {
    const [visibleCount, setVisibleCount] = useState(6);
    const prevCountRef = useRef(6);

    // Sort: Named authors first, then Anonymous
    const sortedTestimonials = useMemo(() => {
        return [...testimonials].sort((a, b) => {
            const aIsAnon = a.author.toLowerCase().includes('anonymous');
            const bIsAnon = b.author.toLowerCase().includes('anonymous');
            if (aIsAnon && !bIsAnon) return 1;
            if (!aIsAnon && bIsAnon) return -1;
            return 0;
        });
    }, [testimonials]);

    const visibleTestimonials = sortedTestimonials.slice(0, visibleCount);
    const hasMore = visibleCount < sortedTestimonials.length;

    // Track which items are "new" based on the previous visible count
    const prevCount = prevCountRef.current;

    const handleLoadMore = useCallback(() => {
        prevCountRef.current = visibleCount;
        setVisibleCount((prev) => Math.min(prev + 6, sortedTestimonials.length));
    }, [visibleCount, sortedTestimonials.length]);

    // Distribute items into 3 columns (responsive via CSS grid)
    const columns = useMemo(
        () => distributeToColumns(
            visibleTestimonials.map((t, i) => ({ testimonial: t, globalIndex: i })),
            3
        ),
        [visibleTestimonials]
    );

    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Stable Masonry Grid — items never change columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
                {columns.map((column, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-8">
                        {column.map(({ testimonial, globalIndex }) => {
                            const isNew = globalIndex >= prevCount;

                            return (
                                <motion.div
                                    key={testimonial.id}
                                    initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        duration: 0.8,
                                        delay: isNew ? (globalIndex % 6) * 0.15 : 0,
                                        ease: [0.25, 0.46, 0.45, 0.94]
                                    }}
                                >
                                    <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-sand-100/50 hover:shadow-lg hover:border-sand-200 hover:-translate-y-1 transition-all duration-500 relative group">
                                        {/* Quote Icon - Watermark */}
                                        <div className="absolute top-6 left-6 text-sand-100 opacity-30 group-hover:text-amber-500/10 transition-all duration-700">
                                            <Quote size={48} fill="currentColor" strokeWidth={0} />
                                        </div>

                                        <div className="relative z-10">
                                            <p className="font-serif text-sand-900 leading-relaxed text-lg mb-8 italic opacity-90 relative">
                                                "{testimonial.quote}"
                                            </p>

                                            <div className="flex items-center gap-4 pt-6 border-t border-sand-50 group-hover:border-sand-100 transition-colors duration-500">
                                                <div className="w-8 h-[1px] bg-clay-400 group-hover:w-12 transition-all duration-500"></div>
                                                <div>
                                                    <p className="font-sans text-sm font-bold text-sand-900 tracking-wide uppercase">
                                                        {testimonial.author}
                                                    </p>
                                                    {testimonial.context && (
                                                        <p className="text-xs font-medium text-sand-500 mt-1">
                                                            {testimonial.context}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ))}
            </div>

            {/* Load More Button - Seamless Integration */}
            {hasMore && (
                <div className="mt-8 text-center relative z-20 pb-12">
                    {/* Extended White Gradient for seamless blend */}
                    <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white via-white/90 to-transparent pointer-events-none -z-10"></div>

                    <div className="relative inline-flex flex-col items-center gap-6 pt-32">
                        <Button
                            onClick={handleLoadMore}
                            variant="outline"
                            size="lg"
                            className="bg-white/80 backdrop-blur-sm hover:bg-white border-sand-200 text-sand-800 hover:text-clay-600 shadow-sm hover:shadow-md transition-all duration-500 px-12"
                        >
                            Read More Stories
                        </Button>
                        <p className="text-sand-400 text-xs tracking-[0.2em] uppercase font-bold opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                            Showing {visibleCount} of {sortedTestimonials.length} stories
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
