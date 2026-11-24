import React, { useState } from 'react';
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

// Holiday pink is #BE3F6B: deepened from #D4537E so white small print stays readable (5.1:1).
export const PromoBanner: React.FC<PromoBannerProps> = ({ className = '' }) => {
  const [showDetails, setShowDetails] = useState(false);
  if (!isPromoActive()) return null;

  return (
    <Reveal width="100%" className={className}>
      <aside
        aria-label="Black Friday sale"
        className="relative overflow-hidden max-w-5xl mx-auto bg-[#BE3F6B] text-white rounded-3xl shadow-premium px-6 py-8 md:px-12 md:py-10"
      >
        <div className="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-28 -left-20 w-72 h-72 rounded-full bg-[#993556]/40 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10 text-center md:text-left">
          <div className="flex-shrink-0">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#FBEAF0]">
              <Gift size={14} strokeWidth={2} aria-hidden="true" />
              Black Friday · Nov 25–30
            </span>
            <div className="font-serif italic text-6xl md:text-7xl leading-none mt-3">20% off</div>
            <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#FBEAF0] mt-3">
              Qigong &amp; Health Coaching*
            </span>
          </div>

          <div className="flex-grow md:border-l md:border-white/25 md:pl-10 space-y-5">
            <p className="font-serif text-2xl md:text-3xl leading-snug">
              Give yourself (or someone you love) the gift of wellness!
            </p>
            <button
              type="button"
              onClick={() => openExternal(BOOKING_URL)}
              className="inline-flex items-center gap-2 bg-white text-[#993556] text-sm font-medium px-7 py-3.5 rounded-full shadow-soft hover:bg-[#FBEAF0] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
            >
              Book a Free 15-Min Chat
            </button>
          </div>
        </div>

        {/* Fine print: short by default, Courtney's full wording on tap */}
        <p className="relative text-xs text-white font-light leading-relaxed mt-6 pt-5 border-t border-white/25 text-center md:text-left">
          {showDetails ? (
            <>*New &amp; Returning Health Coaching Clients, please book a complimentary 15-min intro chat to explore coaching fit. Black Friday session prices will be secured for any intro chats booked between Nov 23–30th, even if we meet after the sale!</>
          ) : (
            <>*New &amp; returning health coaching clients: book a free intro chat by Nov 30 to lock in sale prices.</>
          )}{' '}
          <button
            type="button"
            onClick={() => setShowDetails(v => !v)}
            aria-expanded={showDetails}
            className="underline underline-offset-2 font-medium hover:text-[#FBEAF0]"
          >
            {showDetails ? 'Less' : 'Details'}
          </button>
        </p>
      </aside>
    </Reveal>
  );
};
