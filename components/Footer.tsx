import React from 'react';
import { ViewState } from '../types';
import { Instagram, Youtube } from 'lucide-react';
import { INSTAGRAM_URL, YOUTUBE_URL, openExternal } from '../constants';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-sand-900 text-sand-200 py-24 px-6 rounded-t-[3rem] mt-16 mx-2">
      <div className="max-w-6xl mx-auto">

        {/* Brand Section — Centered */}
        <div className="text-center mb-16 pb-12 border-b border-sand-800">
          <h3 className="text-3xl md:text-4xl font-serif text-sand-50 mb-4">Courtney Alex</h3>
          <p className="text-sand-300 font-sans text-base leading-relaxed max-w-md mx-auto">
            Helping adults and families feel steadier, calmer, and more connected.
          </p>
          <div className="pt-4 text-xs tracking-widest uppercase text-sand-500 font-bold">
            NBC-HWC Certified · Qigong Teacher · Author
          </div>
        </div>

        {/* Three Columns on Desktop, Stacked on Mobile */}
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">

          {/* Explore */}
          <div className="space-y-6">
            <h4 className="text-sand-50 font-sans font-bold text-xs uppercase tracking-widest">Explore</h4>
            <ul className="space-y-3 text-sm text-sand-300">
              <li><button onClick={() => setView('work-with-me')} className="hover:text-clay-200 transition-colors">Work With Me</button></li>
              <li><button onClick={() => setView('qigong')} className="hover:text-clay-200 transition-colors">Qigong</button></li>
              <li><button onClick={() => setView('testimonials')} className="hover:text-clay-200 transition-colors">Testimonials</button></li>
              <li><button onClick={() => setView('about')} className="hover:text-clay-200 transition-colors">About</button></li>
              <li><button onClick={() => setView('contact')} className="hover:text-clay-200 transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h4 className="text-sand-50 font-sans font-bold text-xs uppercase tracking-widest">Connect</h4>
            <p className="text-sm text-sand-300">
              <a href="mailto:hello@courtneyalex.com" className="hover:text-clay-200 transition-colors">hello@courtneyalex.com</a><br />
              Virtual Worldwide<br/>
              In-person on Maui
            </p>
          </div>

          {/* Social */}
          <div className="space-y-6">
            <h4 className="text-sand-50 font-sans font-bold text-xs uppercase tracking-widest">Follow</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <button onClick={() => openExternal(INSTAGRAM_URL)} aria-label="Follow Courtney on Instagram" className="text-sand-400 hover:text-clay-200 transition-colors p-2 hover:bg-sand-800 rounded-full">
                <Instagram size={20} />
              </button>
              <button onClick={() => openExternal(YOUTUBE_URL)} aria-label="Watch Courtney on YouTube" className="text-sand-400 hover:text-clay-200 transition-colors p-2 hover:bg-sand-800 rounded-full">
                <Youtube size={20} />
              </button>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-sand-800 text-xs text-sand-600 flex flex-col items-center gap-4 text-center">
        <span>&copy; {new Date().getFullYear()} Courtney Alex LLC. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-clay-600"></span>
          I respect client privacy.
        </span>
      </div>
    </footer>
  );
};
