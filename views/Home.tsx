import React, { useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal, Photo, EASE } from '../components/Reveal';
import { Rings } from '../components/Rings';
import { ViewState } from '../types';
import { openExternal, BOOKING_URL, TESTIMONIALS } from '../constants';

interface HomeProps {
  setView: (view: ViewState) => void;
}

const AREAS = ['stress', 'anxiety', 'ADHD', 'executive functioning', 'communication', 'routines', 'behavior', 'sleep'];

const OFFERINGS: { title: string; desc: string; cta: string; view: ViewState; img: string; alt: string; pos?: string }[] = [
  {
    title: 'Adult Coaching',
    desc: 'Personalized support for stress, overwhelm, and building sustainable routines that fit your life.',
    cta: 'Learn more',
    view: 'work-with-me',
    img: '/images/courtney-pose.webp',
    alt: 'Courtney in a Qigong stance in a garden at golden hour',
    pos: 'center 40%',
  },
  {
    title: 'Family & Youth Coaching',
    desc: 'Practical strategies for anxiety, ADHD, behavior, communication, and connection for kids and the adults who support them.',
    cta: 'Learn more',
    view: 'work-with-me',
    img: '/images/maui.webp',
    alt: 'Footprints along a quiet Maui beach lined with palm trees',
    pos: 'center 70%',
  },
  {
    title: 'Workshops & Group Coaching',
    desc: 'Custom workshops and group programs designed for schools, health institutions, and parents.',
    cta: 'Inquire now',
    view: 'contact',
    img: '/images/teaching-class.webp',
    alt: 'Courtney leading a workshop for a seated group',
    pos: 'center 8%',
  },
  {
    title: 'Qigong Classes',
    desc: 'A gentle mind-body practice to ease tension and restore calm. Group, private, and retreat sessions available.',
    cta: 'See classes',
    view: 'qigong',
    img: '/images/qigong-eyes-closed.webp',
    alt: 'Courtney practicing Qigong outdoors with her eyes closed',
    pos: 'center 30%',
  },
];

const NOTICES = [
  'Better sleep and steadier energy',
  'Less overwhelm, shutdown, and reactivity',
  'Stronger routines and follow-through',
  'Clearer communication and boundaries',
  'More confidence and emotional resilience',
  'A greater sense of calm and connection',
];

// Featured voices: Kerrie (AZ), a college student (CA), and a therapist (Canada).
const FEATURED = [TESTIMONIALS[4], TESTIMONIALS[1], TESTIMONIALS[12]];

const cite = (t: { author: string; context?: string }) => (t.context ? `${t.author}, ${t.context}` : t.author);

/* ─── Hero ─── */
const HEADLINE = ['Helping', 'adults', '&', 'families', 'feel', 'steadier,', 'calmer', '&', 'more'];

// The one kinetic-type moment on the site: words rise into place, then a hand-drawn stroke underlines "connected."
const Headline: React.FC = () => {
  const reduce = useReducedMotion();
  const word = (i: number) =>
    reduce
      ? {}
      : {
          initial: { y: '105%' },
          animate: { y: '0%' },
          transition: { duration: 1, delay: 0.15 + i * 0.07, ease: EASE },
        };
  const last = HEADLINE.length;
  return (
    <h1 className="font-serif text-display-xl text-ink max-w-[14ch]">
      {HEADLINE.map((w, i) => (
        <React.Fragment key={i}>
          <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
            <motion.span className="inline-block" {...word(i)}>
              {w}
            </motion.span>
          </span>{' '}
        </React.Fragment>
      ))}
      <span className="relative inline-block overflow-visible whitespace-nowrap">
        <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]">
          <motion.em className="inline-block text-clay pr-[0.06em]" {...word(last)}>
            connected.
          </motion.em>
        </span>
        <svg
          viewBox="0 0 300 24"
          preserveAspectRatio="none"
          aria-hidden
          className="absolute left-[2%] -bottom-[0.12em] w-[94%] h-[0.28em] text-clay/70 overflow-visible"
        >
          <motion.path
            d="M4 15 C 58 6, 118 21, 178 12 S 268 7, 296 13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? false : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, delay: 0.15 + last * 0.07 + 0.55, ease: [0.65, 0, 0.35, 1] }}
          />
        </svg>
      </span>
    </h1>
  );
};

const Hero: React.FC<HomeProps> = ({ setView }) => (
  <section className="relative page-top pb-16 md:pb-24 overflow-hidden">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
      <div className="order-2 lg:order-1 lg:col-span-7 lg:pr-6 relative z-10">
        <Headline />
        <Reveal delay={0.7}>
          <p className="mt-7 md:mt-8 text-body-lg text-ink-2 max-w-[34rem]">
            Coaching and mind-body tools for stress relief, emotional regulation, and resilience for adults, parents, and kids.
          </p>
        </Reveal>
        <Reveal delay={0.8}>
          <div className="mt-9 md:mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button size="lg" arrow onClick={() => setView('work-with-me')}>
              Work With Me
            </Button>
            <button
              onClick={() => openExternal(BOOKING_URL)}
              className="link-underline text-ink hover:text-clay-deep font-medium py-2"
            >
              Book a free 15-min chat
            </button>
          </div>
        </Reveal>
        <Reveal delay={0.9}>
          <p className="mt-10 md:mt-12 pt-6 border-t hairline max-w-[34rem] text-[0.9375rem] text-ink-2">
            <span className="whitespace-nowrap">Board-certified coach (NBC-HWC)</span> <span className="text-clay mx-1.5">&middot;</span>{' '}
            <span className="whitespace-nowrap">Qigong teacher</span> <span className="text-clay mx-1.5">&middot;</span> Author
          </p>
        </Reveal>
      </div>

      <div className="order-1 lg:order-2 lg:col-span-5 relative">
        <div className="relative mx-auto w-[min(74vw,340px)] sm:w-[min(60vw,400px)] lg:w-full lg:max-w-[460px] lg:ml-auto">
          <Photo
            src="/images/headshot.webp"
            alt="Courtney Alex, health and wellness coach, smiling among Maui greenery"
            priority
            drift={28}
            radius="999px 999px 28px 28px"
            className="aspect-[4/5] lg:aspect-[4/5.2] shadow-photo"
            imgClassName="object-[center_22%]"
          />
          <Rings
            className="absolute -left-[16%] top-[3%] w-[58%] text-clay pointer-events-none"
            strokeWidth={1.25}
            draw
            breathe
          />
          <Reveal delay={1.2} variant="fade" width="fit-content" className="absolute -bottom-5 -right-4 sm:right-auto sm:-left-8">
            <div className="rounded-md bg-paper-2 shadow-lift px-4 py-3 sm:px-5 sm:py-3.5">
              <p className="font-serif italic text-base sm:text-lg leading-tight text-ink">In person on Maui,</p>
              <p className="font-serif italic text-base sm:text-lg leading-tight text-ink-2">online everywhere.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Areas band: a slow, quiet drift ─── */
const AreasBand: React.FC = () => {
  const reduce = useReducedMotion();
  const row = (
    <span className="flex items-center shrink-0" aria-hidden>
      {AREAS.map((a) => (
        <span key={a} className="flex items-center">
          <span className="font-serif italic text-[1.7rem] md:text-[2.1rem] text-ink px-6 md:px-9 whitespace-nowrap">{a}</span>
          <Rings className="w-7 h-4 text-clay/70" strokeWidth={1.25} />
        </span>
      ))}
    </span>
  );
  return (
    <section aria-label="Areas of support" className="border-y hairline overflow-hidden">
      <p className="sr-only">Areas of support: {AREAS.join(', ')}.</p>
      <div className="flex flex-col md:flex-row md:items-center">
        <p
          aria-hidden
          className="shrink-0 px-5 pt-5 md:pt-0 md:pl-8 md:pr-8 md:py-3 md:translate-y-[5px] md:border-r hairline text-[0.9375rem] text-ink-2 text-center md:text-left"
        >
          Areas of support
        </p>
        <div className="min-w-0 flex-1 py-4 md:py-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]">
          {reduce ? (
            <p className="px-5 text-center font-serif italic text-2xl text-ink" aria-hidden>
              {AREAS.join(' · ')}
            </p>
          ) : (
            <motion.div
              className="flex w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 70, ease: 'linear', repeat: Infinity }}
            >
              {row}
              {row}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ─── Offerings: an editorial index; the picture follows your attention ─── */
const Offerings: React.FC<HomeProps> = ({ setView }) => {
  const [active, setActive] = useState(0);
  const current = OFFERINGS[active];
  return (
    <section className="py-section">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <h2 className="font-serif text-display-lg text-ink">
                Here are my <em className="text-clay">offerings</em>
              </h2>
            </Reveal>
            <div className="hidden lg:block mt-12 relative aspect-[4/5] rounded-lg overflow-hidden bg-paper-3 shadow-photo">
              <AnimatePresence initial={false}>
                <motion.img
                  key={current.img}
                  src={current.img}
                  alt={current.alt}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: current.pos }}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        <ul className="lg:col-span-7 lg:pt-4 border-t hairline">
          {OFFERINGS.map((o, i) => (
            <Reveal as="li" key={o.title} delay={i * 0.08} className="border-b hairline">
              <button
                onClick={() => setView(o.view)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group w-full text-left py-9 md:py-12 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
              >
                <div className="lg:hidden">
                  <Photo src={o.img} alt="" radius="18px" className="aspect-[4/3] bg-paper-3" imgClassName="" pos={o.pos} />
                </div>
                <div>
                  <h3
                    className={`font-serif text-display-md transition-[color,transform] duration-500 ease-calm lg:group-hover:translate-x-2 ${
                      active === i ? 'lg:text-ink' : 'lg:text-ink/55'
                    } text-ink`}
                  >
                    {o.title}
                  </h3>
                  <p className="mt-4 text-body text-ink-2 max-w-[40ch]">{o.desc}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-clay-deep whitespace-nowrap">
                  {o.cta}
                  <ArrowRight size={17} strokeWidth={1.75} className="transition-transform duration-feedback group-hover:translate-x-1" aria-hidden />
                </span>
              </button>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
};

/* ─── What clients notice: quiet, just the words ─── */
const Notices: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <div className="rounded-lg bg-paper-2 grain px-6 py-16 md:px-16 md:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <h2 className="font-serif text-display-md text-ink">
              What clients <em className="text-clay">notice</em>
            </h2>
            <p className="mt-6 text-body text-ink-2 max-w-[30ch]">
              Change happens in small, sustainable shifts. Here's what clients often report after working together.
            </p>
          </Reveal>
          <ul className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12">
            {NOTICES.map((n, i) => (
              <Reveal as="li" key={n} delay={i * 0.06} className="border-t hairline py-6 flex gap-4 items-baseline">
                <span className="shrink-0 w-2 h-2 rounded-full bg-sage translate-y-[-2px]" aria-hidden />
                <span className="font-serif text-[1.55rem] leading-snug text-ink">{n}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ─── The breath: the one moment the page asks you to stop ─── */
const Breath: React.FC = () => {
  const [phase, setPhase] = useState<'in' | 'out'>('in');
  const reduce = useReducedMotion();
  return (
    <section aria-label="A one-breath practice" className="relative bg-forest text-mist overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 md:min-h-[100svh] py-section flex flex-col items-center justify-center text-center">
        <Reveal>
          <p className="font-serif italic text-2xl md:text-[1.75rem] text-mist-2">Try this with me, right now.</p>
        </Reveal>
        <div className="relative w-[min(92vw,720px)] my-10 md:my-14">
          <Rings className="w-full text-mist/80" strokeWidth={1.25} draw breathe glow="#D9957C" onPhase={setPhase} />
          <div className="absolute inset-0 flex items-center justify-center" aria-live="off">
            {reduce ? (
              <p className="font-serif italic text-display-sm text-mist">Breathe in, and out.</p>
            ) : (
              <AnimatePresence mode="wait">
                <motion.p
                  key={phase}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.35 } }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className="font-serif italic text-display-sm text-mist"
                >
                  {phase === 'in' ? 'Breathe in...' : '...and out.'}
                </motion.p>
              </AnimatePresence>
            )}
          </div>
        </div>
        <Reveal delay={0.2}>
          <p className="text-body-lg text-mist-2 max-w-[36rem] mx-auto">
            Small, practical tools like this one - built into your real week - are a big part of how we work together.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ─── Voices: one quote held in focus ─── */
const Voices: React.FC<HomeProps> = ({ setView }) => {
  const [i, setI] = useState(0);
  const t = FEATURED[i];
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  // Arrow keys move between stories (standard tabs pattern); only the selected tab is in the Tab order.
  const onKey = (e: React.KeyboardEvent) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    let next = step === undefined ? -1 : (i + step + FEATURED.length) % FEATURED.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = FEATURED.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setI(next);
    tabs.current[next]?.focus();
  };
  return (
    <section className="bg-forest text-mist border-t border-line-dark">
      <div className="max-w-[1320px] mx-auto px-5 md:px-8 py-section grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-3">
          <h2 className="font-serif italic text-2xl text-mist-2">What clients say</h2>
          <div role="tablist" aria-label="Choose a story" onKeyDown={onKey} className="mt-8 flex lg:flex-col gap-2 flex-wrap">
            {FEATURED.map((f, k) => (
              <button
                key={f.id}
                ref={(el) => {
                  tabs.current[k] = el;
                }}
                id={`story-tab-${k}`}
                role="tab"
                aria-selected={k === i}
                aria-controls="story-panel"
                tabIndex={k === i ? 0 : -1}
                onClick={() => setI(k)}
                className={`text-left rounded-full lg:rounded-sm px-4 py-2.5 text-[0.9375rem] transition-colors duration-feedback ${
                  k === i ? 'bg-mist/10 text-mist' : 'text-mist-2 hover:text-mist'
                }`}
              >
                {cite(f)}
              </button>
            ))}
          </div>
        </div>
        <div
          id="story-panel"
          role="tabpanel"
          aria-labelledby={`story-tab-${i}`}
          tabIndex={0}
          className="lg:col-span-9 min-h-[22rem] md:min-h-[20rem] rounded-sm"
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8, transition: { duration: 0.25 } }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <span className="block font-serif text-[5rem] leading-[0.6] text-clay-glow" aria-hidden>
                &ldquo;
              </span>
              <blockquote className="font-serif text-[1.45rem] leading-[1.36] md:text-[2.35rem] md:leading-[1.25] text-mist">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8 text-mist-2">{cite(t)}</figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-12">
            <Button variant="outline-light" arrow onClick={() => setView('testimonials')}>
              Read all stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Hi, I'm Courtney ─── */
const Intro: React.FC<HomeProps> = ({ setView }) => (
  <section className="py-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <Reveal className="lg:col-span-7">
        <h2 className="font-serif text-display-lg text-ink">
          Hi, I'm{' '}
          <span className="inline-block align-middle w-[0.95em] h-[0.95em] md:w-[1.1em] md:h-[1.1em] rounded-full overflow-hidden mx-1 -translate-y-[0.06em] ring-4 ring-paper shadow-lift">
            <img src="/images/headshot.webp" alt="" className="w-full h-full object-cover object-[50%_21%] scale-[2.1] origin-[50%_21%]" loading="lazy" />
          </span>{' '}
          <em className="text-clay">Courtney.</em>
        </h2>
        <p className="mt-8 font-serif text-[1.65rem] md:text-[1.9rem] leading-[1.35] text-ink max-w-[30ch]">
          My approach is strengths-based and practical. We start with what's already working and build from there, through small steps that fit your lifestyle.
        </p>
        <p className="mt-6 text-body text-ink-2 max-w-[48ch]">
          Every session and tool is based on what works for you.
        </p>
        <p className="mt-4 text-body text-ink-2 max-w-[48ch]">
          Board-certified (NBC-HWC) coach supporting adults and families, bringing experience working alongside
          therapists and psychiatric providers through leading digital health organizations.
        </p>
        <div className="mt-10">
          <Button variant="outline" arrow onClick={() => setView('about')}>
            Meet Courtney
          </Button>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="lg:col-span-5 lg:pt-6">
        <ul className="border-t hairline">
          {[
            ['Board-certified', 'National Board-Certified Health & Wellness Coach (NBC-HWC)'],
            ['Clinical teams', 'Coaching experience through leading digital health organizations, collaborating with licensed pediatric therapists and psychiatric providers'],
            ['Qigong', 'Certified Holden Qigong teacher'],
            ['Writing', 'Author of two books'],
          ].map(([k, v]) => (
            <li key={k} className="grid grid-cols-[8.5rem_1fr] gap-4 py-5 border-b hairline">
              <span className="font-serif italic text-lg text-clay-deep">{k}</span>
              <span className="text-[0.975rem] text-ink-2 leading-relaxed">{v}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  </section>
);

/* ─── Close ─── */
const Close: React.FC<HomeProps> = ({ setView }) => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <div className="relative overflow-hidden rounded-lg bg-clay-wash grain px-6 py-20 md:py-28 text-center">
        <Rings className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(120vw,900px)] text-clay/20 pointer-events-none" strokeWidth={1} breathe />
        <Reveal className="relative">
          <h2 className="font-serif text-display-lg text-ink mx-auto max-w-[16ch]">Not sure what's the best fit?</h2>
          <p className="mt-6 text-body-lg text-ink-2 mx-auto max-w-[32rem]">
            Reach out and I'm happy to talk through what might work for you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button size="lg" arrow onClick={() => setView('contact')}>
              Contact
            </Button>
            <Button size="lg" variant="outline" onClick={() => openExternal(BOOKING_URL)}>
              Book a free chat
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export const Home: React.FC<HomeProps> = ({ setView }) => (
  <div className="overflow-x-clip">
    <Hero setView={setView} />
    <AreasBand />
    <Offerings setView={setView} />
    <Notices />
    <Breath />
    <Voices setView={setView} />
    <Intro setView={setView} />
    <Close setView={setView} />
  </div>
);
