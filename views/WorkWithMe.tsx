import React, { useState } from 'react';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { FAQ_ITEMS } from '../constants';

interface WorkWithMeProps {
    setView: (view: ViewState) => void;
}

export const WorkWithMe: React.FC<WorkWithMeProps> = ({ setView }) => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="animate-fade-in pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-24">

            {/* ─── Page Header ─── */}
            <div className="grid md:grid-cols-2 gap-12 items-end border-b border-sand-200 pb-16">
                <div className="space-y-6">
                    <span className="text-clay-500 font-sans text-sm font-bold uppercase tracking-widest">Services</span>
                    <h1 className="text-5xl md:text-6xl font-serif text-sand-900 leading-none">Work With Me</h1>
                </div>
                <div className="text-lg text-sand-600 font-light leading-relaxed max-w-md md:ml-auto">
                    <p>
                        Coaching that's individualized, strengths-based, and grounded in what actually works for your life.
                    </p>
                </div>
            </div>

            {/* ─── Adult Coaching ─── */}
            <section className="space-y-8">
                <Reveal>
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-sand-50">
                        <h2 className="text-3xl font-serif text-sand-900 mb-6">Coaching for Adults</h2>
                        <div className="text-sand-600 leading-relaxed text-lg font-light space-y-4 max-w-3xl">
                            <p>
                                Whether you're dealing with chronic stress, overwhelm, ADHD, difficulty with routines, or just feeling stuck — coaching gives you a space to figure out what's working, what's not, and what to try next.
                            </p>
                            <p>
                                We focus on your strengths and build from there. Sessions are practical, action-oriented, and tailored to your life — not a pre-made program.
                            </p>
                        </div>

                        <div className="mt-8 grid sm:grid-cols-2 gap-4">
                            {[
                                "Stress and overwhelm",
                                "Anxiety",
                                "ADHD and executive functioning",
                                "Organization and routines",
                                "Emotional regulation",
                                "Communication",
                                "Resilience and well-being",
                            ].map((area, i) => (
                                <div key={i} className="flex items-start text-sand-700 text-sm">
                                    <Check size={16} className="text-sage-500 mr-3 mt-0.5 flex-shrink-0" />
                                    {area}
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ─── Family & Parent Coaching ─── */}
            <section className="space-y-8">
                <Reveal>
                    <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft border border-sand-50">
                        <h2 className="text-3xl font-serif text-sand-900 mb-6">Coaching for Families &amp; Parents</h2>
                        <div className="text-sand-600 leading-relaxed text-lg font-light space-y-4 max-w-3xl">
                            <p>
                                I work with kids, parents, and families — together and individually. Whether your child is navigating anxiety, ADHD, big emotions, sleep challenges, or school stress, we build practical tools that fit your family's life.
                            </p>
                            <p>
                                My approach is strengths-based. Every child has something that's working well, and we build from there. Parents are always part of the conversation — and often, that's where the biggest shifts happen.
                            </p>
                        </div>

                        <div className="mt-8 grid sm:grid-cols-2 gap-4">
                            {[
                                "Anxiety and stress",
                                "ADHD and executive functioning",
                                "Emotional regulation and behavior support",
                                "Communication",
                                "Organization and routines",
                                "Sleep",
                                "Resilience and connection",
                            ].map((area, i) => (
                                <div key={i} className="flex items-start text-sand-700 text-sm">
                                    <Check size={16} className="text-sage-500 mr-3 mt-0.5 flex-shrink-0" />
                                    {area}
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ─── What Clients Notice ─── */}
            <section>
                <Reveal>
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-serif text-sand-900">What clients notice</h2>
                    </div>
                </Reveal>
                <Reveal delay={0.2}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            "Better sleep and steadier energy",
                            "Less overwhelm, shutdown, and reactivity",
                            "Stronger routines and follow-through",
                            "Clearer communication and boundaries",
                            "More confidence and emotional resilience"
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4 p-5 bg-sand-50 rounded-2xl border border-sand-100">
                                <div className="w-2 h-2 mt-2 rounded-full bg-sage-400 flex-shrink-0" />
                                <p className="text-sand-700 text-sm leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* ─── How Coaching Works ─── */}
            <section>
                <Reveal>
                    <div className="bg-clay-50 rounded-[2.5rem] p-8 md:p-14 space-y-8">
                        <h2 className="text-3xl font-serif text-sand-900">How coaching works</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6 text-sand-700 leading-relaxed font-light">
                                <div>
                                    <h4 className="font-serif text-lg text-sand-900 mb-2">Session format</h4>
                                    <p className="text-sm">Sessions are 30 minutes, online via Google Meet. We check in, explore tools and strategies, and agree on a small next step. The tone is collaborative, practical, and judgment-free.</p>
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-sand-900 mb-2">Strengths-based approach</h4>
                                    <p className="text-sm">We start with what's already working in your life and build from there. Every plan is individualized — there's no scripted method or one-size-fits-all program.</p>
                                </div>
                            </div>
                            <div className="space-y-6 text-sand-700 leading-relaxed font-light">
                                <div>
                                    <h4 className="font-serif text-lg text-sand-900 mb-2">Practical + embodied tools</h4>
                                    <p className="text-sm">Coaching includes practical strategies for daily life, along with optional mind-body and nervous system support tools — like breathwork, movement, and grounding techniques.</p>
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-sand-900 mb-2">For families</h4>
                                    <p className="text-sm">Parent involvement is optional and flexible. For younger children, parents are more closely involved. For teens, sessions are mostly 1-on-1 with periodic parent check-ins. We also work on routines, behavior support, and family communication together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ─── Session Options: Packages + Single Sessions ─── */}
            <section className="space-y-8">
                <Reveal>
                    <h2 className="text-3xl font-serif text-sand-900 text-center">Session options</h2>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Packages — Recommended */}
                    <Reveal delay={0.1}>
                        <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-soft border border-sand-100 relative h-full flex flex-col">
                            <div className="absolute top-4 right-4 bg-sage-50 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-sage-700">
                                Recommended
                            </div>
                            <h3 className="text-2xl font-serif text-sand-900 mb-2">6-Session Package</h3>
                            <div className="text-2xl font-serif text-sand-900 mb-4">$495</div>
                            <p className="text-sand-600 text-sm leading-relaxed mb-6 flex-grow">
                                Packages are designed for sustained support and real progress. Most clients see the best results with consistent sessions over time.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Six 30-minute sessions",
                                    "Bi-weekly scheduling (flexible)",
                                    "Parent support included (for family coaching)",
                                    "Customized to your goals",
                                ].map((f, i) => (
                                    <div key={i} className="flex items-start text-sand-700 text-sm">
                                        <Check size={14} className="text-sage-500 mr-3 mt-0.5 flex-shrink-0" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full" onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}>
                                Book a Free 15-Min Chat
                            </Button>
                            <p className="text-[11px] text-sand-400 mt-3 text-center">Hawaii GE Tax applies</p>
                        </div>
                    </Reveal>

                    {/* Single Sessions */}
                    <Reveal delay={0.2}>
                        <div className="bg-sand-50 rounded-[2.5rem] p-8 md:p-10 border border-sand-100 h-full flex flex-col">
                            <h3 className="text-2xl font-serif text-sand-900 mb-2">Single Session</h3>
                            <div className="text-2xl font-serif text-sand-900 mb-4">$85</div>
                            <p className="text-sand-600 text-sm leading-relaxed mb-6 flex-grow">
                                Single sessions are a great way to get focused support on a specific challenge, try out coaching and assess fit, or check in when you need it.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    "One 30-minute session",
                                    "Flexible scheduling",
                                    "Support during a hard week",
                                    "Troubleshoot routines or communication",
                                    "Nervous system reset",
                                    "Clarity and next steps",
                                ].map((f, i) => (
                                    <div key={i} className="flex items-start text-sand-700 text-sm">
                                        <Check size={14} className="text-sage-500 mr-3 mt-0.5 flex-shrink-0" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full" onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}>
                                Book a Session
                            </Button>
                            <p className="text-[11px] text-sand-400 mt-3 text-center">Hawaii GE Tax applies</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ─── Workshops (secondary) ─── */}
            <section>
                <Reveal>
                    <div className="bg-sand-50 rounded-[2.5rem] p-8 md:p-14 space-y-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-sand-500">For Schools &amp; Organizations</span>
                        <h2 className="text-3xl font-serif text-sand-900">Workshops</h2>
                        <p className="text-sand-600 leading-relaxed text-lg font-light max-w-3xl">
                            I offer interactive workshops on topics like emotional regulation, communication, stress resilience, and mind-body tools. Workshops are available online and in-person, and can be tailored to your group's needs.
                        </p>
                        <div className="pt-2">
                            <Button variant="outline" onClick={() => setView('contact')}>
                                Contact me to discuss
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ─── FAQ Accordion ─── */}
            <section className="max-w-4xl mx-auto">
                <Reveal>
                    <h2 className="text-3xl font-serif text-sand-900 text-center mb-10">Common questions</h2>
                </Reveal>
                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <div className="bg-white rounded-2xl border border-sand-100 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-sand-50/50 transition-colors"
                                >
                                    <span className="font-serif text-lg text-sand-900">{item.q}</span>
                                    {openFaq === i ? (
                                        <ChevronUp size={18} className="text-sand-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown size={18} className="text-sand-400 flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === i && (
                                    <div className="px-6 pb-5 text-sand-600 font-light leading-relaxed animate-fade-in">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ─── Bottom CTA ─── */}
            <section className="text-center bg-sage-50 rounded-[2.5rem] p-12 md:p-16">
                <h2 className="text-3xl font-serif text-sand-900 mb-4">Ready to get started?</h2>
                <p className="text-sand-600 font-light mb-8">Book a free 15-minute chat to talk through what might work for you.</p>
                <Button size="lg" onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}>
                    Book a Free Chat
                </Button>
            </section>

        </div>
    );
};
