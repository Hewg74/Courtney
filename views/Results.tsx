import React from 'react';
import { CASE_STUDIES, TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import { Button } from '../components/Button';

export const Results: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-24">

      {/* Header */}
      <div className="text-center space-y-6 border-b border-sand-200 pb-16">
        <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest">Client Love</span>
        <h1 className="text-5xl md:text-6xl font-serif text-sand-900">Real Families.<br />Real Shifts.</h1>
        <p className="text-xl text-sand-600 max-w-2xl mx-auto font-light">
          From daily meltdowns to peaceful evenings. Here's what's possible.
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="space-y-12">
        <h2 className="text-2xl font-serif text-sand-800 text-center">Case Studies</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.id} className="bg-white p-8 rounded-[2rem] shadow-soft border border-sand-50 flex flex-col h-full hover:shadow-medium transition-shadow duration-300">
              <h3 className="text-xl font-serif text-sand-900 mb-6 pb-4 border-b border-sand-100">
                {study.title}
              </h3>
              <div className="space-y-6 flex-grow">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-clay-500 block mb-1">The Situation</span>
                  <p className="text-sand-600 text-sm leading-relaxed">{study.situation}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sage-600 block mb-1">The Work</span>
                  <p className="text-sand-600 text-sm leading-relaxed">{study.work}</p>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-sand-400 block mb-1">The Outcome</span>
                  <p className="text-sand-800 font-medium text-sm leading-relaxed bg-sand-50 p-3 rounded-xl border border-sand-200">
                    {study.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Masonry */}
      <div className="space-y-12">
        <h2 className="text-2xl font-serif text-sand-800 text-center">What Parents Say</h2>
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="break-inside-avoid bg-sand-50 p-10 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
              <Quote className="text-clay-200 mb-6" size={32} />
              <p className="text-lg text-sand-700 font-serif leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center space-x-3 pt-4 border-t border-sand-200/50">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-sand-500 shadow-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sand-900 text-sm">{t.author}</div>
                  <div className="text-sand-400 text-xs uppercase tracking-wide">{t.context}</div>
                </div>
              </div>
            </div>
          ))}

          {/* CTA in grid */}
          <div className="break-inside-avoid bg-sand-900 p-10 rounded-3xl text-center space-y-6 flex flex-col justify-center items-center h-full min-h-[300px]">
            <h3 className="text-2xl font-serif text-sand-50">Your story could be next.</h3>
            <p className="text-sand-300 font-light text-sm">You don't have to navigate this alone.</p>
            <Button size="md" className="bg-sand-50 text-sand-900 hover:bg-clay-100" onClick={() => window.open('https://calendly.com', '_blank')}>
              Start Here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
