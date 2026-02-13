import React from 'react';
import { Button } from '../components/Button';
import { Sparkles, Users, Calendar, GraduationCap } from 'lucide-react';

export const Workshops: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-20">

      {/* Header */}
      <div className="text-center space-y-6 max-w-3xl mx-auto pb-12 border-b border-sand-200">
        <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest">Speaking & Education</span>
        <h1 className="text-5xl md:text-6xl font-serif text-sand-900">Workshops</h1>
        <p className="text-xl text-sand-600 font-light leading-relaxed">
          Interactive workshops that help families and educators learn practical tools for communication, emotional regulation, and stress resilience.
        </p>
      </div>

      <div className="space-y-12">

        {/* School Workshop Card */}
        <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-soft hover:shadow-medium transition-shadow duration-500 flex flex-col md:flex-row gap-10 items-start relative overflow-hidden group border border-sand-50">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none">
            <img src="/images/meditation.png" alt="" className="w-full h-full object-cover mix-blend-multiply" />
          </div>
          <div className="relative z-10 bg-sage-50 w-20 h-20 rounded-2xl flex items-center justify-center text-sage-600 flex-shrink-0">
            <GraduationCap size={32} strokeWidth={1.5} />
          </div>

          <div className="relative z-10 space-y-6 flex-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-2 block">For Schools & Educators</span>
              <h2 className="text-3xl font-serif text-sand-900">The Anxious Classroom</h2>
            </div>
            <p className="text-sand-600 leading-relaxed font-light text-lg">
              A professional development workshop for K-12 educators. We cover the neuroscience of anxiety, how to spot "silent" anxiety in students, and co-regulation techniques that support the whole classroom without disrupting the lesson plan.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="border-sage-200 text-sage-700 hover:bg-sage-50">Request Syllabus</Button>
            </div>
          </div>
        </div>

        {/* Community Workshop Card */}
        <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-soft hover:shadow-medium transition-shadow duration-500 flex flex-col md:flex-row gap-10 items-start relative overflow-hidden group border border-sand-50">
          <div className="relative z-10 bg-clay-50 w-20 h-20 rounded-2xl flex items-center justify-center text-clay-600 flex-shrink-0">
            <Users size={32} strokeWidth={1.5} />
          </div>

          <div className="relative z-10 space-y-6 flex-1">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-clay-500 mb-2 block">For Parents & Communities</span>
              <h2 className="text-3xl font-serif text-sand-900">Raising Resilient Kids</h2>
            </div>
            <p className="text-sand-600 leading-relaxed font-light text-lg">
              A fun and accessible way to learn practical tools, connect and share with other families, and create a calmer home rhythm. Popular topics include communication, emotional regulation, sleep, routine, and organization. Available both online & in-person.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="border-clay-200 text-clay-700 hover:bg-clay-50">Inquire About Availability</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Qigong Classes */}
      <div className="bg-sage-50 p-10 md:p-14 rounded-[2.5rem] flex flex-col md:flex-row gap-10 items-start border border-sage-100">
        <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center text-sage-600 flex-shrink-0">
          <Calendar size={32} strokeWidth={1.5} />
        </div>

        <div className="space-y-6 flex-1">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-2 block">Qigong Classes</span>
            <h2 className="text-3xl font-serif text-sand-900">Weekly Qigong with Courtney</h2>
          </div>
          <p className="text-sand-600 leading-relaxed font-light text-lg">
            A classic mind-body movement practice to ease tension and stress from mind, body, and heart (pronounced CHEE-GONG). Think of it as meditation-meets-fitness. Private, semi-private, and retreat classes are available online & in-person.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-sand-700">
            <div className="bg-white p-4 rounded-xl">
              <span className="font-bold text-sand-900 block mb-1">Group Classes</span>
              Weekly schedule — contact for current times
            </div>
            <div className="bg-white p-4 rounded-xl">
              <span className="font-bold text-sand-900 block mb-1">Private Sessions</span>
              Available online & in-person on Maui
            </div>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-4">
            <Button variant="outline" className="border-sage-200 text-sage-700 hover:bg-sage-100">Inquire About Classes</Button>
            <Button variant="text" className="text-sage-600" onClick={() => window.open('https://youtube.com/@courtneyalexqi', '_blank')}>Watch on YouTube &rarr;</Button>
          </div>
        </div>
      </div>

      {/* Contact Note */}
      <div className="bg-sand-50 p-12 rounded-[2rem] text-center mt-12 space-y-6">
        <h3 className="font-serif text-2xl text-sand-900">Custom Partnerships</h3>
        <p className="text-sand-600 font-light max-w-2xl mx-auto">
          I curate curriculum for specific school districts, non-profits, and retreats. I work virtually worldwide.
        </p>
        <div>
          <a href="mailto:hello@courtneyalex.com" className="text-sand-900 font-bold border-b-2 border-sand-300 hover:border-clay-400 hover:text-clay-600 transition-all pb-0.5 text-lg">hello@courtneyalex.com</a>
        </div>
      </div>
    </div>
  );
};
