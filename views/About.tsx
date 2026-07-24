import React from 'react';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { Reveal } from '../components/Reveal';
import { Sparkles, Heart, BookOpen, Users, Compass, Sun } from 'lucide-react';
import { CALENDLY_URL, openExternal } from '../constants';

interface AboutProps {
  setView: (view: ViewState) => void;
}

export const About: React.FC<AboutProps> = ({ setView }) => {
  return (
    <div className="animate-fade-in pt-40 pb-32 px-6 max-w-5xl mx-auto space-y-40">

      {/* ─── 1. Intro ─── */}
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <Reveal variant="scaleUp">
            <div className="aspect-[4/5] bg-sand-200 rounded-2xl overflow-hidden relative z-10 shadow-lg">
              <img src="/images/courtney-pose.png" alt="Courtney Alex in a thoughtful pose" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-sand-300 rounded-2xl -z-10"></div>
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
                My approach is individualized, strengths-based, and built on what's already working in your life. I help people figure out small, practical shifts that actually stick, through tools that fit your lifestyle.
              </p>
              <p>
                I've worked at organizations like Education Therapy, 826 Valencia, and Reading Partners, and as faculty at Lumeria Maui Retreat Center. I'm also the author of <em>Trust Your Magical Self</em>.
              </p>
              <p>
                When I'm not coaching, you’ll probably find me in the garden, painting, drawing, or learning something new about health!
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Strengths-Based",
              desc: "Every person has something working well. We build from there by working with your strengths, interests, and learning style.",
              color: "bg-clay-100",
              iconColor: "text-clay-600",
              icon: Sparkles
            },
            {
              title: "Mind & Body",
              desc: "Mind, body, and heart. Because we don't experience life in separate compartments, coaching can include embodied tools when they're a fit.",
              color: "bg-sage-100",
              iconColor: "text-sage-600",
              icon: Heart
            },
            {
              title: "Evidence-Informed",
              desc: "Grounded in research and best practices but always flexible. What works for your life is what matters.",
              color: "bg-sand-100",
              iconColor: "text-sand-600",
              icon: BookOpen
            },
            {
              title: "Family-Centered",
              desc: "The whole family matters. Parents are always part of the conversation since that's often where the biggest shifts happen.",
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
              <div className="group relative overflow-hidden bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-soft h-full hover:shadow-premium hover:-translate-y-1.5 transition-all duration-500 ring-1 ring-sand-900/5">
                <div className="absolute inset-0 bg-gradient-to-br from-sand-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-700 relative z-10 group-hover:scale-110 shadow-inner`}>
                  <item.icon size={24} className={item.iconColor} strokeWidth={1.25} />
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
        <div className="bg-sand-50/80 backdrop-blur-md rounded-[2.5rem] p-10 md:p-20 space-y-12 border border-white shadow-soft ring-1 ring-sand-900/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-serif text-sand-900 text-center relative z-10">Experience & Training</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto text-lg font-light">
            <ul className="space-y-6 text-sand-700">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span><strong>National Board-Certified Health & Wellness Coach</strong> (NBC-HWC)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Additional training in pediatric coaching</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Coaching experience through leading digital health organizations, collaborating with licensed pediatric therapists and psychiatric providers</span>
              </li>
            </ul>
            <ul className="space-y-6 text-sand-700">
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Former Faculty at <strong>Lumeria Maui Retreat Center</strong> & <strong>Maui Academy of Healing Arts</strong></span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Children's literacy programs at <strong>826Valencia</strong> & Reading Partners; Tutoring kids of all ages at Education Therapy</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Certified Holden Qigong Teacher</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-clay-500 mt-2.5 flex-shrink-0" />
                <span>Author of <em>Trust Your Magical Self</em></span>
              </li>
            </ul>
          </div>
        </div>
      </Reveal>

      {/* ─── 4. Books ─── */}
      <Reveal width="100%">
        <div className="bg-white/80 backdrop-blur-md rounded-[2.5rem] p-10 md:p-20 shadow-soft border border-white space-y-12 ring-1 ring-sand-900/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-sand-50/20 to-transparent pointer-events-none" />
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-clay-600">Publications</span>
            <h2 className="text-4xl md:text-5xl font-serif text-sand-900">My Books</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto relative z-10">
            {/* Book 1 */}
            <a href="https://www.amazon.com/Trust-Your-Magical-Self-Intuitive-ebook/dp/B081M6WVDB" target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-soft h-full flex flex-col hover:shadow-premium hover:-translate-y-2 transition-all duration-500 text-center ring-1 ring-sand-900/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-clay-100/50 rounded-bl-[4rem] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="w-32 h-48 mx-auto rounded shadow-lg mb-8 overflow-hidden flex items-center justify-center relative transform group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-700 bg-clay-100">
                <img src="https://images-na.ssl-images-amazon.com/images/P/B07YWFQ13G.01.LZZZZZZZ.jpg" alt="Trust Your Magical Self Cover" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-sand-900 mb-3 group-hover:text-clay-700 transition-colors">Trust Your Magical Self</h3>
              <p className="text-sm text-sand-600 font-light mb-8 flex-grow leading-relaxed">How to be Super Psychic, Extra Intuitive, and Love Your Sensitive Soul</p>
              <div className="text-xs font-bold uppercase tracking-widest text-sand-500 group-hover:text-clay-600 flex items-center justify-center transition-colors">View on Amazon <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span></div>
            </a>
            {/* Book 2 */}
            <a href="https://www.amazon.com/Turning-Other-Things-Were-Supposed-ebook/dp/B0H9VXSGGV?th=1&psc=1&dib=eyJ2IjoiMSJ9.C6F16VSTWjyG8Z9qZKIyuhxunI72PTgYfCCfGz64B1U.mN9N9IkBVefpnYdln9T2saHl7Q4_ATKiOp42gpNQCmQ&dib_tag=AUTHOR" target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white shadow-soft h-full flex flex-col hover:shadow-premium hover:-translate-y-2 transition-all duration-500 text-center ring-1 ring-sand-900/5">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sage-100/50 rounded-bl-[4rem] -z-10 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="w-32 h-48 mx-auto rounded shadow-lg mb-8 overflow-hidden flex items-center justify-center relative transform group-hover:-translate-y-1 group-hover:shadow-2xl transition-all duration-700 bg-sage-100">
                <img src="https://images-na.ssl-images-amazon.com/images/P/B0H9VXSGGV.01.LZZZZZZZ.jpg" alt="Turning 40 Cover" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-serif text-sand-900 mb-3 group-hover:text-sage-700 transition-colors">Turning 40</h3>
              <p className="text-sm text-sand-600 font-light mb-8 flex-grow leading-relaxed">And Other Things We Were Supposed To Do</p>
              <div className="text-xs font-bold uppercase tracking-widest text-sand-500 group-hover:text-sage-600 flex items-center justify-center transition-colors">View on Amazon <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&rarr;</span></div>
            </a>
          </div>
        </div>
      </Reveal>

      {/* ─── 5. Qigong / Personal ─── */}
      <div className="text-center space-y-12">
        <Reveal width="100%">
          <div className="w-full aspect-video bg-sage-50 rounded-2xl overflow-hidden relative shadow-soft">
            <img
              src="/images/maui.jpg"
              alt="Maui Landscape"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-8 flex items-center justify-center">
              <span className="bg-white/90 backdrop-blur-sm px-8 py-3 rounded-full text-sage-800 text-xs font-bold uppercase tracking-widest shadow-lg text-center">
                Mind &bull; Body &bull; Heart
              </span>
            </div>
          </div>
        </Reveal>
      </div>

      {/* ─── 5. CTA ─── */}
      <Reveal width="100%">
        <div className="text-center bg-sage-50/80 backdrop-blur-md rounded-[2.5rem] p-16 md:p-24 border border-white shadow-soft ring-1 ring-sage-900/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
          <h2 className="text-4xl md:text-5xl font-serif text-sand-900 mb-6 relative z-10">Let's talk.</h2>
          <p className="text-sand-600 font-light mb-10 text-lg relative z-10">Book a free 15-minute chat to see if coaching is a good fit.</p>
          <div className="relative z-10">
            <Button variant="primary" size="lg" onClick={() => openExternal(CALENDLY_URL)}>
              Book a Free Chat
            </Button>
          </div>
        </div>
      </Reveal>

    </div>
  );
};
