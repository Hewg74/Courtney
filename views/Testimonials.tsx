import React from 'react';
import { Reveal } from '../components/Reveal';
import { TESTIMONIALS } from '../constants';
import { TestimonialGrid } from '../components/TestimonialGrid';

export const Testimonials: React.FC = () => {
  return (
    <div className="animate-fade-in pb-24 relative overflow-x-hidden">
      <section className="py-32 bg-gradient-to-b from-white via-sand-50/50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full border-x border-sand-100/50 pointer-events-none -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clay-50/50 rounded-full blur-[120px] -z-10 opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-sand-100/40 rounded-full blur-[100px] -z-10 opacity-70 -translate-x-1/3 translate-y-1/4" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal width="100%" className="mb-20 text-center">
            <h2 className="text-xs font-bold uppercase tracking-widest text-clay-600 mb-4">Client Stories</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-sand-900 italic mb-6">Finding steadiness & connection</h3>
            <p className="text-sand-600 max-w-2xl mx-auto font-light text-lg">
              There is no single path to feeling better. Here are some real experiences of finding more ease and balance.
            </p>
          </Reveal>

          <TestimonialGrid testimonials={TESTIMONIALS} showAll />
        </div>
      </section>
    </div>
  );
};
