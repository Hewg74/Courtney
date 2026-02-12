import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Results: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-20">
      <div className="text-center space-y-6 border-b border-sand-200 pb-16">
        <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest">Client Love</span>
        <h1 className="text-5xl md:text-6xl font-serif text-sand-900">Family Stories</h1>
        <p className="text-xl text-sand-600 max-w-2xl mx-auto font-light">
          Real stories of families moving from overwhelm to ease. (Names changed for privacy).
        </p>
      </div>

      <div className="columns-1 md:columns-2 gap-8 space-y-8">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="break-inside-avoid bg-white p-10 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300">
            <Quote className="text-clay-200 mb-6" size={32} />
            <p className="text-lg text-sand-700 font-serif leading-relaxed mb-6 italic">
              "{t.quote}"
            </p>
            <div className="flex items-center space-x-3 pt-4 border-t border-sand-50">
              <div className="w-8 h-8 rounded-full bg-sand-100 flex items-center justify-center text-xs font-bold text-sand-500">
                {t.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-sand-900 text-sm">{t.author}</div>
                <div className="text-sand-400 text-xs uppercase tracking-wide">{t.context}</div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Call to action card - integrated into grid */}
        <div className="break-inside-avoid bg-clay-50 p-10 rounded-3xl border border-clay-100 flex flex-col justify-center text-center space-y-6">
           <h3 className="text-2xl font-serif text-sand-900">Your story matters.</h3>
           <p className="text-sand-600 font-light text-sm">Every family deserves a home that feels like a sanctuary.</p>
           <button 
             onClick={() => window.open('https://calendly.com', '_blank')}
             className="text-sand-900 font-bold text-sm hover:text-clay-600 transition-colors underline decoration-clay-300 underline-offset-4 uppercase tracking-widest"
           >
             Start Here
           </button>
        </div>
      </div>
    </div>
  );
};
