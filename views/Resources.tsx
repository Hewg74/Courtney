import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Download, Sparkles, Loader2, FileText } from 'lucide-react';
import { generateCalmScript } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import { EmailCapture } from '../components/EmailCapture';

export const Resources: React.FC = () => {
  const [situation, setSituation] = useState('');
  const [script, setScript] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!situation.trim()) return;
    setLoading(true);
    setScript(null);
    const result = await generateCalmScript(situation);
    setScript(result);
    setLoading(false);
  };

  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 max-w-5xl mx-auto space-y-24">

      {/* Header */}
      <div className="text-center space-y-6 max-w-3xl mx-auto border-b border-sand-200 pb-16">
        <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest">Toolkit</span>
        <h1 className="text-5xl md:text-6xl font-serif text-sand-900">For the journey.</h1>
        <p className="text-xl text-sand-600 font-light leading-relaxed">
          Free tools to support you between sessions.
        </p>
      </div>

      {/* Lead Magnet Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-sand-50 rounded-[2.5rem] p-10 md:p-16 border border-sand-100 flex flex-col justify-between h-full space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
            <img src="/images/meditation.png" alt="Meditation" className="w-full h-full object-cover" />
          </div>
          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-clay-500 shadow-sm relative z-10">
            <FileText size={32} strokeWidth={1.5} />
          </div>
          <div>
            <h2 className="text-3xl font-serif text-sand-900 mb-4">5 Things to Try Tonight</h2>
            <p className="text-sand-600 font-light leading-relaxed">
              When your child can't sleep, everything feels harder. Download my free guide for 5 gentle, evidence-based shifts you can make this evening.
            </p>
          </div>
          <Button variant="outline" className="bg-white border-sand-200 text-sand-800 hover:bg-clay-50 self-start">
            <Download size={16} className="mr-2" /> Download PDF
          </Button>
        </div>

        <div className="h-full">
          <EmailCapture />
        </div>
      </div>

      {/* AI Tool Section - Reframed */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-soft border border-sand-50 relative overflow-hidden">
        {/* Ambient Gradient */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-50/50 rounded-full blur-[100px] -z-0" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-sage-50 px-3 py-1 rounded-full text-[10px] font-bold text-sage-700 uppercase tracking-widest mb-4">
                <Sparkles size={12} />
                Free AI Tool
              </div>
              <h2 className="text-3xl md:text-4xl font-serif text-sand-900 leading-tight">Calm Script Generator</h2>
            </div>
            <p className="text-sand-600 text-lg leading-relaxed font-light">
              Struggling with what to say in the heat of a meltdown? Describe the situation, and I'll generate a gentle, 3-step script for you to use.
            </p>

            <div className="space-y-4 pt-2">
              <label className="text-xs font-bold uppercase tracking-widest text-sand-400">What's happening?</label>
              <textarea
                value={situation}
                onChange={(e) => setSituation(e.target.value)}
                placeholder="e.g. My 6-year-old is refusing to get in the car for school..."
                className="w-full p-6 rounded-2xl border border-sand-200 focus:border-sage-400 focus:ring-1 focus:ring-sage-400 outline-none min-h-[160px] bg-sand-50/30 text-sand-800 placeholder:text-sand-300 font-sans resize-none text-base transition-all"
              />
              <Button onClick={handleGenerate} disabled={loading || !situation.trim()} className="w-full bg-sage-600 hover:bg-sage-700 text-white">
                {loading ? <><Loader2 className="animate-spin mr-2" size={16} /> Writing...</> : "Generate Script"}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-7">
            {script ? (
              <div className="h-full bg-[#FDFCF8] p-10 rounded-[2rem] border border-sand-100 shadow-sm relative animate-fade-in flex flex-col justify-center min-h-[400px]">
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-sand-100/50 backdrop-blur-sm rotate-1 shadow-sm"></div>

                <div className="prose prose-stone prose-lg prose-p:text-sand-700 prose-headings:font-serif prose-headings:text-sand-800 prose-strong:text-sage-700 prose-strong:font-normal">
                  <ReactMarkdown>{script}</ReactMarkdown>
                </div>
                <div className="mt-8 pt-8 border-t border-sand-100 text-center">
                  <p className="text-sm text-sand-400 italic font-serif">
                    Take a deep breath. You are the anchor.
                  </p>
                </div>
              </div>
            ) : (
              <div className="h-full bg-sand-50/50 rounded-[2rem] border-2 border-dashed border-sand-200 flex flex-col items-center justify-center text-center p-12 text-sand-400 min-h-[400px]">
                <Sparkles size={48} className="mb-4 text-sand-200" strokeWidth={1} />
                <p className="font-serif italic text-xl opacity-60">Your custom script will appear here...</p>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};
