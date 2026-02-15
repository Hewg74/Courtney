import React from 'react';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { Quote, Award, Sparkles, Users } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { TESTIMONIALS } from '../constants';

interface HomeProps {
  setView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  return (
    <div className="animate-fade-in pb-24 relative overflow-x-hidden">

      {/* ─── 1. HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-clay-50/50 via-sand-50 to-white -z-20" />
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-sage-100/30 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 pt-20 lg:pt-0">

          {/* Left: Text */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <Reveal variant="fadeUp" delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-sand-900 leading-[1.1] tracking-tight">
                Helping adults and families feel steadier, calmer, and more connected.
              </h1>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.4}>
              <p className="text-lg md:text-xl text-sand-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                Coaching and mind-body tools for stress relief, emotional regulation, and resilience — for adults, parents, and kids.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.5}>
              <p className="text-sm text-sand-400 max-w-lg mx-auto lg:mx-0 tracking-wide">
                Areas I support: stress · anxiety · ADHD · executive functioning · communication · routines · behavior · sleep
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.6}>
              <div className="pt-4 flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  onClick={() => setView('work-with-me')}
                  className="bg-sand-900 text-white hover:bg-sand-800 px-10 py-4 text-base font-semibold shadow-md"
                >
                  Work With Me
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right: Photo in arch shape */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <Reveal variant="scaleUp" delay={0.4}>
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] lg:w-[380px] lg:h-[500px]">
                {/* Soft glow behind */}
                <div className="absolute inset-0 bg-sand-200 rounded-t-full rounded-b-3xl rotate-1 opacity-40 blur-xl"></div>

                {/* Arch-shaped image container */}
                <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-3xl shadow-2xl border-4 border-white/50">
                  <img
                    src="/images/headshot.jpg"
                    alt="Courtney Alex — Board-Certified Health & Wellness Coach"
                    className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Floating decor */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-clay-100 rounded-full blur-md opacity-60"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-sage-100 rounded-full blur-lg opacity-60"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 2. CHOOSE YOUR PATH — 3 Tiles ─── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Reveal className="mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-sand-900">Choose your path</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Adult Coaching */}
            <Reveal delay={0.1}>
              <div
                onClick={() => setView('work-with-me')}
                className="group cursor-pointer bg-sand-50 p-8 rounded-3xl hover:shadow-medium transition-all duration-300 border border-transparent hover:border-sand-200 h-full flex flex-col"
              >
                <div className="w-14 h-14 bg-clay-50 rounded-2xl flex items-center justify-center mb-6">
                  <Users size={24} className="text-clay-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-sand-900 mb-4">Adult Coaching</h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-8 flex-grow">
                  Personalized support for stress, overwhelm, and building sustainable routines that fit your life.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-sand-500 group-hover:text-clay-600">Learn More &rarr;</div>
              </div>
            </Reveal>

            {/* Family & Parent Coaching */}
            <Reveal delay={0.2}>
              <div
                onClick={() => setView('work-with-me')}
                className="group cursor-pointer bg-sand-50 p-8 rounded-3xl hover:shadow-medium transition-all duration-300 border border-transparent hover:border-sand-200 h-full flex flex-col"
              >
                <div className="w-14 h-14 bg-sage-50 rounded-2xl flex items-center justify-center mb-6">
                  <Sparkles size={24} className="text-sage-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-sand-900 mb-4">Family &amp; Parent Coaching</h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-8 flex-grow">
                  Practical strategies for anxiety, ADHD, behavior, communication, and connection — for kids and the adults who support them.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-sand-500 group-hover:text-clay-600">Learn More &rarr;</div>
              </div>
            </Reveal>

            {/* Qigong Classes */}
            <Reveal delay={0.3}>
              <div
                onClick={() => setView('qigong')}
                className="group cursor-pointer bg-sage-50 p-8 rounded-3xl hover:shadow-medium transition-all duration-300 border border-transparent hover:border-sage-200 h-full flex flex-col"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6">
                  <Award size={24} className="text-sage-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-sand-900 mb-4">Qigong Classes</h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-8 flex-grow">
                  A gentle mind-body practice to ease tension and restore calm. Group, private, and retreat sessions available.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-sage-600 group-hover:text-sage-800">See Classes &rarr;</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─── 3. WHAT CLIENTS NOTICE ─── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-sand-900">What clients notice</h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Better sleep and steadier energy",
                "Less overwhelm, shutdown, and reactivity",
                "Stronger routines and follow-through",
                "Clearer communication and boundaries",
                "More confidence and emotional resilience"
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-2xl border border-sand-100">
                  <div className="w-2 h-2 mt-2 rounded-full bg-sage-400 flex-shrink-0" />
                  <p className="text-sand-700 text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── 4. CREDIBILITY STRIP ─── */}
      <section className="py-10 px-6 border-y border-sand-200 bg-sand-50/50">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm md:text-base text-sand-600 tracking-wide leading-relaxed">
              Board-certified (NBC-HWC) coach supporting adults and families
              <span className="hidden sm:inline"> — </span>
              <br className="sm:hidden" />
              including through leading digital health organizations.
            </p>
            <p className="text-xs text-sand-400 mt-3 tracking-widest uppercase font-bold">
              NBC-HWC · Qigong Teacher · Author
            </p>
          </div>
        </Reveal>
      </section>

      {/* ─── 5. SHORT INTRO ─── */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
        <Reveal className="mx-auto">
          <div className="w-28 h-28 bg-sand-200 rounded-full mx-auto overflow-hidden border-4 border-white shadow-sm">
            <img src="/images/headshot.jpg" alt="Courtney Alex" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="text-4xl font-serif text-sand-900">Hi, I'm Courtney.</h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-xl text-sand-600 font-light max-w-2xl mx-auto leading-relaxed">
            My approach is strengths-based and practical — we start with what's already working and build from there, through small steps that fit your lifestyle. Every session and tool is based on what works for you.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <Button variant="text" onClick={() => setView('about')}>Meet Courtney &rarr;</Button>
        </Reveal>
      </section>

      {/* ─── 6. TESTIMONIALS ─── */}
      <section className="py-24 bg-sand-900 text-sand-50 overflow-hidden">
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sand-400">What people say</h2>

            <div className="space-y-8">
              <Quote className="mx-auto text-clay-400 opacity-50" size={48} />
              <p className="text-2xl md:text-4xl font-serif italic leading-tight text-sand-100">
                "{TESTIMONIALS[0].quote.substring(0, 180)}..."
              </p>
              <cite className="block not-italic text-sm font-sans tracking-wide text-sand-400">
                — {TESTIMONIALS[0].author}, {TESTIMONIALS[0].context}
              </cite>
            </div>

            <div className="pt-12 border-t border-sand-800 max-w-2xl mx-auto">
              <p className="text-lg font-serif italic text-sand-300">
                "{TESTIMONIALS[2].quote}"
              </p>
              <cite className="block not-italic text-sm font-sans tracking-wide text-sand-500 mt-4">
                — {TESTIMONIALS[2].author}, {TESTIMONIALS[2].context}
              </cite>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ─── 7. CONTACT CTA ─── */}
      <section className="py-24 bg-sage-50 text-center px-6">
        <Reveal className="mx-auto">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-sand-900">Not sure what's the best fit?</h2>
            <p className="text-lg text-sand-600 font-light">
              Reach out — I'm happy to talk through what might work for you.
            </p>
            <Button size="lg" onClick={() => setView('contact')}>
              Contact
            </Button>
          </div>
        </Reveal>
      </section>

    </div>
  );
};
