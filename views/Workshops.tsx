import React from 'react';
import { Button } from '../components/Button';
import { Sparkles, Users, Calendar } from 'lucide-react';

export const Workshops: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-20">
      
      {/* Header */}
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest">Speaking & Education</span>
        <h1 className="text-5xl md:text-6xl font-serif text-sand-900">Workshops</h1>
        <p className="text-xl text-sand-600 font-light leading-relaxed">
          Bringing trauma-informed, anxiety-aware practices to schools, organizations, and parent groups.
        </p>
      </div>

      <div className="space-y-12">
        
        {/* School Workshop Card */}
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-soft hover:shadow-medium transition-shadow duration-500 flex flex-col md:flex-row gap-10 items-start relative overflow-hidden group">
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-sage-50 rounded-bl-full -z-0 transition-transform duration-700 group-hover:scale-110"></div>
          
          <div className="relative z-10 bg-sage-100 w-16 h-16 rounded-2xl flex items-center justify-center text-sage-600 flex-shrink-0">
             <Users size={28} />
          </div>
          
          <div className="relative z-10 space-y-6 flex-1">
            <div>
               <span className="text-xs font-bold uppercase tracking-widest text-sage-500 mb-2 block">For Educators</span>
               <h2 className="text-3xl font-serif text-sand-900">The Anxious Classroom</h2>
            </div>
            <p className="text-sand-600 leading-relaxed font-light text-lg">
              A 2-hour professional development workshop for K-5 educators. We cover the neuroscience of anxiety, how to spot "silent" anxiety in students, and co-regulation techniques that don't disrupt the lesson plan.
            </p>
            <div className="flex flex-wrap gap-3">
               <span className="px-4 py-1.5 bg-sand-50 rounded-full text-xs text-sand-500 font-medium">Neuroscience 101</span>
               <span className="px-4 py-1.5 bg-sand-50 rounded-full text-xs text-sand-500 font-medium">Co-Regulation</span>
               <span className="px-4 py-1.5 bg-sand-50 rounded-full text-xs text-sand-500 font-medium">Teacher Burnout</span>
            </div>
            <div className="pt-4">
              <Button variant="outline">Request Syllabus</Button>
            </div>
          </div>
        </div>

        {/* Parent Workshop Card */}
        <div className="bg-white p-10 md:p-14 rounded-3xl shadow-soft hover:shadow-medium transition-shadow duration-500 flex flex-col md:flex-row gap-10 items-start relative overflow-hidden group">
           {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-clay-50 rounded-bl-full -z-0 transition-transform duration-700 group-hover:scale-110"></div>

          <div className="relative z-10 bg-clay-100 w-16 h-16 rounded-2xl flex items-center justify-center text-clay-600 flex-shrink-0">
             <Sparkles size={28} />
          </div>

          <div className="relative z-10 space-y-6 flex-1">
            <div>
               <span className="text-xs font-bold uppercase tracking-widest text-clay-500 mb-2 block">For Communities</span>
               <h2 className="text-3xl font-serif text-sand-900">Raising Resilient Kids</h2>
            </div>
            <p className="text-sand-600 leading-relaxed font-light text-lg">
              An evening talk (virtual or in-person) designed for PTAs and community groups. Practical, funny, and deeply reassuring. Parents leave with 3 immediate tools to try at bedtime.
            </p>
            <div className="pt-4">
               <Button variant="outline">Inquire About Availability</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Note */}
      <div className="bg-sand-100/50 p-10 rounded-3xl text-center mt-12 border border-sand-100">
        <div className="flex justify-center mb-4 text-sand-400">
           <Calendar size={24} />
        </div>
        <p className="text-sand-600 text-lg font-light mb-2">Looking for something custom?</p>
        <p className="text-sand-500 text-sm mb-6">I often curate curriculum for specific school districts or non-profits.</p>
        <a href="mailto:hello@courtneyalex.com" className="text-sand-900 font-bold border-b border-sand-300 hover:border-clay-400 hover:text-clay-600 transition-all pb-0.5">hello@courtneyalex.com</a>
      </div>
    </div>
  );
};
