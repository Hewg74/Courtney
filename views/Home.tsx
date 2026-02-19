import React from 'react';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { Sparkles, Award, Users, Sun, Feather, Compass, MessageCircle, Star, Heart, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';
import { openExternal, CALENDLY_URL, TESTIMONIALS } from '../constants';

// ... (inside component)



interface HomeProps {
  setView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  return (
    <div className="animate-fade-in pb-24 relative overflow-x-hidden">

      {/* 1. Hero Section - Side-by-Side Layout (Old Design) */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden pt-32 lg:pt-32 pb-20 lg:pb-24">
        {/* Ambient Washes */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-clay-50/50 via-sand-50 to-white -z-20" />
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-sage-100/40 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 relative">
            <Reveal variant="fadeUp" delay={0.2} className="mx-auto lg:mx-0">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-sand-900 leading-[1.05] tracking-tight">
                Helping adults & families feel steadier, calmer, & more <span className="italic font-light text-clay-600">connected.</span>
              </h1>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.4} className="mx-auto lg:mx-0">
              <p className="text-lg md:text-xl text-sand-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Coaching and mind-body tools for stress relief, emotional regulation, and resilience — for adults, parents, and kids.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.5} className="mx-auto lg:mx-0">
              <p className="text-sm text-sand-500 max-w-lg mx-auto lg:mx-0 tracking-wide">
                Areas I support: stress · anxiety · ADHD · executive functioning · communication · routines · behavior · sleep
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.6} className="mx-auto lg:mx-0">
              <div className="pt-2 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-5">
                <Button size="lg" onClick={() => setView('work-with-me')}>
                  Work With Me
                </Button>
              </div>
            </Reveal>

            {/* Trust Anchors - Enhanced (Old Design Structure with New Content) */}
            <Reveal variant="fadeIn" delay={0.8} className="mx-auto lg:mx-0">
              <div className="pt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 border-t border-sand-200 mt-8">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sand-500">
                  <Award size={16} className="text-clay-500" />
                  <span>NBC-HWC Certified</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-sand-300"></div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sand-500">
                  <Sparkles size={16} className="text-clay-500" />
                  <span>Qigong Teacher</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-sand-300"></div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sand-500">
                  <Users size={16} className="text-clay-500" />
                  <span>Author</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Keyhole Shape Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <Reveal variant="scaleUp" delay={0.4}>
              <div className="relative w-72 h-[26rem] md:w-80 md:h-[30rem] lg:w-[420px] lg:h-[520px]">
                {/* Soft Background */}
                <div className="absolute inset-0 bg-sand-200 rounded-t-full rounded-b-[2rem] rotate-2 opacity-50 blur-xl"></div>

                {/* Image */}
                <div className="absolute inset-0 overflow-hidden rounded-t-full rounded-b-[2rem] shadow-2xl border-4 border-white/80">
                  <img
                    src="/images/headshot.jpg"
                    alt="Courtney Alex, health and wellness coach"
                    fetchPriority="high"
                    className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 2. Services Overview (Moved & Renamed) */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Reveal className="mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-sand-900">Here are my offerings</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Adult Coaching */}
            <Reveal delay={0.1}>
              <button
                onClick={() => setView('work-with-me')}
                className="group cursor-pointer bg-sand-50 p-8 rounded-3xl hover:shadow-medium hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-sand-200 h-full text-left w-full"
              >
                <h3 className="text-2xl font-serif text-sand-900 mb-4">Adult Coaching</h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-8 min-h-[80px]">
                  Personalized support for stress, overwhelm, and building sustainable routines that fit your life.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-sand-500 group-hover:text-clay-600">Learn More &rarr;</div>
              </button>
            </Reveal>

            {/* Family & Parent Coaching - Highlighted */}
            <Reveal delay={0.2} variant="scaleUp">
              <button
                onClick={() => setView('work-with-me')}
                className="group cursor-pointer bg-clay-50 p-8 rounded-3xl shadow-soft hover:shadow-medium hover:-translate-y-1 transition-all duration-300 relative border border-clay-100 h-full text-left w-full"
              >
                <h3 className="text-2xl font-serif text-sand-900 mb-4">Family & Parent Coaching</h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-8 min-h-[80px]">
                  Practical strategies for anxiety, ADHD, behavior, communication, and connection — for kids and the adults who support them.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-clay-700">Learn More &rarr;</div>
              </button>
            </Reveal>

            {/* Qigong Classes */}
            <Reveal delay={0.3}>
              <button
                onClick={() => setView('qigong')}
                className="group cursor-pointer bg-sand-50 p-8 rounded-3xl hover:shadow-medium hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-sand-200 h-full text-left w-full"
              >
                <h3 className="text-2xl font-serif text-sand-900 mb-4">Qigong Classes</h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-8 min-h-[80px]">
                  A gentle mind-body practice to ease tension and restore calm. Group, private, and retreat sessions available.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-sand-500 group-hover:text-clay-600">See Classes &rarr;</div>
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. What Clients Notice (Moved & Updated) */}
      <section className="py-24 px-6 bg-sand-50 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-clay-50/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-6xl mx-auto text-center md:text-left space-y-16 relative z-10">
          <Reveal>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-sand-900 italic">What clients notice</h2>
              <p className="text-sand-600 max-w-2xl font-light">
                Change happens in small, sustainable shifts. Here’s what clients often report after working together.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 text-left">
            {[
              {
                icon: Sun,
                text: "Better sleep and steadier energy",
                color: "text-clay-600",
                bg: "bg-clay-100"
              },
              {
                icon: Feather,
                text: "Less overwhelm, shutdown, and reactivity",
                color: "text-sage-600",
                bg: "bg-sage-100"
              },
              {
                icon: Compass,
                text: "Stronger routines and follow-through",
                color: "text-sand-600",
                bg: "bg-sand-200"
              },
              {
                icon: MessageCircle,
                text: "Clearer communication and boundaries",
                color: "text-clay-500",
                bg: "bg-clay-50"
              },
              {
                icon: Star,
                text: "More confidence and emotional resilience",
                color: "text-sage-500",
                bg: "bg-sage-50"
              },
              {
                icon: Heart,
                text: "A greater sense of calm and connection",
                color: "text-sand-500",
                bg: "bg-sand-100"
              }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1} width="100%">
                <div className="group bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-soft transition-all duration-300 border border-sand-100 h-full flex flex-col items-center text-center space-y-4">
                  <div className={`p-4 rounded-full ${item.bg} bg-opacity-50 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon size={24} className={item.color} strokeWidth={1.5} />
                  </div>
                  <p className="text-sand-800 text-lg leading-relaxed font-medium">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured Testimonials */}
      <section className="py-24 bg-sand-900 text-sand-50 overflow-hidden">
        <Reveal width="100%">
          <div className="max-w-5xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sand-400">What families say</h2>

            {/* Main Testimonial */}
            <div className="space-y-8">
              <Quote className="mx-auto text-clay-400 opacity-50" size={48} />
              <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-sand-100 max-w-4xl mx-auto">
                "{TESTIMONIALS[0].quote}"
              </p>
              <cite className="block not-italic text-sm font-sans tracking-wide text-sand-400">
                — {TESTIMONIALS[0].author}{TESTIMONIALS[0].context ? `, ${TESTIMONIALS[0].context}` : ''}
              </cite>
            </div>

            {/* Secondary Testimonials */}
            <div className="flex flex-col md:flex-row gap-8 pt-12 border-t border-sand-800 text-left">
              <div className="flex-1 space-y-4">
                <p className="text-lg md:text-xl font-serif italic text-sand-300">"{TESTIMONIALS[2].quote}"</p>
                <cite className="block not-italic text-sm font-sans tracking-wide text-sand-500 mt-4">— {TESTIMONIALS[2].author}{TESTIMONIALS[2].context ? `, ${TESTIMONIALS[2].context}` : ''}</cite>
              </div>
              <div className="hidden md:block w-px bg-sand-800 self-stretch"></div>
              <div className="flex-1 space-y-4">
                <p className="text-lg md:text-xl font-serif italic text-sand-300">"{TESTIMONIALS[1].quote}"</p>
                <cite className="block not-italic text-sm font-sans tracking-wide text-sand-500 mt-4">— {TESTIMONIALS[1].author}{TESTIMONIALS[1].context ? `, ${TESTIMONIALS[1].context}` : ''}</cite>
              </div>
            </div>

            <Button variant="outline" className="bg-white text-sand-900 border-white hover:bg-sand-100" onClick={() => setView('testimonials')}>
              Read All Stories
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 5. Short Intro (Old "About Preview" Design) */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
        <Reveal className="mx-auto">
          <div className="w-32 h-32 bg-sand-200 rounded-full mx-auto overflow-hidden border-4 border-white shadow-sm">
            <img src="/images/meditation.png" alt="Courtney meditating" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="text-4xl font-serif text-sand-900">Hi, I'm Courtney.</h2>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="space-y-6 max-w-2xl mx-auto">
            <p className="text-xl text-sand-600 font-light">
              My approach is strengths-based and practical — we start with what's already working and build from there, through small steps that fit your lifestyle. Every session and tool is based on what works for you.
            </p>
            <p className="text-base text-sand-500 font-light tracking-wide pt-2">
              Board-certified (NBC-HWC) coach supporting adults and families — including experience working alongside therapists and psychiatric providers through leading digital health organizations.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <Button variant="text" onClick={() => setView('about')}>Meet Courtney &rarr;</Button>
        </Reveal>
      </section>

      {/* 6. Final CTA (Old Design) */}
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
