import React from 'react';
import { Button } from '../components/Button';
import { Play } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { YOUTUBE_URL, openExternal } from '../constants';

export const Qigong: React.FC = () => {
    return (
        <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-20">

            {/* ─── Header ─── */}
            <div className="text-center space-y-6 max-w-3xl mx-auto pb-12 border-b border-sand-200">
                <Reveal width="100%">
                    <span className="text-sage-500 font-sans text-xs font-bold uppercase tracking-widest">Mind &amp; Body</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-sand-900 mt-3 mb-6">Qigong with Courtney</h1>
                    <p className="text-xl text-sand-600 font-light leading-relaxed">
                        Qigong (pronounced CHEE-gong) is a gentle mind-body practice that combines slow movement, breathwork, and meditation. Think of it as a moving meditation — a way to release tension and stress from the body and quiet the mind.
                    </p>
                </Reveal>
            </div>

            {/* ─── Video / Image Section ─── */}
            <Reveal delay={0.2} width="100%">
                <div className="relative aspect-video bg-sage-50 rounded-[2.5rem] overflow-hidden shadow-soft">
                    <img src="/images/qigong-eyes-closed.png" alt="Courtney teaching Qigong" loading="lazy" className="w-full h-full object-cover" />
                    <a
                        href="https://youtube.com/@courtneyalexqi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors group z-10"
                    >
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Play size={32} className="text-sage-700 ml-1" fill="currentColor" />
                        </div>
                    </a>
                </div>
            </Reveal>

            {/* ─── Details ─── */}
            <div className="grid md:grid-cols-2 gap-8">
                <Reveal delay={0.3} width="100%">
                    <div className="bg-white p-10 rounded-[2.5rem] border border-sand-100 shadow-soft h-full hover:shadow-medium transition-shadow duration-300">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-sage-500 mb-4 block">Weekly Group Class</span>
                        <h3 className="text-3xl font-serif text-sand-900 mb-4">Chi Energy Flow</h3>
                        <p className="text-sand-600 font-light leading-relaxed mb-8">
                            A classic mind-body movement practice to ease tension and stress from mind, body, and heart. All levels welcome — no experience needed.
                        </p>
                        <div className="text-sm text-sand-700 space-y-3 pt-6 border-t border-sand-50">
                            <p className="flex justify-between gap-4"><strong className="font-medium text-sand-900 shrink-0">When</strong> <span>Every Tuesday, 7:30–8:30 PM</span></p>
                            <p className="flex justify-between gap-4"><strong className="font-medium text-sand-900 shrink-0">Where</strong> <a href="https://www.fuzionfit.com/contact" target="_blank" rel="noopener noreferrer" className="text-sage-600 underline underline-offset-2 hover:text-sage-800">FuzionFit Maui</a></p>
                            <p className="flex justify-between gap-4"><strong className="font-medium text-sand-900 shrink-0">Rate</strong> <span>$25 drop-in or included in gym membership</span></p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.4} width="100%">
                    <div className="bg-sage-50 p-10 rounded-[2.5rem] border border-sage-100 h-full">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-sage-600 mb-4 block">Private &amp; Semi-Private</span>
                        <h3 className="text-3xl font-serif text-sand-900 mb-4">Custom Sessions</h3>
                        <p className="text-sand-600 font-light leading-relaxed mb-8">
                            Sessions are tailored for you and can be held online via Zoom or in person on Maui's North Shore. Offered 1:1 or for small groups.
                        </p>
                        <div className="text-sm text-sand-700 space-y-3 pt-6 border-t border-sage-200/50">
                            <p className="flex justify-between"><strong className="font-medium text-sand-900">Rate</strong> <span>$110 / 60-min (up to 5 people)</span></p>
                            <p className="flex justify-between"><strong className="font-medium text-sand-900">Add'l</strong> <span>+$15 per extra person</span></p>
                            <p className="text-[10px] text-sand-500 text-right mt-2">Hawaii GE Tax applies</p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* ─── YouTube CTA ─── */}
            <Reveal delay={0.5} width="100%">
                <div className="text-center space-y-6 bg-sand-50 rounded-[2.5rem] p-12 border border-sand-100">
                    <h2 className="text-3xl font-serif text-sand-900">Try a class at home</h2>
                    <p className="text-sand-600 font-light max-w-xl mx-auto">
                        Check out my YouTube channel for free Qigong classes you can follow along with anytime.
                    </p>
                    <Button variant="outline" onClick={() => openExternal(YOUTUBE_URL)}>
                        Watch on YouTube &rarr;
                    </Button>
                </div>
            </Reveal>

            {/* ─── Contact CTA ─── */}
            <Reveal delay={0.6} width="100%">
                <div className="text-center space-y-8 py-12 flex flex-col items-center justify-center">
                    <p className="text-xl text-sand-600 font-light">
                        Questions about classes? Want to book a private session or retreat?
                    </p>
                    <a href="mailto:hello@courtneyalex.com" className="inline-block text-2xl font-serif text-sand-900 border-b border-sand-300 hover:border-clay-400 hover:text-clay-600 transition-all pb-1">
                        hello@courtneyalex.com
                    </a>
                </div>
            </Reveal>

        </div>
    );
};
