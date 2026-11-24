import React, { useState } from 'react';
import { Sparkle, ArrowRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { BOOKING_URL, openExternal } from '../constants';

// Black Friday 2026. Hides itself after Nov 30 (end of day, Hawaii time),
// so it never lingers past the sale. To run it again, update the date and copy.
const PROMO_ENDS = new Date('2026-12-01T00:00:00-10:00');

export const isPromoActive = () => Date.now() < PROMO_ENDS.getTime();

interface PromoBannerProps {
  className?: string;
}

// Holiday pink gradient (#C8467A → #9E3458): every stop keeps white small print readable (≥4.5:1).
export const PromoBanner: React.FC<PromoBannerProps> = ({ className = '' }) => {
  const [showDetails, setShowDetails] = useState(false);
  if (!isPromoActive()) return null;

  return (
    <Reveal width="100%" className={className}>
      <aside
        aria-label="Black Friday sale"
        className="relative overflow-hidden max-w-5xl mx-auto rounded-[1.75rem] bg-gradient-to-br from-[#C8467A] via-[#BE3F6B] to-[#9E3458] text-white shadow-premium ring-1 ring-inset ring-white/15 px-5 py-5 lg:px-9 lg:py-6"
      >
        {/* Atmosphere: warm glow + a few quiet sparkles */}
        <div className="absolute -top-24 -left-10 w-72 h-72 rounded-full bg-[#F4C0D1]/25 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 right-10 w-64 h-64 rounded-full bg-[#E6BDB3]/20 blur-3xl pointer-events-none" />
        <Sparkle aria-hidden="true" size={14} strokeWidth={1.5} className="hidden lg:block absolute top-4 right-6 text-white/50 pointer-events-none" />
        <Sparkle aria-hidden="true" size={9} strokeWidth={1.5} className="hidden lg:block absolute top-10 right-12 text-white/35 pointer-events-none" />
        <Sparkle aria-hidden="true" size={11} strokeWidth={1.5} className="hidden lg:block absolute bottom-5 right-[38%] text-white/30 pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row items-center gap-3 lg:gap-9">
          {/* Headline — first on mobile, middle on desktop */}
          <p className="lg:order-2 lg:flex-grow font-serif text-xl lg:text-2xl leading-snug text-balance text-center lg:text-left max-w-xs lg:max-w-none">
            Give yourself or someone you love the gift&nbsp;of&nbsp;wellness!
          </p>

          {/* The offer: big number + caption pair */}
          <div className="lg:order-1 flex flex-col lg:flex-row items-center gap-1.5 lg:gap-4 flex-shrink-0">
            <div className="font-serif leading-none flex items-baseline gap-1.5">
              <span className="text-5xl lg:text-6xl tracking-tight">20%</span>
              <span className="italic text-2xl lg:text-3xl text-[#FBEAF0]">off</span>
            </div>
            <div className="hidden lg:block h-10 w-px bg-white/30" aria-hidden="true" />
            <div className="text-center lg:text-left space-y-0.5 lg:space-y-1 whitespace-nowrap">
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-white">Qigong &amp; Health Coaching*</span>
              <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#FBEAF0]">Black Friday · Nov 25–30</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => openExternal(BOOKING_URL)}
            className="lg:order-3 group relative overflow-hidden w-full sm:w-auto sm:px-8 flex-shrink-0 inline-flex items-center justify-center gap-2 bg-white text-[#8F2E52] text-sm font-medium px-6 py-2.5 lg:py-3 mt-1 lg:mt-0 rounded-full shadow-soft hover:shadow-premium hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
          >
            <span className="relative z-10">Book a Free 15-Min Chat</span>
            <ArrowRight aria-hidden="true" size={15} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            <span className="absolute inset-0 -translate-x-full group-hover:animate-shimmer bg-gradient-to-r from-transparent via-[#FBEAF0]/70 to-transparent pointer-events-none" />
          </button>
        </div>

        {/* Fine print: short by default, Courtney's full wording on tap */}
        <p className="relative text-[11px] text-white/95 font-light leading-relaxed mt-4 pt-3 lg:mt-5 lg:pt-4 border-t border-white/20 text-center lg:text-left">
          {showDetails ? (
            <>*New &amp; Returning Health Coaching Clients, please book a complimentary 15-min intro chat to explore coaching fit. Black Friday session prices will be secured for any intro chats booked between Nov 23–30th, even if we meet after the sale!</>
          ) : (
            <>*New &amp; returning health coaching clients: book a free intro chat by Nov 30 to lock in sale prices.</>
          )}{' '}
          <button
            type="button"
            onClick={() => setShowDetails(v => !v)}
            aria-expanded={showDetails}
            className="underline underline-offset-2 decoration-white/50 font-medium hover:decoration-white"
          >
            {showDetails ? 'Less' : 'Details'}
          </button>
        </p>
      </aside>
    </Reveal>
  );
};
