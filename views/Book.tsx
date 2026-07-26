import React from 'react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { YOUTUBE_URL, openExternal } from '../constants';
import { ViewState } from '../types';
import { BookOpen, Youtube, Star, Heart } from 'lucide-react';

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
          <p className="text-xl text-sand-600 font-light leading-relaxed max-w-2xl mx-auto">
            Two books. One about getting older and all the rules nobody agreed to. The other about feeling things deeply and what to do with that.
          </p>
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
                  We all got handed a list at some point. What we should have done by now, how we should look while doing it. This book is about setting the list down. It's honest about bodies and aging and the things we're supposed to keep quiet about, and it's funny, because most of that gets funny once somebody finally says it out loud.
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
                  The earlier of the two, written for people who feel everything. If you've been told you're too sensitive, or you need a quiet hour after a crowded room, you'll recognize yourself in here. It's a practical book. Ways to settle yourself down, trust your own read on things, and stop soaking up stress that was never yours.
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

      {/* Behind the Books */}
      <Reveal width="100%">
        <div className="bg-sand-50/80 backdrop-blur-md rounded-[3rem] p-12 md:p-20 text-center space-y-8 border border-white shadow-soft relative overflow-hidden ring-1 ring-sand-900/5 mt-16">
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
          <Heart size={32} className="mx-auto text-clay-400 mb-6 relative z-10" />
          <h2 className="text-3xl md:text-4xl font-serif text-sand-900 relative z-10">Why I wrote them</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-sand-700 font-light text-lg leading-relaxed relative z-10 text-left md:text-center">
            <p>
              I write for the same reason I coach. It helps to hear that someone else has been through it, and that there's something you can actually do about it.
            </p>
            <p>
              Neither book is a plan you have to follow. Take what's useful, leave the rest. If one of them makes a hard week feel a little more manageable, that's what I wanted.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Resources Section (The original /book intent) */}
      <Reveal width="100%">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2rem] shadow-soft border border-white flex flex-col items-center text-center space-y-6 group hover:shadow-premium transition-all duration-500 ring-1 ring-sand-900/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
              <Youtube size={32} />
            </div>
            <h3 className="text-2xl font-serif text-sand-900 relative z-10">The practices, on video</h3>
            <p className="text-sand-600 font-light text-sm flex-grow relative z-10 leading-relaxed">
              The practices from <em>Trust Your Magical Self</em> are up on my YouTube channel. Guided Qigong, short meditations, and simple things to try when you need to settle down.
            </p>
            <div className="relative z-10 w-full pt-4">
              <Button variant="outline" className="w-full" onClick={() => openExternal(YOUTUBE_URL)}>
                Watch on YouTube
              </Button>
            </div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-[2rem] shadow-soft border border-white flex flex-col items-center text-center space-y-6 group hover:shadow-premium transition-all duration-500 ring-1 ring-sand-900/5 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-sage-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="w-16 h-16 bg-sage-50 text-sage-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative z-10">
              <BookOpen size={32} />
            </div>
            <h3 className="text-2xl font-serif text-sand-900 relative z-10">Working together</h3>
            <p className="text-sand-600 font-light text-sm flex-grow relative z-10 leading-relaxed">
              If any of this sounds like your life, coaching or a Qigong class might be a good fit. Same tools, worked into your actual week.
            </p>
            <div className="relative z-10 w-full pt-4">
              <Button variant="outline" className="w-full" onClick={() => setView('work-with-me')}>
                Work With Me
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

    </div>
  );
};
