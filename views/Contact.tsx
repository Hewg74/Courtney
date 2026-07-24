import React from 'react';
import { Button } from '../components/Button';
import { Mail } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { CALENDLY_URL, INSTAGRAM_URL, YOUTUBE_URL, openExternal } from '../constants';

export const Contact: React.FC = () => {
    return (
        <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-24">

            {/* ─── Header ─── */}
            <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
                <Reveal variant="fadeUp">
                    <h1 className="text-5xl md:text-7xl font-serif text-sand-900 leading-none">Get in touch</h1>
                </Reveal>
                <Reveal variant="fadeUp" delay={0.2}>
                    <p className="text-xl text-sand-600 font-light leading-relaxed">
                        I'm happy to talk through what might work for you. Reach out to ask a question or book a session.
                    </p>
                </Reveal>
            </div>

            {/* ─── Contact Options ─── */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-12">
                {/* Book a Call */}
                <Reveal delay={0.1} width="100%" className="h-full">
                    <div className="group relative overflow-hidden bg-white/80 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] border border-white shadow-soft h-full flex flex-col items-center text-center space-y-8 hover:shadow-premium hover:-translate-y-2 transition-all duration-500 ring-1 ring-sand-900/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-sage-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="w-20 h-20 bg-sage-50 rounded-2xl flex items-center justify-center shadow-inner relative z-10 group-hover:scale-110 transition-transform duration-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="text-sage-600">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h2 className="text-3xl font-serif text-sand-900">Book a free chat</h2>
                        <p className="text-sand-600 font-light text-base leading-relaxed flex-grow max-w-xs mx-auto">
                            A 15-minute intro call to talk about what you're looking for and see if coaching is a good fit.
                        </p>
                        <Button
                            size="lg"
                            className="w-full"
                            onClick={() => openExternal(CALENDLY_URL)}
                        >
                            Schedule on Calendly
                        </Button>
                    </div>
                </Reveal>

                {/* Email */}
                <Reveal delay={0.2} width="100%" className="h-full">
                    <div className="group relative overflow-hidden bg-sand-50/80 backdrop-blur-md p-10 md:p-16 rounded-[2.5rem] border border-white shadow-soft h-full flex flex-col items-center text-center space-y-8 hover:shadow-premium hover:-translate-y-2 transition-all duration-500 ring-1 ring-sand-900/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-soft relative z-10 group-hover:scale-110 transition-transform duration-500">
                            <Mail size={32} className="text-clay-500" strokeWidth={1.25} />
                        </div>
                        <h2 className="text-3xl font-serif text-sand-900">Send an email</h2>
                        <p className="text-sand-600 font-light text-base leading-relaxed flex-grow max-w-xs mx-auto">
                            Have a question about coaching, workshops, or Qigong? I'd love to hear from you.
                        </p>
                        <a
                            href="mailto:hello@courtneyalex.com"
                            className="w-full inline-flex items-center justify-center px-8 py-4 rounded-full border border-sand-300 text-sand-800 text-base font-medium hover:bg-white hover:border-sand-400 transition-colors bg-transparent"
                        >
                            hello@courtneyalex.com
                        </a>
                    </div>
                </Reveal>
            </div>

            {/* ─── Additional Info ─── */}
            <Reveal width="100%">
                <div className="text-center space-y-8 max-w-xl mx-auto pt-12 border-t border-sand-200/50">
                    <p className="text-sand-500 text-sm font-light leading-relaxed uppercase tracking-wider">
                        I work with clients virtually worldwide &bull; In-person on Maui
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                        <button
                            onClick={() => openExternal(INSTAGRAM_URL)}
                            aria-label="Follow Courtney on Instagram"
                            className="text-sand-400 hover:text-sand-800 transition-colors text-sm font-medium tracking-wide"
                        >
                            @COURTNEYALEX_HEALTHCOACH
                        </button>
                        <button
                            onClick={() => openExternal(YOUTUBE_URL)}
                            aria-label="Watch Courtney on YouTube"
                            className="text-sand-400 hover:text-sand-800 transition-colors text-sm font-medium tracking-wide"
                        >
                            YOUTUBE
                        </button>
                    </div>
                </div>
            </Reveal>

        </div>
    );
};
