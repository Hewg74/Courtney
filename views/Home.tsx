import React from 'react';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { ArrowRight, Star, Heart } from 'lucide-react';

interface HomeProps {
  setView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  return (
    <div className="animate-fade-in pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
        
        {/* Ambient Washes - Subtle & Breathable */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-clay-50/50 via-sand-50 to-sand-50 -z-20" />
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-sage-100/30 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-clay-100/40 rounded-full blur-[100px] -z-10" />

        <div className="max-w-4xl mx-auto space-y-12 relative z-10 pt-20">
          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-sand-200 text-xs font-sans uppercase tracking-widest text-sand-500">
               <span className="w-2 h-2 rounded-full bg-sage-400"></span>
               Pediatric Wellness Coaching
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-sand-900 leading-[1.05] tracking-tight">
            Calm for your child.<br />
            <span className="italic font-light text-clay-600">Confidence for you.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-sand-600 max-w-xl mx-auto leading-relaxed font-sans font-light">
            Helping anxious kids navigate big feelings and helping parents become the steady, loving anchor their family needs.
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" onClick={() => window.open('https://calendly.com', '_blank')}>
              Book a Free 15-Min Chat
            </Button>
            <Button variant="text" size="lg" onClick={() => setView('how-i-help')}>
              See how I help
            </Button>
          </div>
        </div>

        {/* Floating Social Proof */}
        <div className="absolute bottom-12 left-0 right-0 hidden md:flex justify-center">
           <div className="flex items-center gap-8 text-sm text-sand-400 font-sans tracking-wide">
              <span>NBC-HWC Certified</span>
              <span className="w-1 h-1 bg-sand-300 rounded-full"></span>
              <span>Evidence-Based</span>
              <span className="w-1 h-1 bg-sand-300 rounded-full"></span>
              <span>Trauma-Informed</span>
           </div>
        </div>
      </section>

      {/* Philosophy Section - Editorial Layout */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             {/* Abstract Visual - Stacking Cards Effect */}
             <div className="relative z-10 bg-sage-50 rounded-3xl p-12 shadow-medium aspect-square flex items-center justify-center border border-sage-100">
                <div className="text-center space-y-6">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm text-sage-600">
                      <Heart size={24} fill="currentColor" className="text-sage-200" strokeWidth={1.5} />
                   </div>
                   <p className="font-serif italic text-2xl text-sand-700 leading-snug">
                     "Safety is the prerequisite for learning. We can't correct until we connect."
                   </p>
                </div>
             </div>
             {/* Offset decoration */}
             <div className="absolute top-8 -right-8 w-full h-full bg-sand-100 rounded-3xl -z-10"></div>
          </div>

          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-serif text-sand-900 leading-tight">
              You don't have to navigate the storm alone.
            </h2>
            <div className="space-y-8 text-lg text-sand-600 font-light leading-relaxed">
              <p>
                Anxiety in children doesn't usually look like worrying about the future. It looks like tummy aches on Monday mornings, meltdowns over seams in socks, and bedtime battles that leave everyone exhausted.
              </p>
              <p>
                I bridge the gap between clinical therapy and daily life. While therapy happens once a week, <span className="font-medium text-sand-800 decoration-clay-300 underline underline-offset-4 decoration-2">parenting happens every day</span>.
              </p>
              <p>
                I give you the practical, moment-to-moment tools to help your child co-regulate, so your home can feel like a sanctuary again.
              </p>
            </div>
            <Button variant="outline" onClick={() => setView('about')}>
              Read my story
            </Button>
          </div>
        </div>
      </section>

      {/* Offerings - Clean & Spacious */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl space-y-4">
              <h2 className="text-3xl md:text-5xl font-serif text-sand-900">Ways we can work together</h2>
              <p className="text-sand-500 text-lg font-light">Choose the level of support that fits your family's current season.</p>
            </div>
            <Button variant="outline" onClick={() => setView('how-i-help')}>View Pricing</Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "1:1 Coaching", 
                desc: "Deep, personalized partnership to transform your family dynamic over 3-6 months.", 
                icon: "🌿" 
              },
              { 
                title: "The 8-Week Reset", 
                desc: "A structured, curriculum-based roadmap to move from daily chaos to consistent calm.", 
                icon: "✨" 
              },
              { 
                title: "Workshops", 
                desc: "Trauma-informed training for schools, organizations, and parent groups.", 
                icon: "users" 
              }
            ].map((s, i) => (
              <div 
                key={i} 
                onClick={() => setView(s.title.includes('Workshop') ? 'workshops' : 'how-i-help')}
                className="group cursor-pointer bg-sand-50/50 p-10 rounded-3xl hover:bg-clay-50/50 transition-colors duration-500 ease-out"
              >
                <div className="mb-6 text-3xl opacity-80">{s.icon === 'users' ? <div className="w-10 h-10 bg-sand-200 rounded-full flex items-center justify-center text-sand-600 text-lg">👥</div> : s.icon}</div>
                <h3 className="text-2xl font-serif text-sand-900 mb-4">{s.title}</h3>
                <p className="text-sand-600 leading-relaxed text-sm font-light mb-8 min-h-[80px]">{s.desc}</p>
                <div className="flex items-center text-xs font-bold tracking-widest uppercase text-sand-400 group-hover:text-clay-600 transition-colors">
                  Explore <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial - Quiet Confidence */}
      <section className="py-32 px-6 bg-sand-900 text-sand-50 rounded-t-[3rem] mt-12 mx-2 md:mx-6 relative overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-clay-500/20 rounded-full blur-[100px] mix-blend-screen"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <div className="flex justify-center gap-1 opacity-80">
            {[1,2,3,4,5].map(n => <Star key={n} size={18} fill="currentColor" className="text-clay-300" stroke="none"/>)}
          </div>
          <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight text-sand-100">
            "I landed on Courtney's site and felt my shoulders drop for the first time in months. Working with her was exactly the anchor we needed."
          </blockquote>
          <div className="space-y-1">
            <cite className="block not-italic text-sm font-sans font-bold tracking-widest uppercase text-sand-400">Rebecca</cite>
            <span className="block text-xs text-sand-500 font-serif italic">Mom of 3, San Diego</span>
          </div>
        </div>
      </section>
    </div>
  );
};
