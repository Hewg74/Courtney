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
        <div className="animate-fade-in pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-32">

            {/* ─── Page Header ─── */}
            <div className="grid md:grid-cols-2 gap-12 items-end border-b border-sand-200 pb-16 text-center md:text-left">
                <div className="space-y-6">
                    <span className="text-clay-600 font-sans text-xs font-bold uppercase tracking-widest">Services</span>
                    <h1 className="text-5xl md:text-7xl font-serif text-sand-900 leading-[0.9]">Work With Me</h1>
                </div>
                <div className="text-xl text-sand-600 font-light leading-relaxed max-w-md md:ml-auto">
                    <p>
                        Coaching that's individualized, strengths-based, and grounded in what actually works for your life.
                    </p>
                </div>
            </div>

            {/* ─── Adult Coaching ─── */}
            <section className="space-y-8">
                <Reveal width="100%">
                    <div className="bg-white rounded-[3rem] p-8 md:p-12 lg:p-16 shadow-soft border border-sand-50">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <h2 className="text-4xl md:text-5xl font-serif text-sand-900 mb-8">Coaching for Adults</h2>
                                <div className="text-sand-600 leading-relaxed text-lg font-light space-y-6">
                                    <p>
                                        Whether you're dealing with chronic stress, overwhelm, ADHD, difficulty with routines, or just feeling stuck — coaching gives you a space to figure out what's working, what's not, and what to try next.
                                    </p>
                                    <p>
                                        We focus on your strengths and build from there. Sessions are practical, action-oriented, and tailored to your life — not a pre-made program.
                                    </p>
                                </div>

                                <div className="mt-10 grid sm:grid-cols-2 gap-y-4 gap-x-8">
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
                                            <Check size={18} className="text-sage-500 mr-3 mt-0.5 flex-shrink-0" />
                                            {area}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 relative aspect-[4/3] lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-md bg-sand-50">
                                <img 
                                    src="/images/teaching-class.png" 
                                    alt="Courtney teaching a class" 
                                    className="w-full h-full object-cover object-top" 
                                />
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ─── Family & Parent Coaching ─── */}
            <section className="space-y-8">
                <Reveal width="100%">
                    <div className="bg-white rounded-[3rem] p-10 md:p-16 shadow-soft border border-sand-50">
                        <div className="max-w-3xl ml-auto">
                            <h2 className="text-4xl md:text-5xl font-serif text-sand-900 mb-8">Coaching for Families &amp; Parents</h2>
                            <div className="text-sand-600 leading-relaxed text-lg font-light space-y-6">
                                <p>
                                    I work with kids, parents, and families — together and individually. Whether your child is navigating anxiety, ADHD, big emotions, sleep challenges, or school stress, we build practical tools that fit your family's life.
                                </p>
                                <p>
                                    My approach is strengths-based. Every child has something that's working well, and we build from there. Parents are always part of the conversation — and often, that's where the biggest shifts happen.
                                </p>
                            </div>

                            <div className="mt-10 grid sm:grid-cols-2 gap-y-4 gap-x-8">
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
                                        <Check size={18} className="text-sage-500 mr-3 mt-0.5 flex-shrink-0" />
                                        {area}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ─── What Clients Notice ─── */}
            <section>
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif text-sand-900">What clients notice</h2>
                    </div>
                </Reveal>
                <Reveal delay={0.2} width="100%">
                    <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
                        {[
                            "Better sleep and steadier energy",
                            "Less overwhelm, shutdown, and reactivity",
                            "Stronger routines and follow-through",
                            "Clearer communication and boundaries",
                            "More confidence and emotional resilience"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-6 bg-sand-50 rounded-[2rem] border border-sand-100 flex-1 min-w-[280px] max-w-[350px]">
                                <div className="w-2 h-2 rounded-full bg-sage-400 flex-shrink-0" />
                                <p className="text-sand-700 text-sm leading-relaxed">{item}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </section>

            {/* ─── How Coaching Works ─── */}
            <section>
                <Reveal width="100%">
                    <div className="bg-clay-50 rounded-[3rem] p-10 md:p-20 space-y-12">
                        <h2 className="text-4xl md:text-5xl font-serif text-sand-900">How coaching works</h2>
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
                            <div className="space-y-8 text-sand-700 leading-relaxed font-light">
                                <div>
                                    <h4 className="font-serif text-2xl text-sand-900 mb-3">Session format</h4>
                                    <p className="text-base">Sessions are 30 minutes, online via Google Meet. We check in, explore tools and strategies, and agree on a small next step. The tone is collaborative, practical, and judgment-free.</p>
                                </div>
                                <div>
                                    <h4 className="font-serif text-2xl text-sand-900 mb-3">Strengths-based approach</h4>
                                    <p className="text-base">We start with what's already working in your life and build from there. Every plan is individualized — there's no scripted method or one-size-fits-all program.</p>
                                </div>
                            </div>
                            <div className="space-y-8 text-sand-700 leading-relaxed font-light">
                                <div>
                                    <h4 className="font-serif text-2xl text-sand-900 mb-3">Practical + embodied tools</h4>
                                    <p className="text-base">Coaching includes practical strategies for daily life, along with optional mind-body and nervous system support tools — like breathwork, movement, and grounding techniques.</p>
                                </div>
                                <div>
                                    <h4 className="font-serif text-2xl text-sand-900 mb-3">For families</h4>
                                    <p className="text-base">Parent involvement is optional and flexible. For younger children, parents are more closely involved. For teens, sessions are mostly 1-on-1 with periodic parent check-ins. We also work on routines, behavior support, and family communication together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ─── Session Options ─── */}
            <section className="space-y-12">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-5xl font-serif text-sand-900 text-center">Session options</h2>
                </Reveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Packages — Recommended */}
                    <Reveal delay={0.1} className="h-full">
                        <div className="bg-white rounded-[3rem] p-10 md:p-14 shadow-soft border border-sand-100 relative h-full flex flex-col hover:shadow-medium transition-shadow duration-300">
                            <div className="mb-6 md:mb-0 md:absolute md:top-8 md:right-8 bg-sage-50 px-4 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-sage-700 self-start inline-block">
                                Recommended
                            </div>
                            <h3 className="text-3xl font-serif text-sand-900 mb-2">6-Session Package</h3>
                            <div className="text-3xl font-serif text-sand-900 mb-6">$495</div>
                            <p className="text-sand-600 text-sm leading-relaxed mb-8 flex-grow font-light">
                                Packages are designed for sustained support and real progress. Most clients see the best results with consistent sessions over time.
                            </p>
                            <div className="space-y-4 mb-10">
                                {[
                                    "Six 30-minute sessions",
                                    "Bi-weekly scheduling (flexible)",
                                    "Parent support included (for family coaching)",
                                    "Customized to your goals",
                                ].map((f, i) => (
                                    <div key={i} className="flex items-start text-sand-700 text-sm">
                                        <Check size={16} className="text-sage-500 mr-3 mt-0.5 flex-shrink-0" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                            <Button className="w-full" onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}>
                                Book a Free 15-Min Chat
                            </Button>
                            <p className="text-[10px] text-sand-400 mt-4 text-center">Hawaii GE Tax applies</p>
                        </div>
                    </Reveal>

                    {/* Single Sessions */}
                    <Reveal delay={0.2} className="h-full">
                        <div className="bg-sand-50 rounded-[3rem] p-10 md:p-14 border border-sand-100 h-full flex flex-col">
                            <h3 className="text-3xl font-serif text-sand-900 mb-2">Single Session</h3>
                            <div className="text-3xl font-serif text-sand-900 mb-6">$85</div>
                            <p className="text-sand-600 text-sm leading-relaxed mb-8 flex-grow font-light">
                                Single sessions are a great way to get focused support on a specific challenge, try out coaching and assess fit, or check in when you need it.
                            </p>
                            <div className="space-y-4 mb-10">
                                {[
                                    "One 30-minute session",
                                    "Flexible scheduling",
                                    "Support during a hard week",
                                    "Troubleshoot routines or communication",
                                    "Nervous system reset",
                                    "Clarity and next steps",
                                ].map((f, i) => (
                                    <div key={i} className="flex items-start text-sand-700 text-sm">
                                        <Check size={16} className="text-sage-500 mr-3 mt-0.5 flex-shrink-0" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                            <Button variant="outline" className="w-full" onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}>
                                Book a Free 15-Min Chat
                            </Button>
                            <p className="text-[10px] text-sand-400 mt-4 text-center">Hawaii GE Tax applies</p>
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* ─── Workshops (secondary) ─── */}
            <section>
                <Reveal width="100%">
                    <div className="bg-sand-50 rounded-[3rem] p-10 md:p-20 space-y-8">
                        <span className="text-xs font-bold uppercase tracking-widest text-sand-500">For Schools &amp; Organizations</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-sand-900">Workshops</h2>
                        <p className="text-sand-600 leading-relaxed text-lg font-light max-w-3xl">
                            I offer interactive workshops on topics like emotional regulation, communication, stress resilience, and mind-body tools. Workshops are available online and in-person, and can be tailored to your group's needs.
                        </p>
                        <div className="pt-4">
                            <Button variant="outline" onClick={() => setView('contact')}>
                                Contact me to discuss
                            </Button>
                        </div>
                    </div>
                </Reveal>
            </section>

            {/* ─── FAQ Accordion ─── */}
            <section className="max-w-4xl mx-auto">
                <Reveal width="100%">
                    <h2 className="text-4xl font-serif text-sand-900 text-center mb-16">Common questions</h2>
                </Reveal>
                <div className="space-y-4">
                    {FAQ_ITEMS.map((item, i) => (
                        <Reveal key={i} delay={i * 0.05} width="100%">
                            <div className="bg-white rounded-3xl border border-sand-100 overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 hover:bg-sand-50/50 transition-colors"
                                >
                                    <span className="font-serif text-xl text-sand-900">{item.q}</span>
                                    {openFaq === i ? (
                                        <ChevronUp size={20} className="text-sand-400 flex-shrink-0" />
                                    ) : (
                                        <ChevronDown size={20} className="text-sand-400 flex-shrink-0" />
                                    )}
                                </button>
                                {openFaq === i && (
                                    <div className="px-8 pb-8 text-sand-600 font-light leading-relaxed animate-fade-in text-base">
                                        {item.a}
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* ─── Bottom CTA ─── */}
            <section className="text-center bg-sage-50 rounded-[3rem] p-16 md:p-24">
                <h2 className="text-4xl md:text-5xl font-serif text-sand-900 mb-6">Ready to get started?</h2>
                <p className="text-sand-600 font-light mb-10 text-lg">Book a free 15-minute chat to talk through what might work for you.</p>
                <Button size="lg" onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}>
                    Book a Free Chat
                </Button>
            </section>

        </div>
    );
};
