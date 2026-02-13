import React from 'react';
import { Button } from '../components/Button';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-32">

      {/* 1. Intro Section - Integrated Identity */}
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] bg-sand-200 rounded-[2rem] overflow-hidden relative z-10 shadow-lg">
            <img src="/images/headshot.jpg" alt="Courtney Alex" className="w-full h-full object-cover" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sand-300 rounded-[2rem] -z-10"></div>
        </div>

        <div className="w-full md:w-1/2 space-y-8">
          <h1 className="text-5xl md:text-6xl font-serif text-sand-900 leading-tight">
            Hi, I'm <span className="text-clay-600 italic">Courtney</span>.
          </h1>
          <div className="space-y-6 text-sand-700 text-lg leading-relaxed font-light">
            <p>
              I'm a Board-Certified Health & Wellness Coach (NBC-HWC) and long-time Qigong teacher with a background in children's mental health.
            </p>
            <p>
              I help families and individuals build routines to support calm, connection, and confidence using tools that fit easily into your life. My approach is based on your strengths and lifestyle to help you feel supported - not overwhelmed.
            </p>
            <p>
              My career includes literacy and creative programs for kids at organizations like 826Valencia and Reading Partners, education therapy, and pediatric mental health coaching — collaborating with licensed therapists and psychiatric providers.
            </p>
          </div>
        </div>
      </div>

      {/* 2. Philosophy / Approach */}
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-sage-600">My Philosophy</span>
          <h2 className="text-4xl font-serif text-sand-900">How we create change</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Strength-Based",
              desc: "Every child has something working well. We build from there — working with your child's strengths, interests, and learning style.",
              color: "bg-clay-100"
            },
            {
              title: "Mind & Body",
              desc: "Mind, body, and heart. Because kids don't experience life in separate compartments — and neither do adults.",
              color: "bg-sage-100"
            },
            {
              title: "Evidence-Informed",
              desc: "Grounded in research and best practices. But never rigid — what works for your family is what matters.",
              color: "bg-sand-100"
            },
            {
              title: "Family-Centered",
              desc: "The whole family matters. Parents are always part of the conversation — and often, that's where the biggest shifts happen.",
              color: "bg-clay-50"
            },
            {
              title: "Creative",
              desc: "Out-of-the-box strategies tailored to your child. Not a one-size-fits-all method.",
              color: "bg-sage-50"
            }
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-sand-50 hover:shadow-md transition-all duration-300">
              <div className={`w-12 h-12 ${item.color} rounded-full mb-6`}></div>
              <h3 className="text-xl font-serif text-sand-900 mb-3">{item.title}</h3>
              <p className="text-sand-600 font-light leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Credentials & Experience */}
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
              <span>Pediatric Mental Health Coach — collaborating with licensed therapists and psychiatric providers</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
              <span>Author of <em>Trust Your Magical Self</em></span>
            </li>
          </ul>
          <ul className="space-y-4 text-sand-700">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
              <span>Former Faculty at <strong>Lumeria Maui Retreat Center</strong></span>
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

      {/* 4. Qigong / Personal Connection */}
      <div className="text-center space-y-8">
        <div className="aspect-video max-w-3xl mx-auto bg-sage-50 rounded-3xl overflow-hidden relative">
          <img src="/images/qigong.png" alt="Courtney Qigong Practice" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-sage-800 text-xs font-bold uppercase tracking-widest">
              Mind &bull; Body &bull; Heart
            </span>
          </div>
        </div>
      </div>

      <div className="text-center bg-sage-50 rounded-3xl p-16">
        <h2 className="text-3xl font-serif text-sand-900 mb-6">Let's talk about your family.</h2>
        <p className="text-sand-600 font-light mb-8">15-minute free intro chat sessions are available to discuss fit. No pressure — just a conversation.</p>
        <Button variant="primary" onClick={() => window.open('https://calendly.com', '_blank')}>
          Book a Free Chat
        </Button>
      </div>

    </div>
  );
};
