import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-sand-900 text-sand-200 py-20 px-6 rounded-t-[3rem] mt-12 mx-2">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 text-center md:text-left">

        <div className="md:col-span-5 space-y-6">
          <h3 className="text-3xl font-serif text-sand-50">Courtney Alex</h3>
          <p className="text-sand-400 font-sans text-sm leading-relaxed max-w-xs font-light">
            Helping adults and families feel steadier, calmer, and more connected.
          </p>
          <div className="pt-2 text-xs tracking-widest uppercase text-sand-600 font-bold">
            NBC-HWC Certified · Qigong Teacher · Author
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <h4 className="text-sand-50 font-sans font-bold text-xs uppercase tracking-widest">Explore</h4>
          <ul className="space-y-3 text-sm font-light text-sand-300">
            <li><button onClick={() => setView('work-with-me')} className="hover:text-white transition-colors">Work With Me</button></li>
            <li><button onClick={() => setView('qigong')} className="hover:text-white transition-colors">Qigong</button></li>
            <li><button onClick={() => setView('about')} className="hover:text-white transition-colors">About</button></li>
            <li><button onClick={() => setView('contact')} className="hover:text-white transition-colors">Contact</button></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-6">
          <h4 className="text-sand-50 font-sans font-bold text-xs uppercase tracking-widest">Connect</h4>
          <p className="text-sm text-sand-300 font-light">
            <a href="mailto:hello@courtneyalex.com" className="hover:text-white transition-colors">hello@courtneyalex.com</a><br />
            Virtual Worldwide · In-person on Maui
          </p>
          <div className="pt-2 flex gap-4">
            <button onClick={() => window.open('https://instagram.com/tiny_psychic', '_blank')} className="text-sand-400 hover:text-white transition-colors text-sm underline decoration-sand-700 underline-offset-4">
              Instagram
            </button>
            <button onClick={() => window.open('https://youtube.com/@courtneyalexqi', '_blank')} className="text-sand-400 hover:text-white transition-colors text-sm underline decoration-sand-700 underline-offset-4">
              YouTube
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-sand-800 text-xs text-sand-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© 2017–{new Date().getFullYear()} Courtney Alex LLC. All rights reserved.</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-clay-600"></span>
          I respect client privacy.
        </span>
      </div>
    </footer>
  );
};
