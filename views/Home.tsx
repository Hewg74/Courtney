import React from 'react';
import { Button } from '../components/Button';
import { ViewState } from '../types';
import { Quote, Sparkles, Award, Users, Play } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '../components/Reveal';

interface HomeProps {
  setView: (view: ViewState) => void;
}

export const Home: React.FC<HomeProps> = ({ setView }) => {
  return (
    <div className="animate-fade-in pb-24 relative overflow-x-hidden">

      {/* 1. Hero Section - Side-by-Side Layout */}
      <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
        {/* Ambient Washes - Animated */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-clay-50/50 via-sand-50 to-white -z-20"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-sage-100/40 rounded-full blur-[100px] -z-10"
        />

        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10 pt-20 lg:pt-0">

          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1 relative">
            <Reveal variant="fadeUp" delay={0.2}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-sand-900 leading-[1.05] tracking-tight">
                Mental Wellness Coaching for kids <span className="italic font-light text-clay-600 inline-block">& families</span>
              </h1>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.4}>
              <p className="text-lg md:text-xl text-sand-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
                Hi, I'm Courtney! I'm a Board-Certified Health & Wellness Coach (NBC-HWC) and Qigong teacher with a background in children's mental health. I help families and individuals build routines to support calm, connection, and confidence using tools that fit easily into your life.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.6}>
              <div className="pt-2 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-5">
                <Button size="lg" onClick={() => window.open('https://calendly.com', '_blank')}>
                  Book a Free 15-Min Chat
                </Button>
                <Button variant="text" size="lg" onClick={() => setView('how-i-help')}>
                  See how I help
                </Button>
              </div>
            </Reveal>

            {/* Trust Anchors - Enhanced */}
            <Reveal variant="fadeIn" delay={0.8}>
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
                  <span>30+ Families/Mo</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Organic Shape Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <Reveal variant="scaleUp" delay={0.4}>
              <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
                {/* Soft Background */}
                <div className="absolute inset-0 bg-sand-200 rounded-[2rem] rotate-2 opacity-50 blur-xl"></div>

                {/* Image */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white/50">
                  <img
                    src="/images/headshot.jpg"
                    alt="Courtney Alex"
                    className="w-full h-full object-cover transform scale-105 hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Floating Decor */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-clay-100 rounded-full blur-md opacity-60"></div>
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-sage-100 rounded-full blur-lg opacity-60"></div>
              </div>
            </Reveal>
          </div>

        </div>
      </section>

      {/* 2. Problem Identification */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-16">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-serif text-sand-900 italic">Sound familiar?</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            { id: 1, text: "Anxiety is running the show — meltdowns after school, bedtime battles, school resistance, or your own daily overwhelm that leaves everyone drained." },
            { id: 2, text: "Your child is struggling with ADHD, sleep, emotional regulation, or communication — and you're looking for tools that actually work for your family." },
            { id: 3, text: "You've tried therapy, maybe medication, and you're looking for someone who sees the whole person — not just a diagnosis. Something that complements what you're already doing." },
            { id: 4, text: "You know your child has real strengths, and you want someone who can help them see that too — and build from there." }
          ].map((item, i) => (
            <Reveal key={item.id} delay={i * 0.1}>
              <div className="bg-sand-50 p-8 rounded-2xl hover:shadow-soft transition-shadow duration-300 border border-sand-100 h-full">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-clay-600 mb-4 font-bold shadow-sm font-serif text-lg">
                  {item.id}
                </div>
                <p className="text-sand-700 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.4}>
          <p className="text-lg text-sand-600 font-medium pt-4">If any of this resonates, you're in the right place.</p>
        </Reveal>
      </section>

      {/* 3. Services Overview */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Reveal className="mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-sand-900">How we can work together</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Reveal delay={0.1}>
              <div
                onClick={() => setView('how-i-help')}
                className="group cursor-pointer bg-sand-50 p-8 rounded-3xl hover:shadow-medium transition-all duration-300 border border-transparent hover:border-sand-200 h-full"
              >
                <h3 className="text-2xl font-serif text-sand-900 mb-4">1-on-1 Coaching</h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-8 min-h-[80px]">
                  Personalized guidance and strategies for stress relief. We focus on your strengths and build on what you're already doing well — through small manageable steps.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-sand-500 group-hover:text-clay-600">Learn More &rarr;</div>
              </div>
            </Reveal>

            {/* Card 2 - Highlighted */}
            <Reveal delay={0.2} variant="scaleUp">
              <div
                onClick={() => setView('how-i-help')}
                className="group cursor-pointer bg-clay-50 p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 relative border border-clay-100 h-full"
              >
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-clay-600 shadow-sm">
                  Recommended
                </div>
                <h3 className="text-2xl font-serif text-sand-900 mb-4">The Calm Kid Program</h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-8 min-h-[80px]">
                  An 8-week structured program for kids dealing with anxiety, ADHD, or overwhelm. Week by week, we build practical tools your child can actually use.
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-clay-700">Learn More &rarr;</div>
              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal delay={0.3}>
              <div
                onClick={() => setView('workshops')}
                className="group cursor-pointer bg-sand-50 p-8 rounded-3xl hover:shadow-medium transition-all duration-300 border border-transparent hover:border-sand-200 h-full"
              >
                <h3 className="text-2xl font-serif text-sand-900 mb-4">Workshops</h3>
                <p className="text-sand-600 text-sm leading-relaxed mb-8 min-h-[80px]">
                  Interactive workshops to learn skills like emotional regulation, communication, and stress resilience — plus mind-body exercises (that your kiddo might actually try!).
                </p>
                <div className="text-xs font-bold uppercase tracking-widest text-sand-500 group-hover:text-clay-600">Learn More &rarr;</div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. The Approach */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif text-sand-900">A different kind of coaching.</h2>
              <div className="text-sand-600 text-lg leading-relaxed space-y-6 font-light">
                <p>
                  I'm not here to diagnose or treat — and I'm not here to talk about what's not working. My approach is based on your strengths and lifestyle to help you feel supported - not overwhelmed.
                </p>
                <p>
                  A lot of families have tried approaches that want them to do things a certain way. That's not how I work. We focus on what you're already doing well and build from there — through small manageable steps that actually fit your life.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            {[
              { title: "Strength-Based", desc: "We focus on what's working — helping your child discover their strengths and where they shine." },
              { title: "Evidence-Informed", desc: "Board-certified coaching grounded in research and real-world strategies." },
              { title: "Whole-Family", desc: "When the child shifts, the family shifts. Parents are always part of the conversation." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.2} variant="fadeUp">
                <div className="flex gap-6 items-start p-6 rounded-2xl bg-white shadow-sm border border-sand-100">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-sage-400 flex-shrink-0" />
                  <div>
                    <h4 className="font-serif text-xl text-sand-900 mb-2">{item.title}</h4>
                    <p className="text-sand-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-24 bg-sand-900 text-sand-50 overflow-hidden">
        <Reveal width="100%">
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-sand-400">What families say</h2>

            <div className="space-y-8">
              <Quote className="mx-auto text-clay-400 opacity-50" size={48} />
              <p className="text-2xl md:text-4xl font-serif italic leading-tight text-sand-100">
                "Since working with Courtney, I have seen a miraculous transformation. Once nearly debilitated by anxiety, my child now has confidence, courage, and tools."
              </p>
              <cite className="block not-italic text-sm font-sans tracking-wide text-sand-400">
                — Parent of a 19-year-old, Arizona
              </cite>
            </div>

            <div className="flex flex-col md:flex-row gap-8 pt-12 border-t border-sand-800">
              <div className="flex-1 space-y-4">
                <p className="text-lg font-serif italic text-sand-300">"Courtney creates an environment of safety, trust, and empowerment."</p>
              </div>
              <div className="hidden md:block w-px bg-sand-800"></div>
              <div className="flex-1 space-y-4">
                <p className="text-lg font-serif italic text-sand-300">"Someone who actually understood my kid — not just the behavior."</p>
              </div>
            </div>

            <Button variant="outline" className="text-sand-100 border-sand-700 hover:bg-sand-800" onClick={() => setView('results')}>
              Read more stories
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 6. Qigong Section */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <Reveal width="100%">
          <div className="bg-sage-50 rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row gap-12 items-center">

            <div className="w-full md:w-1/2 aspect-video bg-sage-100 rounded-2xl overflow-hidden relative flex-shrink-0">
              <img src="/images/qigong.png" alt="Courtney teaching Qigong" className="w-full h-full object-cover" />
              <a
                href="https://youtube.com/@courtneyalexqi"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors"
              >
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <Play size={24} className="text-sage-700 ml-1" />
                </div>
              </a>
            </div>

            <div className="space-y-6 text-center md:text-left">
              <div className="inline-block px-3 py-1 bg-white rounded-full text-xs font-bold uppercase tracking-wider text-sage-600 shadow-sm">Mind &amp; Body</div>
              <h2 className="text-3xl md:text-4xl font-serif text-sand-900">
                Qigong with Courtney
              </h2>
              <p className="text-sand-700 leading-relaxed text-lg">
                Think of it as meditation-meets-fitness (pronounced CHEE-GONG). I teach weekly classes for all levels — a gentle way to ease tension and stress from mind, body, and heart.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Button variant="primary" onClick={() => setView('workshops')}>
                  See Class Schedule
                </Button>
                <Button variant="outline" onClick={() => window.open('https://youtube.com/@courtneyalexqi', '_blank')}>
                  Watch on YouTube
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 7. About Preview */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center space-y-8">
        <Reveal className="mx-auto">
          <div className="w-32 h-32 bg-sand-200 rounded-full mx-auto overflow-hidden border-4 border-white shadow-sm">
            <img src="/images/headshot.jpg" alt="Courtney Alex" className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h2 className="text-4xl font-serif text-sand-900">Hi, I'm Courtney</h2>
        </Reveal>
        <Reveal delay={0.3}>
          <p className="text-xl text-sand-600 font-light max-w-2xl mx-auto">
            I've worked alongside licensed therapists and psychiatric providers, helping families navigate anxiety, ADHD, and stress. I help kids and adults build on what's already working — so everyone feels a little more supported.
          </p>
        </Reveal>
        <Reveal delay={0.4}>
          <Button variant="text" onClick={() => setView('about')}>More about me &rarr;</Button>
        </Reveal>
      </section>

      {/* 8. Final CTA */}
      <section className="py-24 bg-sage-50 text-center px-6">
        <Reveal className="mx-auto">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-sand-900">Let's talk about your family.</h2>
            <p className="text-lg text-sand-600 font-light">
              15-minute free intro chat sessions are available to discuss fit. No pressure, no commitment — just a conversation.
            </p>
            <Button size="lg" onClick={() => window.open('https://calendly.com', '_blank')}>
              Book Your Free Chat
            </Button>
          </div>
        </Reveal>
      </section>

    </div>
  );
};

