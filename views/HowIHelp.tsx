import React from 'react';
import { Button } from '../components/Button';
import { SERVICES } from '../constants';
import { Check, ArrowRight } from 'lucide-react';

export const HowIHelp: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-24">

      {/* 1. Overview */}
      <div className="grid md:grid-cols-2 gap-12 items-end border-b border-sand-200 pb-16">
        <div className="space-y-6">
          <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest">Services</span>
          <h1 className="text-5xl md:text-6xl font-serif text-sand-900 leading-none">Gentle guidance,<br />grounded results.</h1>
        </div>
        <div className="text-lg text-sand-600 font-light leading-relaxed max-w-md md:ml-auto">
          <p>
            Coaching is future-focused and action-oriented. We bring together evidence-based strategies and holistic tools — tailored to your family's unique ecosystem.
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

              {/* Specific detail for Calm Kid Program */}
              {service.title.includes('Calm Kid') && (
                <div className="mt-8 p-6 bg-sage-50 rounded-2xl text-sm text-sand-600 space-y-2">
                  <p className="font-bold text-sage-800 uppercase tracking-wider text-xs mb-2">Weekly Themes Include:</p>
                  <ul className="grid grid-cols-2 gap-2">
                    <li>• Understanding Anxiety</li>
                    <li>• The Body Scan</li>
                    <li>• Naming Emotions</li>
                    <li>• Sleep Rituals</li>
                    <li>• Boundaries</li>
                    <li>• Self-Kindness</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6 bg-sand-50/50 rounded-3xl p-8 items-center text-center self-stretch justify-center border border-sand-100">
              <div>
                <span className="block text-xs uppercase tracking-widest text-sand-400 mb-2">Investment</span>
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
      <div className="bg-clay-50 rounded-3xl p-10 md:p-16 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-5 space-y-6">
          <h2 className="text-3xl font-serif text-sand-900">Coaching vs. Therapy</h2>
          <p className="text-sand-700 leading-relaxed">
            Coaches do not diagnose or treat mental health conditions. While therapy often looks back to heal deep wounds, coaching looks forward to build skills.
          </p>
          <p className="text-sand-700 leading-relaxed">
            I've worked alongside licensed therapists at Bend Health & Lyra, so I understand how these modalities support each other. Many families do both.
          </p>
        </div>
        <div className="md:col-span-7 grid gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h4 className="font-bold text-sand-900 mb-2">Therapy is for...</h4>
            <p className="text-sm text-sand-600">Processing trauma, treating diagnosis, deep psychological healing, crisis management.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-clay-200">
            <h4 className="font-bold text-sand-900 mb-2">Coaching is for...</h4>
            <p className="text-sm text-sand-600">Building habits, emotional regulation tools, parenting strategies, accountability, action plans.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
