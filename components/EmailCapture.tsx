import React, { useState } from 'react';
import { Button } from './Button';
import { Sparkles, Loader2 } from 'lucide-react';

export const EmailCapture: React.FC = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-sage-50 border border-sage-100 p-8 rounded-3xl text-center space-y-2 animate-fade-in">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-sage-100 text-sage-600 rounded-full mb-2">
                    <Sparkles size={20} />
                </div>
                <h3 className="font-serif text-xl text-sand-900">You're on the list!</h3>
                <p className="text-sand-600 text-sm font-light">Check your inbox for your first resource.</p>
                <button onClick={() => setStatus('idle')} className="text-xs text-sand-400 underline mt-4 hover:text-sand-600">Reset form</button>
            </div>
        );
    }

    return (
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-sand-100 shadow-soft">
            <div className="text-center space-y-4 mb-8">
                <h3 className="font-serif text-2xl text-sand-900">Join the Circle</h3>
                <p className="text-sand-600 font-light leading-relaxed">
                    Get gentle, evidence-based wellness tips for your family. No noise, just support.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-6 py-4 rounded-full bg-sand-50 border border-sand-200 focus:border-clay-400 focus:ring-1 focus:ring-clay-400 outline-none text-sand-800 placeholder:text-sand-400 font-sans transition-all"
                    />
                </div>
                <Button variant="primary" className="w-full" disabled={status === 'loading'}>
                    {status === 'loading' ? <Loader2 className="animate-spin" /> : 'Get Free Resources'}
                </Button>
                <p className="text-xs text-center text-sand-400 font-light">
                    No spam, ever. Unsubscribe anytime.
                </p>
            </form>
        </div>
    );
};
