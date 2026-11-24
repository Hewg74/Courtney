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
        className="relative overflow-hidden max-w-5xl mx-auto bg-[#BE3F6B] text-white rounded-2xl md:rounded-3xl shadow-soft px-5 py-4 md:px-8 md:py-5"
      >
        <div className="absolute -top-20 -right-16 w-56 h-56 rounded-full bg-white/10 blur-3xl pointer-events-none" />

        <div className="relative flex flex-col md:flex-row md:items-center gap-3 md:gap-8">
          <div className="flex items-center gap-4 md:gap-6 flex-grow">
            <div className="flex-shrink-0 text-center">
              <div className="font-serif italic text-4xl md:text-5xl leading-none">20% off</div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FBEAF0] mt-1.5">
                <Gift size={12} strokeWidth={2} aria-hidden="true" />
                Nov 25–30
              </span>
            </div>
            <div className="border-l border-white/25 pl-4 md:pl-6">
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#FBEAF0] mb-1">
                Black Friday · Qigong &amp; Health Coaching*
              </span>
              <p className="font-serif text-lg md:text-xl leading-snug">
                Give yourself (or someone you love) the gift of wellness!
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => openExternal(BOOKING_URL)}
            className="flex-shrink-0 inline-flex items-center justify-center bg-white text-[#993556] text-sm font-medium px-6 py-2.5 rounded-full shadow-soft hover:bg-[#FBEAF0] hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            Book a Free 15-Min Chat
          </button>
        </div>

        {/* Fine print: short by default, Courtney's full wording on tap */}
        <p className="relative text-[11px] text-white font-light leading-relaxed mt-3">
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
