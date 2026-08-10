import React from 'react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { openExternal } from '../constants';
import { ViewState } from '../types';
import { Star } from 'lucide-react';

interface BookProps {
  setView: (view: ViewState) => void;
}

export const Book: React.FC<BookProps> = ({ setView }) => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-24">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-4xl mx-auto pb-8">
        <Reveal width="100%">
          <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest mb-4 block">Publications</span>
          <h1 className="text-5xl md:text-7xl font-serif text-sand-900 mb-6">My Books</h1>
        </Reveal>
      </div>

      {/* Books List */}
      <div className="space-y-16">
        {/* Book 1: Turning 40 */}
        <Reveal width="100%">
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white shadow-glass hover:shadow-premium transition-all duration-700 ring-1 ring-sand-900/5">
            <div className="absolute inset-0 bg-gradient-to-br from-sage-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="w-full max-w-[240px] mx-auto rounded-xl shadow-2xl overflow-hidden relative transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-700">
                  <img src="https://images-na.ssl-images-amazon.com/images/P/B0H9VXSGGV.01.LZZZZZZZ.jpg" alt="Turning 40 Cover" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-sage-100 text-sage-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-2 shadow-sm border border-sage-200">
                  <Star size={14} className="text-sage-600" /> New Release
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-sand-900 leading-tight">Turning 40 &amp; Other Things We're Not Supposed to Do</h2>
                <p className="text-xl text-sage-700 font-serif italic">Notes on Beauty, Bodies, Renewal, and Becoming More of Ourselves</p>
                <p className="text-sand-600 font-light leading-relaxed text-lg">
                  Turning forty arrived with unexpected questions. My confidence was being tested. And somewhere between hormones, headaches, grief, joy, sleeplessness, and learning to trust myself again, I discovered that this season of life wasn’t about becoming less than before.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button variant="primary" onClick={() => openExternal('https://www.amazon.com/Turning-Other-Things-Were-Supposed-ebook/dp/B0H9VXSGGV?th=1&psc=1&dib=eyJ2IjoiMSJ9.C6F16VSTWjyG8Z9qZKIyuhxunI72PTgYfCCfGz64B1U.mN9N9IkBVefpnYdln9T2saHl7Q4_ATKiOp42gpNQCmQ&dib_tag=AUTHOR')}>
                    Available on Amazon &rarr;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Book 2: Trust Your Magical Self */}
        <Reveal width="100%">
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-md rounded-[3rem] p-8 md:p-12 border border-white shadow-glass hover:shadow-premium transition-all duration-700 ring-1 ring-sand-900/5">
            <div className="absolute inset-0 bg-gradient-to-br from-clay-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center relative z-10">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="w-full max-w-[240px] mx-auto rounded-xl shadow-2xl overflow-hidden relative transform group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-700">
                  <img src="https://images-na.ssl-images-amazon.com/images/P/B07YWFQ13G.01.LZZZZZZZ.jpg" alt="Trust Your Magical Self Cover" className="w-full h-auto object-cover" />
                </div>
              </div>
              <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-serif text-sand-900 leading-tight">Trust Your Magical Self</h2>
                <p className="text-xl text-clay-700 font-serif italic">How to be Super Psychic, Extra Intuitive, and Love Your Sensitive Soul</p>
                <p className="text-sand-600 font-light leading-relaxed text-lg">
                  This reflective, experience-based guide is written for highly sensitive and intuitive people who want to embrace their gifts as strengths rather than struggles. Through personal stories, illustrations, guided exercises, and space for reflection, Courtney Alex Aldor shares tools that helped her navigate sensitivity and intuition in daily life. Readers often describe the book as supportive, validating, and “like talking to a friend.”
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button variant="outline" onClick={() => openExternal('https://www.amazon.com/Trust-Your-Magical-Self-Intuitive-ebook/dp/B081M6WVDB')}>
                    Available on Amazon &rarr;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
};
