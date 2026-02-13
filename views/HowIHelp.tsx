import React from 'react';
import { Button } from '../components/Button';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

export const HowIHelp: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-24">

      {/* 1. Overview */}
      <div className="grid md:grid-cols-2 gap-12 items-end border-b border-sand-200 pb-16">
        <div className="space-y-6">
          <span className="text-clay-500 font-sans text-sm font-bold uppercase tracking-widest">Services</span>
          <h1 className="text-5xl md:text-6xl font-serif text-sand-900 leading-none">Gentle guidance,<br />grounded results.</h1>
        </div>
        <div className="text-lg text-sand-600 font-light leading-relaxed max-w-md md:ml-auto">
          <p>
            Coaching is future-focused and action-oriented. My approach is based on your strengths and lifestyle to help you feel supported - not overwhelmed.
          </p>
        </div>
      </div>

      {/* 2. Services List */}
      <div className="space-y-12">
        {SERVICES.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-soft hover:shadow-medium transition-all duration-500 flex flex-col lg:flex-row gap-12 items-start border border-sand-50"
          >
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-serif text-sand-900">{service.title}</h3>
              <p className="text-sand-600 leading-relaxed text-lg font-light max-w-2xl">{service.description}</p>

              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start text-sand-700 text-sm">
                    <Check size={16} className="text-sage-500 mr-3 mt-1 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>

            </div>

            <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6 bg-sand-50/50 rounded-3xl p-8 items-center text-center self-stretch justify-center border border-sand-100">
              <div>
                <div className="text-xl font-serif text-sand-900">{service.price}</div>
              </div>
              <Button size="md" className="w-full" onClick={() => window.open('https://calendly.com', '_blank')}>
                Book Free Chat
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Coaching vs Therapy Explainer */}
      <div className="bg-clay-50 rounded-3xl p-10 md:p-16 max-w-4xl mx-auto space-y-8">
        <h2 className="text-3xl font-serif text-sand-900">What coaching is (and isn't)</h2>
        <div className="space-y-6 text-sand-700 leading-relaxed text-lg font-light">
          <p>
            Coaching is future-focused and action-oriented. It can work as a stand-alone service or complement therapy and/or psychiatry by helping you build skills, habits, and strategies. Coaches don't diagnose or treat mental health conditions.
          </p>
          <p>
            I've worked alongside licensed therapists, so I understand how these approaches support each other. Many of my families do both, and they work really well together.
          </p>
        </div>
      </div>

    </div>
  );
};
