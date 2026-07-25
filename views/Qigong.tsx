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
                        Qigong (pronounced CHEE-gong) is a gentle mind-body practice that combines slow movement, breathwork, and meditation. Think of it as a moving meditation that helps release tension and stress from the body and quiet the mind.
                    </p>
                </Reveal>
            </div>

            {/* ─── Video / Image Section ─── */}
            <Reveal delay={0.2} width="100%">
                <div className="relative aspect-video bg-sage-50 rounded-2xl overflow-hidden shadow-soft">
                    <img src="/images/qigong-eyes-closed.png" alt="Courtney teaching Qigong" loading="lazy" className="w-full h-full object-cover" />
                    <a
                        href="https://youtube.com/@courtneyalexqi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors group z-10"
                    >
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-700">
                            <Play size={32} className="text-sage-700 ml-1" fill="currentColor" />
                        </div>
                    </a>
                </div>
            </Reveal>

            {/* ─── Details ─── */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Reveal delay={0.3} width="100%">
                    <div className="group relative overflow-hidden bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white shadow-soft h-full hover:shadow-premium hover:-translate-y-1.5 transition-all duration-500 ring-1 ring-sand-900/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sage-600 mb-5 block relative z-10 flex items-center gap-2"><span className="w-4 h-px bg-sage-300"></span>Weekly Group Class</span>
                        <h3 className="text-3xl font-serif text-sand-900 mb-4 relative z-10">Chi Energy Flow</h3>
                        <p className="text-sand-600 font-light leading-relaxed mb-8 text-sm relative z-10">
                            A classic mind-body movement practice to ease tension and stress from mind, body, and heart. All levels are welcome, and no experience is needed.
                        </p>
                        <dl className="text-sm text-sand-700 space-y-3 pt-6 border-t border-sand-200/50 relative z-10">
                            <div className="flex gap-4"><dt className="font-medium text-sand-900 shrink-0 w-14">When</dt><dd className="text-right ml-auto text-sand-600">Every Tuesday, 7:30–8:30 PM</dd></div>
                            <div className="flex gap-4"><dt className="font-medium text-sand-900 shrink-0 w-14">Where</dt><dd className="text-right ml-auto"><a href="https://www.fuzionfit.com/contact" target="_blank" rel="noopener noreferrer" className="text-sage-600 underline decoration-sage-200 underline-offset-4 hover:decoration-sage-400 hover:text-sage-800 transition-colors">FuzionFit Maui</a></dd></div>
                            <div className="flex gap-4"><dt className="font-medium text-sand-900 shrink-0 w-14">Rate</dt><dd className="text-right ml-auto text-sand-600">$25 drop-in or included in gym membership</dd></div>
                        </dl>
                    </div>
                </Reveal>

                <Reveal delay={0.4} width="100%">
                    <div className="group relative overflow-hidden bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white shadow-soft h-full hover:shadow-premium hover:-translate-y-1.5 transition-all duration-500 ring-1 ring-sand-900/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-clay-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sage-600 mb-5 block relative z-10 flex items-center gap-2"><span className="w-4 h-px bg-sage-300"></span>Monthly Group Class</span>
                        <h3 className="text-3xl font-serif text-sand-900 mb-4 relative z-10">Chi Energy Flow</h3>
                        <p className="text-sand-600 font-light leading-relaxed mb-6 text-sm relative z-10">
                            Join our monthly community practice. Feel free to stay for a delicious farm-to-table brunch or dinner after class, or simply come to move! <br/><br/>
                            <span className="italic text-clay-600 font-medium">*Note: In September I am offering a special 1-hour workshop focused entirely on sleep in place of my regular movement flow.</span>
                        </p>
                        <div className="bg-clay-50/50 backdrop-blur-sm rounded-2xl p-5 mb-8 text-center border border-white shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)] group-hover:bg-clay-50/80 transition-colors relative z-10">
                            <span className="block text-[10px] font-bold uppercase tracking-widest text-clay-600 mb-1.5">Next Class</span>
                            <span className="block text-lg text-sand-900 font-medium">Sept 25th</span>
                            <span className="block text-xs text-sand-500 mt-1">Join us for our next gathering!</span>
                        </div>
                        <dl className="text-sm text-sand-700 space-y-3 pt-6 border-t border-sand-200/50 relative z-10">
                            <div className="flex gap-4"><dt className="font-medium text-sand-900 shrink-0 w-14">When</dt><dd className="text-right ml-auto text-sand-600">Monthly (Sun 9am or Fri 4:30pm)</dd></div>
                            <div className="flex gap-4"><dt className="font-medium text-sand-900 shrink-0 w-14">Where</dt><dd className="text-right ml-auto"><a href="https://www.mokuroots.com/" target="_blank" rel="noopener noreferrer" className="text-sage-600 underline decoration-sage-200 underline-offset-4 hover:decoration-sage-400 hover:text-sage-800 transition-colors">Moku Roots Maui</a></dd></div>
                            <div className="flex gap-4"><dt className="font-medium text-sand-900 shrink-0 w-14">Rate</dt><dd className="text-right ml-auto text-sand-600">By Donation</dd></div>
                        </dl>
                    </div>
                </Reveal>

                <Reveal delay={0.5} width="100%">
                    <div className="group relative overflow-hidden bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-[2rem] border border-white shadow-soft h-full hover:shadow-premium hover:-translate-y-1.5 transition-all duration-500 ring-1 ring-sand-900/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-sage-600 mb-5 block relative z-10 flex items-center gap-2"><span className="w-4 h-px bg-sage-300"></span>Private &amp; Semi-Private</span>
                        <h3 className="text-3xl font-serif text-sand-900 mb-4 relative z-10">Custom Sessions</h3>
                        <p className="text-sand-600 font-light leading-relaxed mb-8 text-sm relative z-10">
                            Sessions are tailored for you and can be held online via Zoom or in person on Maui's North Shore. Offered 1:1 or for small groups.
                        </p>
                        <div className="text-sm text-sand-700 space-y-3 pt-6 border-t border-sand-200/50 relative z-10">
                            <p className="flex justify-between gap-4"><strong className="font-medium text-sand-900 shrink-0">Rate</strong> <span className="text-right text-sand-600">$110 / 60-min (up to 5 people)</span></p>
                            <p className="flex justify-between gap-4"><strong className="font-medium text-sand-900 shrink-0">Add'l</strong> <span className="text-right text-sand-600">+$15 per extra person</span></p>
                            <p className="text-[10px] text-sand-400 text-right mt-2 uppercase tracking-widest">Hawaii GE Tax applies</p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* ─── YouTube CTA ─── */}
            <Reveal delay={0.5} width="100%">
                <div className="text-center space-y-6 bg-sand-50 rounded-2xl p-12 border border-sand-100">
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
