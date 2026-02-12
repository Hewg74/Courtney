import React from 'react';
import { Button } from '../components/Button';

export const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-32">
      
      {/* Intro Section - Editorial Style */}
      <div className="flex flex-col md:flex-row gap-16 items-center">
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-[4/5] bg-sand-200 rounded-2xl overflow-hidden relative z-10 shadow-lg">
             {/* Placeholder for Courtney's Headshot */}
             <img src="https://picsum.photos/800/1000?grayscale" alt="Courtney Alex" className="w-full h-full object-cover opacity-90 mix-blend-multiply" />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-full h-full border border-sand-300 rounded-2xl -z-10"></div>
        </div>
        
        <div className="w-full md:w-1/2 space-y-10">
          <h1 className="text-5xl md:text-6xl font-serif text-sand-900 leading-tight">
            Hi, I'm <span className="text-clay-600 italic">Courtney</span>.
          </h1>
          <div className="space-y-6 text-sand-700 text-lg leading-relaxed font-light">
            <p>
              I am a National Board Certified Health & Wellness Coach specializing in pediatric anxiety and family resilience.
            </p>
            <p>
              But before the certifications, I was an anxious kid. I know what it feels like to have a brain that won't turn off and a body that feels unsafe. 
            </p>
            <p>
              My work exists at the intersection of science and soul. I combine evidence-based strategies from polyvagal theory and CBT with the deep, intuitive wisdom of conscious parenting.
            </p>
          </div>
          <div className="pt-4">
             <Button variant="text" onClick={() => window.open('https://calendly.com', '_blank')}>
                Read my full bio &rarr;
             </Button>
          </div>
        </div>
      </div>

      {/* Values / Approach */}
      <div className="space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
           <span className="text-xs font-bold uppercase tracking-widest text-sage-600">My Philosophy</span>
           <h2 className="text-4xl font-serif text-sand-900">How we create change</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Connection First",
              desc: "We cannot correct behaviors until we connect with the child. Safety is the prerequisite for learning.",
              color: "bg-clay-100"
            },
            {
              title: "Parent-Centric",
              desc: "Children co-regulate with their caregivers. When you feel grounded, they have a safe harbor to return to.",
              color: "bg-sage-100"
            },
            {
              title: "Practical Magic",
              desc: "No abstract theories. We build a toolkit of 2-minute strategies you can use in the grocery store line.",
              color: "bg-sand-200"
            }
          ].map((item, i) => (
             <div key={i} className="bg-white p-10 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300">
                <div className={`w-12 h-12 ${item.color} rounded-full mb-6`}></div>
                <h3 className="text-2xl font-serif text-sand-900 mb-4">{item.title}</h3>
                <p className="text-sand-600 font-light leading-relaxed">{item.desc}</p>
             </div>
          ))}
        </div>
      </div>

      {/* Stats / Trust */}
      <div className="border-y border-sand-200 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
           <div className="space-y-2">
              <div className="text-4xl font-serif text-sand-900">10+</div>
              <div className="text-xs uppercase tracking-widest text-sand-400">Years Experience</div>
           </div>
           <div className="space-y-2">
              <div className="text-4xl font-serif text-sand-900">500+</div>
              <div className="text-xs uppercase tracking-widest text-sand-400">Families Helped</div>
           </div>
           <div className="space-y-2">
              <div className="text-4xl font-serif text-sand-900">NBC</div>
              <div className="text-xs uppercase tracking-widest text-sand-400">Board Certified</div>
           </div>
           <div className="space-y-2">
              <div className="text-4xl font-serif text-sand-900">100%</div>
              <div className="text-xs uppercase tracking-widest text-sand-400">Judgement Free</div>
           </div>
        </div>
      </div>
      
      <div className="text-center bg-sand-900 text-sand-50 rounded-3xl p-16">
         <h2 className="text-3xl font-serif mb-6">Let's support your family.</h2>
         <Button variant="primary" className="bg-sand-50 text-sand-900 hover:bg-clay-100" onClick={() => window.open('https://calendly.com', '_blank')}>
            Book a Free Chat
         </Button>
      </div>

    </div>
  );
};
