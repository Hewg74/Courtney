import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { Button } from '../components/Button';

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div className="animate-fade-in pt-32 pb-24 px-6 max-w-4xl mx-auto space-y-20">
            {/* Header */}
            <div className="text-center space-y-6 border-b border-sand-200 pb-12">
                <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest">Common Questions</span>
                <h1 className="text-5xl md:text-6xl font-serif text-sand-900">FAQ</h1>
                <p className="text-xl text-sand-600 font-light">
                    Some things you might want to know about working together.
                </p>
            </div>

            {/* Accordion */}
            <div className="space-y-4">
                {FAQ_ITEMS.map((item, idx) => (
                    <div
                        key={idx}
                        className={`border border-sand-200 rounded-3xl transition-all duration-300 overflow-hidden ${openIndex === idx ? 'bg-white shadow-soft border-sand-300' : 'bg-transparent hover:bg-sand-50'
                            }`}
                    >
                        <button
                            onClick={() => toggle(idx)}
                            className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                        >
                            <span className={`text-xl font-serif pr-8 transition-colors ${openIndex === idx ? 'text-sand-900' : 'text-sand-700 group-hover:text-sand-900'}`}>
                                {item.q}
                            </span>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${openIndex === idx ? 'bg-clay-100 text-clay-600 rotate-180' : 'bg-sand-100 text-sand-400 group-hover:bg-sand-200'
                                }`}>
                                {openIndex === idx ? <Minus size={16} /> : <Plus size={16} />}
                            </div>
                        </button>

                        <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                }`}
                        >
                            <div className="p-6 md:p-8 pt-0 text-sand-600 leading-relaxed font-light text-lg">
                                {item.a}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Final CTA */}
            <div className="text-center bg-sand-50 p-12 rounded-[2.5rem] mt-12 space-y-8">
                <h3 className="font-serif text-2xl text-sand-900">Still have questions?</h3>
                <p className="text-sand-600 font-light">
                    I'm happy to answer them. 15-minute free intro chat sessions are available to discuss fit. No pressure — just a conversation.
                </p>
                <Button size="lg" onClick={() => window.open('https://calendly.com', '_blank')}>
                    Book Free Chat
                </Button>
            </div>
        </div>
    );
};
