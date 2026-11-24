import React from 'react';
import { Gift } from 'lucide-react';
import { Reveal } from './Reveal';
import { BOOKING_URL, openExternal } from '../constants';

// Black Friday 2026. Hides itself after Nov 30 (end of day, Hawaii time),
// so it never lingers past the sale. To run it again, update the date and copy.
const PROMO_ENDS = new Date('2026-12-01T00:00:00-10:00');

export const isPromoActive = () => Date.now() < PROMO_ENDS.getTime();

interface PromoBannerProps {
  className?: string;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ className = '' }) => {
  if (!isPromoActive()) return null;

  return (
    <Reveal width="100%" className={className}>
      <aside
        aria-label="Black Friday sale"
        className="relative overflow-hidden max-w-5xl mx-auto bg-clay-50/90 backdrop-blur-md rounded-3xl border border-clay-100 shadow-soft ring-1 ring-sand-900/5 px-6 py-6 md:px-10 md:py-7"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />
        <div className="relative flex flex-col md:flex-row items-center gap-5 md:gap-8 text-center md:text-left">
          <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-2xl bg-white shadow-soft border border-clay-100 flex-shrink-0">
            <Gift size={24} className="text-clay-500" strokeWidth={1.5} />
          </div>
          <div className="flex-grow space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-clay-500 block">
              Black Friday Sale · Nov 25–30
            </span>
            <p className="text-lg md:text-xl font-serif text-sand-900 leading-snug">
              Give yourself (or someone you love) the gift of wellness! Get 20% off Qigong &amp; Health Coaching Sessions from Nov 25–30th!*
            </p>
            <p className="text-xs text-sand-500 font-light leading-relaxed">
              *New &amp; Returning Health Coaching Clients, please book a complimentary 15-min intro chat to explore coaching fit. Black Friday session prices will be secured for any intro chats booked between Nov 23–30th, even if we meet after the sale!
            </p>
          </div>
          <button
            type="button"
            onClick={() => openExternal(BOOKING_URL)}
            className="shrink-0 inline-flex items-center gap-2 bg-sand-900 text-sand-50 text-sm font-medium px-6 py-3 rounded-full hover:bg-clay-700 transition-all duration-300 hover:-translate-y-0.5 shadow-soft hover:shadow-medium whitespace-nowrap"
          >
            Book a Free 15-Min Chat
          </button>
        </div>
      </aside>
    </Reveal>
  );
};
