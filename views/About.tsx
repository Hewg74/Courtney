import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal, Photo } from '../components/Reveal';
import { Rings } from '../components/Rings';
import { ViewState } from '../types';
import { BOOKING_URL, openExternal } from '../constants';

interface AboutProps {
  setView: (view: ViewState) => void;
}

const APPROACH: { title: string; desc: string }[] = [
  {
    title: 'Strengths-Based',
    desc: 'Every person has something working well. We build from there by working with your strengths, interests, and learning style.',
  },
  {
    title: 'Mind & Body',
    desc: "Mind, body, and heart. Because we don't experience life in separate compartments, coaching can include embodied tools when they're a fit.",
  },
  {
    title: 'Evidence-Informed',
    desc: 'Grounded in research and best practices but always flexible. What works for your life is what matters.',
  },
  {
    title: 'Family-Centered',
    desc: "The whole family matters. Parents are always part of the conversation since that's often where the biggest shifts happen.",
  },
  {
    title: 'Individualized',
    desc: "There's no scripted method. Your plan is built around your goals, your life, and what's already working.",
  },
  {
    title: 'Positive & Encouraging',
    desc: "We focus on what's going right. By amplifying the positive and building on small wins, we create momentum for lasting change.",
  },
];

const TRAINING_COL_1 = [
  <>
    <strong>National Board-Certified Health &amp; Wellness Coach</strong> (NBC-HWC)
  </>,
  <>Additional training in pediatric coaching</>,
  <>
    Coaching experience through leading digital health organizations, collaborating with licensed pediatric
    therapists and psychiatric providers
  </>,
];

const TRAINING_COL_2 = [
  <>
    Former Faculty at <strong>Lumeria Maui Retreat Center</strong> &amp; <strong>Maui Academy of Healing Arts</strong>
  </>,
  <>Children's literacy programs at 826Valencia &amp; Reading Partners; Tutoring kids of all ages at Education Therapy</>,
  <>Certified Holden Qigong Teacher</>,
  <>
    Author of <em>Turning 40 &amp; Other Things We're Not Supposed to Do</em> and <em>Trust Your Magical Self</em>
  </>,
];

const BOOKS = [
  {
    title: "Turning 40 & Other Things We're Not Supposed to Do",
    subtitle: 'Notes on Beauty, Bodies, Renewal, and Becoming More of Ourselves',
    cover: 'https://images-na.ssl-images-amazon.com/images/P/B0H9VXSGGV.01.LZZZZZZZ.jpg',
    url: 'https://www.amazon.com/Turning-Other-Things-Were-Supposed-ebook/dp/B0H9VXSGGV?th=1&psc=1&dib=eyJ2IjoiMSJ9.C6F16VSTWjyG8Z9qZKIyuhxunI72PTgYfCCfGz64B1U.mN9N9IkBVefpnYdln9T2saHl7Q4_ATKiOp42gpNQCmQ&dib_tag=AUTHOR',
  },
  {
    title: 'Trust Your Magical Self',
    subtitle: 'How to be Super Psychic, Extra Intuitive, and Love Your Sensitive Soul',
    cover: 'https://images-na.ssl-images-amazon.com/images/P/B07YWFQ13G.01.LZZZZZZZ.jpg',
    url: 'https://www.amazon.com/Trust-Your-Magical-Self-Intuitive-ebook/dp/B081M6WVDB',
  },
];

/* ─── Intro: Hi, I'm Courtney ─── */
const Intro: React.FC = () => (
  <section className="page-top pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      <Reveal variant="grow" className="lg:col-span-5">
        <Photo
          src="/images/courtney-pose.webp"
          alt="Courtney in a Qigong stance in a garden at golden hour"
          priority
          radius="28px"
          className="aspect-[4/5] shadow-photo"
        />
      </Reveal>
      <div className="lg:col-span-7">
        <Reveal>
          <h1 className="font-serif text-display-lg text-ink">
            Hi, I'm <em className="text-clay">Courtney.</em>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 font-serif text-[1.5rem] md:text-[1.75rem] leading-[1.4] text-ink">
            I'm a Board-Certified Health &amp; Wellness Coach (NBC-HWC) and long-time Qigong teacher. I've spent
            years working alongside licensed therapists and psychiatric providers, supporting families and
            individuals through anxiety, ADHD, stress, and daily overwhelm.
          </p>
        </Reveal>
        <Reveal delay={0.18} className="mt-6 space-y-5 text-body text-ink-2 max-w-[52ch]">
          <p>
            My approach is individualized, strengths-based, and built on what's already working in your life. I
            help people figure out small, practical shifts that actually stick, through tools that fit your
            lifestyle.
          </p>
          <p>
            I've worked at organizations like Education Therapy, 826 Valencia, and Reading Partners, and as
            faculty at Lumeria Maui Retreat Center. I'm also the author of{' '}
            <em>Turning 40 &amp; Other Things We're Not Supposed to Do</em> and <em>Trust Your Magical Self</em>.
          </p>
          <p>
            When I'm not coaching, you’ll probably find me in the garden, painting, drawing, or learning something
            new about health!
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─── How I work ─── */
const HowIWork: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <Reveal>
        <h2 className="font-serif text-display-md text-ink">
          How I <em className="text-clay">work</em>
        </h2>
      </Reveal>
      <ul className="mt-12 grid sm:grid-cols-2 border-t hairline">
        {APPROACH.map((item, i) => (
          <Reveal
            as="li"
            key={item.title}
            delay={i * 0.08}
            className={`py-8 border-b hairline sm:pr-10 ${i % 2 === 0 ? 'sm:border-r sm:pr-10' : 'sm:pl-10'}`}
          >
            <h3 className="font-serif text-display-sm text-ink">{item.title}</h3>
            <p className="mt-3 text-body text-ink-2 max-w-[38ch]">{item.desc}</p>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

/* ─── Experience & Training ─── */
const Training: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
      <Reveal className="lg:col-span-4">
        <h2 className="font-serif text-display-md text-ink">
          Experience &amp; <em className="text-clay">training</em>
        </h2>
      </Reveal>
      <div className="lg:col-span-8 grid sm:grid-cols-2 gap-x-12">
        {[TRAINING_COL_1, TRAINING_COL_2].map((col, ci) => (
          <ul key={ci} className="border-t hairline">
            {col.map((item, i) => (
              <Reveal as="li" key={i} delay={i * 0.06} className="py-5 border-b hairline text-[0.975rem] text-ink-2 leading-relaxed">
                {item}
              </Reveal>
            ))}
          </ul>
        ))}
      </div>
    </div>
  </section>
);

/* ─── Books, lighter ─── */
const BooksRow: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <Reveal>
        <h2 className="font-serif text-display-md text-ink">
          My <em className="text-clay">books</em>
        </h2>
      </Reveal>
      <ul className="mt-10 grid sm:grid-cols-2 border-t hairline">
        {BOOKS.map((b, i) => (
          <Reveal
            as="li"
            key={b.title}
            delay={i * 0.08}
            className={`list-none flex items-center gap-6 py-8 border-b hairline ${i === 0 ? 'sm:border-r sm:pr-10' : 'sm:pl-10'}`}
          >
            <img src={b.cover} alt={`${b.title} cover`} loading="lazy" className="w-16 h-24 object-cover rounded-sm shadow-lift shrink-0" />
            <div>
              <h3 className="font-serif text-xl text-ink leading-snug max-w-[24ch]">{b.title}</h3>
              <p className="mt-1 font-serif italic text-[1.05rem] text-clay-deep leading-snug max-w-[34ch]">{b.subtitle}</p>
              <a
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-3 inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-clay-deep"
              >
                View on Amazon
                <ArrowUpRight size={15} strokeWidth={1.75} aria-hidden />
              </a>
            </div>
          </Reveal>
        ))}
      </ul>
    </div>
  </section>
);

/* ─── Maui photo moment ─── */
const MauiMoment: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <div className="relative">
        <Photo
          src="/images/maui.webp"
          alt="Footprints along a quiet Maui beach lined with palm trees"
          radius="28px"
          drift={48}
          pos="center 62%"
          className="aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] shadow-photo"
        />
        <Reveal delay={0.6} variant="fade" width="fit-content" className="absolute -bottom-5 left-5 sm:left-10">
          <div className="rounded-md bg-paper-2 shadow-lift px-5 py-3.5">
            <p className="font-serif italic text-lg text-ink">Mind &bull; Body &bull; Heart</p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─── CTA ─── */
const Close: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <div className="relative overflow-hidden rounded-lg bg-clay-wash grain px-6 py-20 md:py-28 text-center">
        <Rings
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(120vw,900px)] text-clay/20 pointer-events-none"
          strokeWidth={1}
          breathe
        />
        <Reveal className="relative">
          <h2 className="font-serif text-display-lg text-ink">Let's talk.</h2>
          <p className="mt-6 text-body-lg text-ink-2 mx-auto max-w-[32rem]">
            Book a free 15-minute chat to see if coaching is a good fit.
          </p>
          <div className="mt-10 flex justify-center">
            <Button size="lg" arrow onClick={() => openExternal(BOOKING_URL)}>
              Book a Free Chat
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export const About: React.FC<AboutProps> = () => (
  <div className="overflow-x-clip">
    <Intro />
    <HowIWork />
    <Training />
    <BooksRow />
    <MauiMoment />
    <Close />
  </div>
);
