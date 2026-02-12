import React from 'react';
import { Button } from '../components/Button';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

export const HowIHelp: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-24">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-12 items-end border-b border-sand-200 pb-16">
        <div className="space-y-6">
          <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest">Services & Pricing</span>
          <h1 className="text-5xl md:text-6xl font-serif text-sand-900 leading-none">Gentle guidance,<br/>grounded results.</h1>
        </div>
        <div className="text-lg text-sand-600 font-light leading-relaxed max-w-md md:ml-auto">
          <p>
            My coaching isn't about "fixing" your child. It's about equipping your family with a new language of connection and regulation.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="space-y-12">
        {SERVICES.map((service, idx) => (
          <div 
            key={idx} 
            className="group bg-white rounded-3xl p-8 md:p-12 shadow-soft hover:shadow-medium transition-all duration-500 flex flex-col lg:flex-row gap-12 items-start"
          >
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-serif text-sand-900">{service.title}</h3>
              <p className="text-sand-600 leading-relaxed text-lg font-light max-w-2xl">{service.description}</p>
              
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {service.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start text-sand-700 text-sm">
                    <Check size={16} className="text-sage-500 mr-3 mt-1 flex-shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-6 bg-sand-50 rounded-2xl p-8 items-center text-center self-stretch justify-center">
              <div>
                <span className="block text-xs uppercase tracking-widest text-sand-400 mb-2">Investment</span>
                <div className="text-2xl font-serif text-sand-900">{service.price}</div>
              </div>
              <Button size="md" className="w-full" onClick={() => window.open('https://calendly.com', '_blank')}>
                Book Consult
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* FAQ / Final CTA */}
      <div className="bg-sage-50 rounded-3xl p-12 md:p-20 text-center space-y-8 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-sage-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-clay-100 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
           <h3 className="text-3xl font-serif text-sand-900">Unsure what you need?</h3>
           <p className="text-sand-600 text-lg font-light">
             Every family is a unique ecosystem. Let's hop on a short, no-pressure call to hear what's going on and see if we're a good fit.
           </p>
           <Button size="lg" onClick={() => window.open('https://calendly.com', '_blank')}>
             Book Free 15-Min Chat
           </Button>
        </div>
      </div>
    </div>
  );
};
