import React, { useState } from 'react';
import { Button } from '../components/Button';
import { Download, Mail, Loader2, Sparkles, MoveRight } from 'lucide-react';
import { generateCalmScript } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';

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
      <div className="text-center space-y-6">
        <span className="text-clay-500 font-sans text-xs font-bold uppercase tracking-widest">Toolkit</span>
        <h1 className="text-5xl md:text-6xl font-serif text-sand-900">Resources for the journey.</h1>
        <p className="text-xl text-sand-600 font-light">Free tools to support you between sessions.</p>
      </div>

      {/* AI Tool Section - Stationery Style */}
      <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-medium border border-sand-100 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-sage-50/50 to-white -z-0"></div>
        
        <div className="relative z-10 grid md:grid-cols-12 gap-12">
           <div className="md:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full text-xs font-bold text-sage-600 uppercase tracking-wider border border-sage-100 shadow-sm">
                 <Sparkles size={14} className="text-sage-400" />
                 Free Tool
              </div>
              <h2 className="text-3xl font-serif text-sand-900 leading-tight">Calm Script Generator</h2>
              <p className="text-sand-600 text-base leading-relaxed font-light">
                Struggling with what to say in the heat of the moment? Describe a challenging situation, and I'll generate a gentle, 3-step script for you.
              </p>
              
              <div className="space-y-4 pt-2">
                <label className="text-xs font-bold uppercase tracking-widest text-sand-400">What's happening?</label>
                <textarea
                  value={situation}
                  onChange={(e) => setSituation(e.target.value)}
                  placeholder="e.g. My 6-year-old is refusing to go to swimming lessons because they are scared of the water..."
                  className="w-full p-4 rounded-xl border border-sand-200 focus:border-sage-400 focus:ring-1 focus:ring-sage-400 outline-none min-h-[140px] bg-sand-50/50 text-sand-800 placeholder:text-sand-400 font-sans resize-none text-sm transition-all"
                />
                <Button onClick={handleGenerate} disabled={loading || !situation.trim()} className="w-full">
                   {loading ? <><Loader2 className="animate-spin mr-2" size={16}/> Writing...</> : "Generate Script"}
                </Button>
              </div>
           </div>

           <div className="md:col-span-7">
              {script ? (
                <div className="h-full bg-[#FDFCF8] p-8 md:p-10 rounded-2xl border border-sand-100 shadow-sm relative animate-fade-in flex flex-col justify-center">
                   {/* Tape effect */}
                   <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-sand-100/80 backdrop-blur-sm rotate-1 shadow-sm"></div>
                   
                   <div className="prose prose-stone prose-p:text-sand-700 prose-headings:font-serif prose-headings:text-sand-800 prose-strong:text-sage-700 prose-strong:font-normal">
                      <ReactMarkdown>{script}</ReactMarkdown>
                   </div>
                   <div className="mt-8 pt-6 border-t border-sand-100 text-center">
                      <p className="text-xs text-sand-400 italic font-serif">
                        Take a deep breath. You are the anchor.
                      </p>
                   </div>
                </div>
              ) : (
                <div className="h-full bg-sand-50/30 rounded-2xl border border-dashed border-sand-200 flex flex-col items-center justify-center text-center p-8 text-sand-400">
                   <Sparkles size={48} className="mb-4 text-sand-200" strokeWidth={1} />
                   <p className="font-serif italic text-lg opacity-60">Your custom script will appear here...</p>
                </div>
              )}
           </div>
        </div>
      </div>

      {/* Downloads Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="group bg-white border border-sand-100 p-10 rounded-3xl flex items-start gap-8 shadow-soft hover:shadow-medium transition-all duration-300">
          <div className="bg-clay-50 p-4 rounded-2xl text-clay-500 group-hover:bg-clay-100 transition-colors">
            <Download size={24} />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-serif text-sand-900 group-hover:text-clay-600 transition-colors">Co-Regulation Cheat Sheet</h3>
            <p className="text-sm text-sand-600 mb-2 font-light">A printable PDF to stick on your fridge for high-stress moments.</p>
            <button className="text-xs font-bold uppercase tracking-widest text-sand-400 group-hover:text-sand-900 flex items-center gap-2">
               Download <MoveRight size={12} />
            </button>
          </div>
        </div>

        <div className="group bg-white border border-sand-100 p-10 rounded-3xl flex items-start gap-8 shadow-soft hover:shadow-medium transition-all duration-300">
          <div className="bg-sand-100 p-4 rounded-2xl text-sand-600 group-hover:bg-sand-200 transition-colors">
            <Mail size={24} />
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-serif text-sand-900">Weekly Wellness Notes</h3>
            <p className="text-sm text-sand-600 mb-2 font-light">Join 2,000+ parents receiving one gentle tip every Tuesday morning.</p>
            <button className="text-xs font-bold uppercase tracking-widest text-sand-400 group-hover:text-sand-900 flex items-center gap-2">
               Subscribe <MoveRight size={12} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
