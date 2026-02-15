import React from 'react';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { Reveal } from '../components/Reveal';
import { Sparkles, Heart, BookOpen, Users, Compass, Sun } from 'lucide-react';

interface AboutProps {
  setView: (view: ViewState) => void;
}

export const About: React.FC<AboutProps> = ({ setView }) => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-32">

      {/* ─── 1. Intro ─── */}
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <Reveal variant="scaleUp">
            <div className="aspect-[4/5] bg-sand-200 rounded-[3rem] overflow-hidden relative z-10 shadow-lg">
              <img src="/images/courtney-pose.png" alt="Courtney Alex" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-sand-300 rounded-[3rem] -z-10"></div>
          </Reveal>
        </div>

        <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-serif text-sand-900 leading-[0.9]">
              Hi, I'm <span className="text-clay-600 italic">Courtney</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
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
          </Reveal>
        </div>
      </div>

      {/* ─── 2. My Approach ─── */}
      <div className="space-y-16">
        <Reveal width="100%">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-sage-600">My Approach</span>
            <h2 className="text-4xl md:text-5xl font-serif text-sand-900">How I work</h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Strengths-Based",
              desc: "Every person has something working well. We build from there — working with your strengths, interests, and learning style.",
              color: "bg-clay-100",
              iconColor: "text-clay-600",
              icon: Sparkles
            },
            {
              title: "Mind & Body",
              desc: "Mind, body, and heart. Because we don't experience life in separate compartments — coaching can include embodied tools when they're a fit.",
              color: "bg-sage-100",
              iconColor: "text-sage-600",
              icon: Heart
            },
            {
              title: "Evidence-Informed",
              desc: "Grounded in research and best practices — but always flexible. What works for your life is what matters.",
              color: "bg-sand-100",
              iconColor: "text-sand-600",
              icon: BookOpen
            },
            {
              title: "Family-Centered",
              desc: "The whole family matters. Parents are always part of the conversation — and often, that's where the biggest shifts happen.",
              color: "bg-clay-50",
              iconColor: "text-clay-600",
              icon: Users
            },
            {
              title: "Individualized",
              desc: "There's no scripted method. Your plan is built around your goals, your life, and what's already working.",
              color: "bg-sage-50",
              iconColor: "text-sage-600",
              icon: Compass
            },
            {
              title: "Positive & Encouraging",
              desc: "We focus on what's going right. By amplifying the positive and building on small wins, we create momentum for lasting change.",
              color: "bg-sand-50",
              iconColor: "text-sand-600",
              icon: Sun
            }
          ].map((item, i) => (
            <Reveal key={i} delay={i * 0.1} className="h-full">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-soft border border-sand-50 hover:shadow-medium transition-all duration-300 h-full">
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon size={24} className={item.iconColor} strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif text-sand-900 mb-4">{item.title}</h3>
                <p className="text-sand-600 font-light leading-relaxed text-sm">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ─── 3. Credentials ─── */}
      <Reveal width="100%">
        <div className="bg-sand-50 rounded-[3rem] p-10 md:p-20 space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif text-sand-900 text-center">Experience & Training</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto text-lg font-light">
            <ul className="space-y-6 text-sand-700">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span><strong>National Board-Certified Health & Wellness Coach</strong> (NBC-HWC)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Coaching experience through leading digital health organizations — collaborating with licensed pediatric therapists and psychiatric providers</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Author of <em>Trust Your Magical Self</em></span>
              </li>
            </ul>
            <ul className="space-y-6 text-sand-700">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Former Faculty at <strong>Lumeria Maui Retreat Center</strong> & <strong>Maui Academy of Healing Arts</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Children's education programs at <strong>826Valencia</strong> & Reading Partners & Education Therapy</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Certified Qigong Teacher</span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      {/* ─── 4. Qigong / Personal ─── */}
      <div className="text-center space-y-12">
        <Reveal width="100%">
          <div className="w-full aspect-video bg-sage-50 rounded-[3rem] overflow-hidden relative shadow-soft">
            <img 
              src="/images/maui.jpg" 
              alt="Maui Landscape" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute flex items-center justify-center">
              <span className="bg-white/90 backdrop-blur-sm px-8 py-3 rounded-full text-sage-800 text-xs font-bold uppercase tracking-widest shadow-lg text-center">
                Mind &bull; Body &bull; Heart
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ─── 5. CTA ─── */}
      <Reveal width="100%">
        <div className="text-center bg-sage-50 rounded-[3rem] p-16 md:p-24">
          <h2 className="text-4xl md:text-5xl font-serif text-sand-900 mb-6">Let's talk.</h2>
          <p className="text-sand-600 font-light mb-10 text-lg">Book a free 15-minute chat to see if coaching is a good fit.</p>
          <Button variant="primary" size="lg" onClick={() => window.open('https://calendly.com/courtneyalex-int/15min', '_blank')}>
            Book a Free Chat
          </Button>
        </div>
      </Reveal>

    </div>
  );
};
