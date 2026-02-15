import React from 'react';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { Reveal } from '../components/Reveal';

interface AboutProps {
  setView: (view: ViewState) => void;
}

export const About: React.FC<AboutProps> = ({ setView }) => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-32">

      {/* ─── 1. Intro ─── */}
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] bg-sand-200 rounded-[2rem] overflow-hidden relative z-10 shadow-lg">
            <img src="/images/headshot.jpg" alt="Courtney Alex" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sand-300 rounded-[2rem] -z-10"></div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-serif text-sand-900 leading-tight">
            Hi, I'm <span className="text-clay-600 italic">Courtney</span>.
          </h1>
          <div className="space-y-6 text-sand-700 text-lg leading-relaxed font-light">
            <p>
              I'm a Board-Certified Health & Wellness Coach (NBC-HWC) and long-time Qigong teacher. I've spent years working alongside licensed therapists and psychiatric providers, supporting families and individuals through anxiety, ADHD, stress, and daily overwhelm.
            </p>
            <p>
              My approach is individualized and strengths-based — built on what's already working in your life. I help people figure out small, practical shifts that actually stick, through tools that fit your lifestyle.
            </p>
            <p>
              I've worked at organizations like 826Valencia and Reading Partners, and as faculty at Lumeria Maui Retreat Center. I'm also the author of <em>Trust Your Magical Self</em>.
            </p>
            <p>
              When I'm not coaching, I'm probably teaching Qigong, being outside, or trying to figure out what's for dinner.
            </p>
          </div>
        </div>
      </div>

      {/* ─── 2. My Approach ─── */}
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sage-600">My Approach</span>
          <h2 className="text-4xl font-serif text-sand-900">How I work</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Strengths-Based",
              desc: "Every person has something working well. We build from there — working with your strengths, interests, and learning style.",
              color: "bg-clay-100"
            },
            {
              title: "Mind & Body",
              desc: "Mind, body, and heart. Because we don't experience life in separate compartments — coaching can include embodied tools when they're a fit.",
              color: "bg-sage-100"
            },
            {
              title: "Evidence-Informed",
              desc: "Grounded in research and best practices — but always flexible. What works for your life is what matters.",
              color: "bg-sand-100"
            },
            {
              title: "Family-Centered",
              desc: "The whole family matters. Parents are always part of the conversation — and often, that's where the biggest shifts happen.",
              color: "bg-clay-50"
            },
            {
              title: "Individualized",
              desc: "There's no scripted method. Your plan is built around your goals, your life, and what's already working.",
              color: "bg-sage-50"
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-sand-50 hover:shadow-md transition-all duration-300 h-full">
                <div className={`w-12 h-12 ${item.color} rounded-full mb-6`}></div>
                <h3 className="text-xl font-serif text-sand-900 mb-3">{item.title}</h3>
                <p className="text-sand-600 font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ─── 3. Credentials ─── */}
      <div className="bg-sand-50 rounded-[3rem] p-10 md:p-16 space-y-12">
        <h2 className="text-3xl font-serif text-sand-900 text-center">Experience & Training</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          <ul className="space-y-4 text-sand-700">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
              <span><strong>National Board-Certified Health & Wellness Coach</strong> (NBC-HWC)</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
              <span>Coaching experience through leading digital health organizations — collaborating with licensed pediatric therapists and psychiatric providers</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
              <span>Author of <em>Trust Your Magical Self</em></span>
            </li>
          </ul>
          <ul className="space-y-4 text-sand-700">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
              <span>Former Faculty at <strong>Lumeria Maui Retreat Center</strong> & <strong>Maui Academy of Healing Arts</strong></span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
              <span>Creative programs at <strong>826Valencia</strong> & Reading Partners</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
              <span>Certified Qigong Teacher</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ─── 4. Qigong / Personal ─── */}
      <div className="text-center space-y-8">
        <div className="aspect-video max-w-3xl mx-auto bg-sage-50 rounded-3xl overflow-hidden relative">
          <img src="/images/qigong.png" alt="Courtney teaching Qigong" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-sage-800 text-xs font-bold uppercase tracking-widest">
              Mind &bull; Body &bull; Heart
            </span>
          </div>
        </div>
      </div>

      {/* ─── 5. CTA ─── */}
      <Reveal>
        <div className="text-center bg-sage-50 rounded-3xl p-16">
          <h2 className="text-3xl font-serif text-sand-900 mb-6">Let's talk.</h2>
          <p className="text-sand-600 font-light mb-8">Book a free 15-minute chat to see if coaching is a good fit.</p>
          <Button variant="primary" onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}>
            Book a Free Chat
          </Button>
        </div>
      </Reveal>

    </div>
  );
};
