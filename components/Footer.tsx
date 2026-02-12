import React from 'react';
import { ViewState } from '../types';

interface FooterProps {
  setView: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="bg-sand-900 text-sand-200 py-20 px-6 rounded-t-[3rem] mt-12 mx-2">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
        
        <div className="md:col-span-5 space-y-6">
          <h3 className="text-3xl font-serif text-sand-50">Courtney Alex</h3>
          <p className="text-sand-400 font-sans text-sm leading-relaxed max-w-xs font-light">
            Supporting anxious kids and overwhelmed families with gentle, evidence-based wellness coaching.
          </p>
          <div className="pt-2 text-xs tracking-widest uppercase text-sand-600 font-bold">
            NBC-HWC Certified
          </div>
        </div>

        <div className="md:col-span-3 space-y-6">
          <h4 className="text-sand-50 font-sans font-bold text-xs uppercase tracking-widest">Explore</h4>
          <ul className="space-y-3 text-sm font-light text-sand-300">
            <li><button onClick={() => setView('how-i-help')} className="hover:text-white transition-colors">Services</button></li>
            <li><button onClick={() => setView('workshops')} className="hover:text-white transition-colors">Workshops</button></li>
            <li><button onClick={() => setView('resources')} className="hover:text-white transition-colors">Free Resources</button></li>
            <li><button onClick={() => setView('about')} className="hover:text-white transition-colors">About Courtney</button></li>
          </ul>
        </div>

        <div className="md:col-span-4 space-y-6">
          <h4 className="text-sand-50 font-sans font-bold text-xs uppercase tracking-widest">Connect</h4>
          <p className="text-sm text-sand-300 font-light">
            <a href="mailto:hello@courtneyalex.com" className="hover:text-white transition-colors">hello@courtneyalex.com</a><br />
            Los Angeles, CA & Virtual Worldwide
          </p>
          <div className="pt-2">
             <button onClick={() => window.open('https://instagram.com', '_blank')} className="text-sand-400 hover:text-white transition-colors text-sm underline decoration-sand-700 underline-offset-4">
               Instagram
             </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-sand-800 text-xs text-sand-600 flex flex-col md:flex-row justify-between items-center gap-4">
        <span>© {new Date().getFullYear()} Courtney Alex Wellness. All rights reserved.</span>
        <span className="flex items-center gap-2">
           <span className="w-1.5 h-1.5 rounded-full bg-clay-600"></span>
           Designed with intention.
        </span>
      </div>
    </footer>
  );
};
