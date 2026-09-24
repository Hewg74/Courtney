import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal, Photo, EASE } from '../components/Reveal';
import { Rings } from '../components/Rings';
import { ViewState } from '../types';
import { FAQ_ITEMS, CALENDLY_URL, openExternal } from '../constants';

interface WorkWithMeProps {
  setView: (view: ViewState) => void;
}

const NOTICES = [
  'Better sleep and steadier energy',
  'Less overwhelm, shutdown, and reactivity',
  'Stronger routines and follow-through',
  'Clearer communication and boundaries',
  'More confidence and emotional resilience',
  'A greater sense of calm and connection',
];

const HOW_IT_WORKS: [string, string][] = [
  [
    'Session format',
    "Sessions are 30 minutes, online via Google Meet. We check in, explore tools and strategies, and agree on a small next step. The tone is collaborative, practical, and judgment-free.",
  ],
  [
    'Strengths-based approach',
    "We start with what's already working in your life and build from there. Every plan is individualized and there's no scripted method or one-size-fits-all program.",
  ],
  [
    'Practical + embodied tools',
    'Coaching includes practical strategies for daily life, along with optional mind-body and nervous system support tools like breathwork, movement, and grounding techniques.',
  ],
  [
    'For families',
    'Parent involvement is optional and flexible. For younger children, parents are more closely involved. For teens, sessions are mostly 1-on-1 with periodic parent check-ins. We also work on routines, behavior support, and family communication together.',
  ],
];

/* ─── Small local primitive: a two-column area list with sage dots, not check-icon cards ─── */
const AreaList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
    {items.map((a) => (
      <li key={a} className="flex items-baseline gap-3 text-ink-2 text-[0.9375rem]">
        <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-sage translate-y-[-2px]" aria-hidden />
        {a}
      </li>
    ))}
  </ul>
);

/* ─── Page header ─── */
const Header: React.FC = () => (
  <section className="page-top pb-16 md:pb-24">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-end border-b hairline pb-12 md:pb-16">
      <Reveal className="lg:col-span-7">
        <h1 className="font-serif text-display-xl text-ink">
          Workshops &amp; <em className="text-clay">Coaching</em>
        </h1>
      </Reveal>
      <Reveal delay={0.15} className="lg:col-span-5">
        <p className="text-body-lg text-ink-2 max-w-[34rem]">
          Coaching that's individualized, strengths-based, and grounded in what actually works for your life.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─── Workshops & Group Coaching: editorial row with a photo ─── */
const WorkshopsSection: React.FC = () => (
  <section className="py-section border-b hairline">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      <Reveal className="lg:col-span-5 lg:order-2">
        <Photo
          src="/images/teaching-class.webp"
          alt="Courtney leading a workshop for a seated group"
          radius="28px"
          className="aspect-[4/5] shadow-photo"
        />
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-7 lg:order-1">
        <p className="font-serif italic text-lg text-clay-deep">For schools &amp; health institutions</p>
        <h2 className="mt-3 font-serif text-display-md text-ink">Workshops &amp; Group Coaching</h2>
        <div className="mt-6 text-body text-ink-2 space-y-5 max-w-[48ch]">
          <p>
            Custom workshops, seminars, and group programs designed for schools, health institutions, and parents.
            Workshops are available online and in-person, and can be tailored to your group's exact needs.
          </p>
          <p>
            I offer interactive sessions on a variety of mind-body and practical topics, ensuring participants walk
            away with tools they can use immediately.
          </p>
        </div>
        <AreaList
          items={[
            'Emotional regulation',
            'Communication skills',
            'Stress resilience',
            'Mind-body tools',
            'Burnout prevention',
            'Parenting support',
          ]}
        />
      </Reveal>
    </div>
  </section>
);

/* ─── Coaching for Adults / Families: text-only editorial rows, offset left then right ─── */
const TextOffering: React.FC<{ title: string; paras: string[]; areas: string[]; align?: 'left' | 'right' }> = ({
  title,
  paras,
  areas,
  align = 'left',
}) => (
  <section className="py-section border-b hairline">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <Reveal className={`lg:col-span-7 ${align === 'right' ? 'lg:order-2' : ''}`}>
        <h2 className="font-serif text-display-md text-ink">{title}</h2>
        <div className="mt-6 text-body text-ink-2 space-y-5 max-w-[50ch]">
          {paras.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </Reveal>
      <Reveal delay={0.12} className={`lg:col-span-5 lg:pt-3 ${align === 'right' ? 'lg:order-1' : ''}`}>
        <ul className="border-t hairline">
          {areas.map((a) => (
            <li key={a} className="flex items-baseline gap-4 py-4 border-b hairline">
              <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-clay translate-y-[-3px]" aria-hidden />
              <span className="font-serif text-[1.3rem] leading-snug text-ink">{a}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

/* ─── What clients notice ─── */
const Notices: React.FC = () => (
  <section className="py-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <div className="rounded-lg bg-paper-2 grain px-6 py-16 md:px-16 md:py-20">
        <Reveal>
          <h2 className="font-serif text-display-md text-ink text-center">
            What clients <em className="text-clay">notice</em>
          </h2>
        </Reveal>
        <ul className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 max-w-[1080px] mx-auto">
          {NOTICES.map((n, i) => (
            <Reveal as="li" key={n} delay={i * 0.06} className="border-t hairline py-6 flex gap-4 items-baseline">
              <span className="shrink-0 w-2 h-2 rounded-full bg-sage translate-y-[-2px]" aria-hidden />
              <span className="font-serif text-[1.2rem] leading-snug text-ink">{n}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

/* ─── How coaching works: 2x2 editorial grid, hairlines not cards ─── */
const HowItWorks: React.FC = () => (
  <section className="py-section border-t hairline">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <Reveal>
        <h2 className="font-serif text-display-md text-ink">
          How coaching <em className="text-clay">works</em>
        </h2>
      </Reveal>
      <div className="mt-14 grid sm:grid-cols-2 border-t border-l hairline">
        {HOW_IT_WORKS.map(([k, v], i) => (
          <Reveal key={k} delay={i * 0.06} className="border-b border-r hairline p-8 md:p-10">
            <h3 className="font-serif text-xl text-ink">{k}</h3>
            <p className="mt-3 text-[0.9375rem] text-ink-2 leading-relaxed">{v}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Pricing ─── */
const Pricing: React.FC<WorkWithMeProps> = ({ setView }) => (
  <section className="py-section border-t hairline">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <Reveal>
        <h2 className="font-serif text-display-md text-ink text-center">
          Session <em className="text-clay">pricing</em>
        </h2>
      </Reveal>

      <div className="mt-14 grid md:grid-cols-2 gap-6 md:gap-8">
        {/* Package - featured */}
        <Reveal delay={0.1} className="h-full">
          <div className="relative overflow-hidden h-full flex flex-col rounded-lg bg-forest text-mist shadow-photo p-10 md:p-12">
            <Rings className="absolute -right-24 -top-16 w-[380px] text-mist/10 pointer-events-none" strokeWidth={1} breathe />
            <span className="relative self-start rounded-full bg-clay-glow/15 px-4 py-1.5 text-[0.8125rem] font-medium text-clay-glow">
              Recommended
            </span>
            <h3 className="relative mt-6 font-serif text-2xl text-mist">6-Session Coaching Package</h3>
            <p className="relative mt-3 font-serif text-display-md tabular text-mist">$495</p>
            <p className="relative mt-5 text-[0.9375rem] text-mist-2 leading-relaxed flex-grow max-w-[36ch]">
              Packages are designed for sustained support and real progress. Most clients see the best results with
              consistent sessions over time.
            </p>
            <ul className="relative mt-8 space-y-3 border-t border-line-dark pt-6">
              {[
                'Six 30-minute sessions',
                'Bi-weekly scheduling (flexible)',
                'Parent support included (for family coaching)',
                'Customized to your goals',
              ].map((f) => (
                <li key={f} className="flex items-baseline gap-3 text-[0.9375rem] text-mist">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-clay-glow translate-y-[-2px]" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="light" arrow className="relative mt-8 w-full justify-center" onClick={() => openExternal(CALENDLY_URL)}>
              Book a Free 15-Min Chat
            </Button>
            <p className="relative mt-4 text-[0.8125rem] text-mist-2 text-center">Hawaii GE Tax applies</p>
          </div>
        </Reveal>

        {/* Single session - quieter */}
        <Reveal delay={0.2} className="h-full">
          <div className="h-full flex flex-col rounded-lg border border-line-strong p-10 md:p-12">
            <h3 className="font-serif text-2xl text-ink">Single Coaching Session</h3>
            <p className="mt-3 font-serif text-display-md tabular text-ink">$85</p>
            <p className="mt-5 text-[0.9375rem] text-ink-2 leading-relaxed flex-grow max-w-[36ch]">
              Single sessions are a great way to get focused support on a specific challenge, try out coaching and
              assess fit, or check in when you need it.
            </p>
            <ul className="mt-8 space-y-3 border-t hairline pt-6">
              {[
                'One 30-minute session',
                'Flexible scheduling',
                'Support during a hard week',
                'Troubleshoot routines or communication',
                'Nervous system reset',
                'Clarity and next steps',
              ].map((f) => (
                <li key={f} className="flex items-baseline gap-3 text-[0.9375rem] text-ink-2">
                  <span className="shrink-0 w-1.5 h-1.5 rounded-full bg-sage translate-y-[-2px]" aria-hidden />
                  {f}
                </li>
              ))}
            </ul>
            <Button variant="outline" arrow className="mt-8 w-full justify-center" onClick={() => openExternal(CALENDLY_URL)}>
              Book a Free 15-Min Chat
            </Button>
            <p className="mt-4 text-[0.8125rem] text-ink-2 text-center">Hawaii GE Tax applies</p>
          </div>
        </Reveal>
      </div>

      {/* Insurance / HSA note */}
      <Reveal delay={0.25} className="mt-8">
        <div className="rounded-md border hairline p-6 md:p-8 text-center">
          <p className="font-serif italic text-lg text-clay-deep">Insurance &amp; HSA/FSA coverage</p>
          <p className="mt-3 text-[0.9375rem] text-ink-2 max-w-[54ch] mx-auto leading-relaxed">
            Through a new partnership with <strong className="font-medium text-ink">Active &amp; Fit</strong>, some
            in-person sessions on Maui can now be covered by insurance. For online clients, some{' '}
            <strong className="font-medium text-ink">HSA/FSA</strong> plans may accept coaching with a Letter of
            Medical Necessity. Please reach out to find out more!
          </p>
        </div>
      </Reveal>

      {/* Workshops pricing row */}
      <Reveal delay={0.3} className="mt-6">
        <div className="rounded-md border hairline p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-xl text-ink">Workshops &amp; Group Coaching</h3>
            <p className="mt-2 text-[0.9375rem] text-ink-2">
              Group pricing varies. Please contact me to discuss tailoring a topic to your group!
            </p>
          </div>
          <Button variant="outline" arrow className="shrink-0" onClick={() => setView('contact')}>
            Get in Touch
          </Button>
        </div>
      </Reveal>

      {/* New client note */}
      <Reveal delay={0.35} className="mt-6">
        <div className="rounded-md bg-clay-wash p-6 md:p-8 text-center max-w-2xl mx-auto">
          <p className="text-[0.9375rem] text-ink-2 leading-relaxed">
            <strong className="text-clay-deep font-medium">*New clients receive 10% off</strong> their first session
            or first coaching package. This gives you a chance to experience the work, ask questions, and see
            whether ongoing support feels like the right fit.
          </p>
          <p className="mt-3 text-[0.8125rem] text-ink-2">After the first session or package, regular rates apply.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── FAQ accordion ─── */
const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-section border-t hairline">
      <div className="max-w-[860px] mx-auto px-5 md:px-8">
        <Reveal>
          <h2 className="font-serif text-display-md text-ink text-center">
            Common <em className="text-clay">questions</em>
          </h2>
        </Reveal>
        <div className="mt-14 border-t hairline">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04} className="border-b hairline">
                <button
                  id={`faq-question-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={isOpen ? `faq-answer-${i}` : undefined}
                  className="w-full text-left py-6 md:py-7 flex items-center justify-between gap-6 min-h-[44px]"
                >
                  <span className="font-serif text-lg md:text-xl text-ink">{item.q}</span>
                  <motion.span
                    className="shrink-0 text-ink-2"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  >
                    <ChevronDown size={20} strokeWidth={1.5} aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 md:pb-7 text-[0.9375rem] text-ink-2 leading-relaxed max-w-[62ch]">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ─── Close ─── */
const CTA: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <div className="relative overflow-hidden rounded-lg bg-clay-wash grain px-6 py-20 md:py-28 text-center">
        <Rings
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(120vw,900px)] text-clay/20 pointer-events-none"
          strokeWidth={1}
          breathe
        />
        <Reveal className="relative">
          <h2 className="font-serif text-display-lg text-ink mx-auto max-w-[18ch]">Ready to get started?</h2>
          <p className="mt-6 text-body-lg text-ink-2 mx-auto max-w-[32rem]">
            Book a free 15-minute chat to talk through what might work for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button size="lg" arrow onClick={() => openExternal(CALENDLY_URL)}>
              Book a Free Chat
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export const WorkWithMe: React.FC<WorkWithMeProps> = ({ setView }) => (
  <div className="overflow-x-clip">
    <Header />
    <WorkshopsSection />
    <TextOffering
      title="Coaching for Adults"
      paras={[
        "Whether you're dealing with chronic stress, overwhelm, ADHD, difficulty with routines, or just feeling stuck, coaching gives you a space to figure out what's working, what's not, and what to try next.",
        'We focus on your strengths and build from there. Sessions are practical, action-oriented, and tailored to your life rather than a pre-made program.',
      ]}
      areas={[
        'Stress and overwhelm',
        'Anxiety',
        'ADHD and executive functioning',
        'Organization and routines',
        'Emotional regulation',
        'Communication',
        'Resilience and well-being',
      ]}
    />
    <TextOffering
      title="Coaching for Families & Youth"
      align="right"
      paras={[
        "I work with kids, parents, and families both together and individually. Whether your child is navigating anxiety, ADHD, big emotions, sleep challenges, or school stress, we build practical tools that fit your family's life.",
        "My approach is strengths-based. Every child has something that's working well, and we build from there. Parents are always part of the conversation since that's often where the biggest shifts happen.",
      ]}
      areas={[
        'Anxiety and stress',
        'ADHD and executive functioning',
        'Emotional regulation and behavior support',
        'Communication',
        'Organization and routines',
        'Sleep',
        'Resilience and connection',
      ]}
    />
    <Notices />
    <HowItWorks />
    <Pricing setView={setView} />
    <FAQ />
    <CTA />
  </div>
);
