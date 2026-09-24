import React from 'react';
import { ViewState } from '../types';
import { Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { Rings } from './Rings';
import { Button } from './Button';
import { INSTAGRAM_URL, YOUTUBE_URL, CALENDLY_URL, openExternal } from '../constants';

interface FooterProps {
  setView: (view: ViewState) => void;
}

const LINKS: { label: string; value: ViewState }[] = [
  { label: 'Work With Me', value: 'work-with-me' },
  { label: 'Qigong', value: 'qigong' },
  { label: 'Testimonials', value: 'testimonials' },
  { label: 'About', value: 'about' },
  { label: 'Books', value: 'book' },
  { label: 'Contact', value: 'contact' },
];

export const Footer: React.FC<FooterProps> = ({ setView }) => {
  return (
    <footer className="relative overflow-hidden bg-forest text-mist">
      <Rings
        className="absolute -right-40 -top-24 w-[720px] max-w-none text-mist/[0.07] pointer-events-none"
        strokeWidth={1}
      />
      <div className="relative max-w-[1320px] mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-16 lg:gap-24 pb-20 border-b border-line-dark">
          <div className="space-y-10">
            <p className="font-serif text-display-md text-mist max-w-[18ch]">
              Helping adults and families feel steadier, calmer, and more{' '}
              <em className="text-clay-glow">connected.</em>
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="light" arrow onClick={() => openExternal(CALENDLY_URL)}>
                Book a free chat
              </Button>
              <a
                href="mailto:hello@courtneyalex.com"
                className="inline-flex items-center min-h-[48px] px-7 rounded-full border border-mist/30 text-mist hover:border-mist transition-colors duration-feedback"
              >
                hello@courtneyalex.com
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 text-[0.9375rem]">
            <div>
              <h2 className="font-serif italic text-xl text-mist-2 mb-5">Explore</h2>
              <ul className="space-y-2.5">
                {LINKS.map((l) => (
                  <li key={l.value}>
                    <button onClick={() => setView(l.value)} className="text-mist hover:text-clay-glow transition-colors duration-feedback py-1">
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-serif italic text-xl text-mist-2 mb-5">Find me</h2>
              <p className="text-mist leading-relaxed">
                Virtual worldwide
                <br />
                In-person on Maui
              </p>
              <div className="flex flex-col gap-2 mt-6">
                <button onClick={() => openExternal(INSTAGRAM_URL)} className="group inline-flex items-center gap-2 text-mist hover:text-clay-glow transition-colors duration-feedback py-1">
                  <Instagram size={17} strokeWidth={1.5} aria-hidden="true" /> Instagram
                  <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100" aria-hidden="true" />
                </button>
                <button onClick={() => openExternal(YOUTUBE_URL)} className="group inline-flex items-center gap-2 text-mist hover:text-clay-glow transition-colors duration-feedback py-1">
                  <Youtube size={17} strokeWidth={1.5} aria-hidden="true" /> YouTube
                  <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row gap-3 justify-between text-sm text-mist-2">
          <span>&copy; {new Date().getFullYear()} Courtney Alex LLC. NBC-HWC certified coach and Qigong teacher.</span>
          <span>I respect client privacy.</span>
        </div>
      </div>
    </footer>
  );
};
