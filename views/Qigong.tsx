import React from 'react';
import { Button } from '../components/Button';
import { Play } from 'lucide-react';
import { Reveal } from '../components/Reveal';

export const Qigong: React.FC = () => {
    return (
        <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-20">

            {/* ─── Header ─── */}
            <div className="text-center space-y-6 max-w-3xl mx-auto pb-12 border-b border-sand-200">
                <span className="text-sage-500 font-sans text-xs font-bold uppercase tracking-widest">Mind &amp; Body</span>
                <h1 className="text-5xl md:text-6xl font-serif text-sand-900">Qigong with Courtney</h1>
                <p className="text-xl text-sand-600 font-light leading-relaxed">
                    Qigong (pronounced CHEE-gong) is a gentle mind-body practice that combines slow movement, breathwork, and meditation. Think of it as a moving meditation — a way to release tension and stress from the body and quiet the mind.
                </p>
            </div>

            {/* ─── Video / Image Section ─── */}
            <Reveal>
                <div className="relative aspect-video bg-sage-50 rounded-3xl overflow-hidden">
                    <img src="/images/qigong.png" alt="Courtney teaching Qigong" className="w-full h-full object-cover" />
                    <a
                        href="https://youtube.com/@courtneyalexqi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors"
                    >
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                            <Play size={24} className="text-sage-700 ml-1" />
                        </div>
                    </a>
                </div>
            </Reveal>

            {/* ─── Details ─── */}
            <div className="grid md:grid-cols-2 gap-8">
                <Reveal delay={0.1}>
                    <div className="bg-white p-8 rounded-3xl border border-sand-50 shadow-sm h-full">
                        <span className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-3 block">Weekly Group Class</span>
                        <h3 className="text-2xl font-serif text-sand-900 mb-4">Chi Energy Flow</h3>
                        <p className="text-sand-600 font-light leading-relaxed mb-4">
                            A classic mind-body movement practice to ease tension and stress from mind, body, and heart. All levels welcome — no experience needed.
                        </p>
                        <div className="text-sm text-sand-700 space-y-2">
                            <p><strong>When:</strong> Every Tuesday evening, 7:30–8:30 PM</p>
                            <p><strong>Where:</strong> <a href="https://www.fuzionfit.com/contact" target="_blank" rel="noopener noreferrer" className="text-sage-600 underline underline-offset-2 hover:text-sage-800">FuzionFit Maui</a></p>
                            <p><strong>Rate:</strong> $25 drop-in or included in gym membership</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="bg-sage-50 p-8 rounded-3xl border border-sage-100 h-full">
                        <span className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-3 block">Private &amp; Semi-Private</span>
                        <h3 className="text-2xl font-serif text-sand-900 mb-4">Custom Sessions</h3>
                        <p className="text-sand-600 font-light leading-relaxed mb-4">
                            Sessions are tailored for you and can be held online via Zoom or in person on Maui's North Shore. Offered 1:1 or for small groups (up to 5 people). Larger groups welcome — contact me to discuss.
                        </p>
                        <div className="text-sm text-sand-700 space-y-2">
                            <p><strong>Rate:</strong> $110 / 60-minute class (up to 5 people)</p>
                            <p><strong>Additional:</strong> +$15 per additional person</p>
                            <p className="text-[11px] text-sand-400">Hawaii GE Tax applies</p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* ─── YouTube CTA ─── */}
            <Reveal>
                <div className="text-center space-y-6 bg-sand-50 rounded-3xl p-12">
                    <h2 className="text-3xl font-serif text-sand-900">Try a class at home</h2>
                    <p className="text-sand-600 font-light max-w-xl mx-auto">
                        Check out my YouTube channel for free Qigong classes you can follow along with anytime.
                    </p>
                    <Button variant="outline" onClick={() => window.open('https://youtube.com/@courtneyalexqi', '_blank')}>
                        Watch on YouTube &rarr;
                    </Button>
                </div>
            </Reveal>

            {/* ─── Contact CTA ─── */}
            <Reveal>
                <div className="text-center space-y-6">
                    <p className="text-sand-600 font-light">
                        Questions about classes? Want to book a private session or retreat?
                    </p>
                    <a href="mailto:hello@courtneyalex.com" className="text-sand-900 font-bold border-b-2 border-sand-300 hover:border-clay-400 hover:text-clay-600 transition-all pb-0.5 text-lg">
                        hello@courtneyalex.com
                    </a>
                </div>
            </Reveal>

        </div>
    );
};
