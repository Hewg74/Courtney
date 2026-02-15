import React from 'react';
import { Button } from '../components/Button';
import { Mail } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export const Contact: React.FC = () => {
    return (
        <div className="animate-fade-in pt-32 pb-24 px-6 max-w-4xl mx-auto space-y-20">

            {/* ─── Header ─── */}
            <div className="text-center space-y-6 max-w-2xl mx-auto">
                <Reveal variant="fadeUp">
                    <h1 className="text-5xl md:text-6xl font-serif text-sand-900">Get in touch</h1>
                </Reveal>
                <Reveal variant="fadeUp" delay={0.2}>
                    <p className="text-xl text-sand-600 font-light leading-relaxed">
                        I'm happy to talk through what might work for you. Reach out to ask a question, book a session, or just say hello.
                    </p>
                </Reveal>
            </div>

            {/* ─── Contact Options ─── */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Book a Call */}
                <Reveal delay={0.1}>
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-sand-50 h-full flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 bg-sage-50 rounded-2xl flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-sage-600">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h2 className="text-2xl font-serif text-sand-900">Book a free chat</h2>
                        <p className="text-sand-600 font-light text-sm leading-relaxed flex-grow">
                            A 15-minute intro call to talk about what you're looking for and see if coaching is a good fit.
                        </p>
                        <Button
                            size="lg"
                            className="w-full"
                            onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}
                        >
                            Schedule on Calendly
                        </Button>
                    </div>
                </Reveal>

                {/* Email */}
                <Reveal delay={0.2}>
                    <div className="bg-sand-50 rounded-3xl p-8 md:p-10 border border-sand-100 h-full flex flex-col items-center text-center space-y-6">
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center">
                            <Mail size={28} className="text-clay-500" strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl font-serif text-sand-900">Send an email</h2>
                        <p className="text-sand-600 font-light text-sm leading-relaxed flex-grow">
                            Have a question about coaching, workshops, or Qigong? I'd love to hear from you.
                        </p>
                        <a
                            href="mailto:hello@courtneyalex.com"
                            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-sand-300 text-sand-800 text-sm font-semibold hover:bg-white hover:border-sand-400 transition-all"
                        >
                            hello@courtneyalex.com
                        </a>
                    </div>
                </Reveal>
            </div>

            {/* ─── Additional Info ─── */}
            <Reveal>
                <div className="text-center space-y-6 max-w-xl mx-auto">
                    <p className="text-sand-500 text-sm font-light leading-relaxed">
                        I work with clients virtually worldwide and in-person on Maui.
                    </p>
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={() => window.open('https://instagram.com/tiny_psychic', '_blank')}
                            className="text-sand-400 hover:text-sand-700 transition-colors text-sm underline underline-offset-4 decoration-sand-300"
                        >
                            Instagram
                        </button>
                        <button
                            onClick={() => window.open('https://youtube.com/@courtneyalexqi', '_blank')}
                            className="text-sand-400 hover:text-sand-700 transition-colors text-sm underline underline-offset-4 decoration-sand-300"
                        >
                            YouTube
                        </button>
                    </div>
                </div>
            </Reveal>

        </div>
    );
};
