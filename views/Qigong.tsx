import React from 'react';
import { Play } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal, Photo } from '../components/Reveal';
import { YOUTUBE_URL, openExternal } from '../constants';

/* ─── Page header ─── */
const Header: React.FC = () => (
  <section className="page-top pb-16 md:pb-24">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-end border-b hairline pb-12 md:pb-16">
      <Reveal className="lg:col-span-6">
        <h1 className="font-serif text-display-xl text-ink">
          Qigong with <em className="text-clay">Courtney</em>
        </h1>
      </Reveal>
      <Reveal delay={0.15} className="lg:col-span-6">
        <p className="text-body-lg text-ink-2 max-w-[38rem]">
          Qigong (pronounced CHEE-gong) is a gentle mind-body practice that combines slow movement, breathwork, and
          meditation. Think of it as a moving meditation that helps release tension and stress from the body and
          quiet the mind.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─── Big photo with a YouTube play overlay ─── */
const VideoPhoto: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <Reveal>
        <div className="relative">
          <Photo
            src="/images/qigong-eyes-closed.webp"
            alt="Courtney practicing Qigong outdoors with her eyes closed"
            radius="28px"
            className="aspect-[16/9] shadow-photo"
          />
          <a
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Qigong videos on YouTube"
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-paper/90 flex items-center justify-center shadow-lift transition-transform duration-feedback ease-calm group-hover:scale-105">
              <Play size={26} className="text-forest ml-1" fill="currentColor" strokeWidth={0} aria-hidden />
            </span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── One class, one editorial row: description + facts, not a glass card ─── */
interface ClassRowProps {
  kicker: string;
  title: string;
  desc: React.ReactNode;
  facts: [string, React.ReactNode][];
  callout?: { label: string; value: string; sub: string };
  note?: string;
  delay?: number;
}

const ClassRow: React.FC<ClassRowProps> = ({ kicker, title, desc, facts, callout, note, delay = 0 }) => (
  <Reveal delay={delay} className="border-t hairline py-10 md:py-12 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
    <div className="lg:col-span-7">
      <p className="font-serif italic text-lg text-clay-deep">{kicker}</p>
      <h3 className="mt-2 font-serif text-display-sm text-ink">{title}</h3>
      <div className="mt-4 text-[0.9375rem] text-ink-2 leading-relaxed max-w-[52ch] space-y-3">{desc}</div>
      {callout && (
        <div className="mt-6 inline-flex flex-wrap items-baseline gap-x-3 gap-y-1 rounded-md bg-clay-wash px-5 py-3">
          <span className="font-serif italic text-clay-deep">{callout.label}</span>
          <span className="font-serif text-lg text-ink">{callout.value}</span>
          <span className="text-[0.8125rem] text-ink-2">{callout.sub}</span>
        </div>
      )}
    </div>
    <dl className="lg:col-span-5 text-[0.9375rem] space-y-3 lg:border-l hairline lg:pl-10">
      {facts.map(([k, v]) => (
        <div key={k} className="flex gap-4 justify-between">
          <dt className="font-medium text-ink shrink-0">{k}</dt>
          <dd className="text-ink-2 text-right">{v}</dd>
        </div>
      ))}
      {note && <p className="text-[0.8125rem] text-ink-2 text-right pt-1">{note}</p>}
    </dl>
  </Reveal>
);

const ClassesSection: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <ClassRow
        kicker="Weekly group class"
        title="Chi Energy Flow"
        desc={
          <p>
            A classic mind-body movement practice to ease tension and stress from mind, body, and heart. All levels
            are welcome, and no experience is needed.
          </p>
        }
        facts={[
          ['When', 'Every Tuesday, 7:30-8:30 PM'],
          [
            'Where',
            <a
              key="fuzion"
              href="https://www.fuzionfit.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-clay-deep hover:text-clay"
            >
              FuzionFit Maui
            </a>,
          ],
          ['Rate', '$25 drop-in or included in gym membership'],
        ]}
        delay={0}
      />

      <ClassRow
        kicker="Monthly group class"
        title="Chi Energy Flow"
        desc={
          <>
            <p>
              Join our monthly community practice. Feel free to stay for a delicious farm-to-table brunch or dinner
              after class, or simply come to move!
            </p>
            <p className="italic text-clay-deep">
              *Note: In September I am offering a special 1-hour workshop focused entirely on sleep in place of my
              regular movement flow.
            </p>
          </>
        }
        callout={{ label: 'Next class', value: 'Sept 25th', sub: 'Join us for our next gathering!' }}
        facts={[
          ['When', 'Monthly (Sun 9am or Fri 4:30pm)'],
          [
            'Where',
            <a
              key="moku"
              href="https://www.mokuroots.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-clay-deep hover:text-clay"
            >
              Moku Roots Maui
            </a>,
          ],
          ['Rate', 'By Donation'],
        ]}
        delay={0.06}
      />

      <ClassRow
        kicker="Private & semi-private"
        title="Custom Sessions"
        desc={
          <p>
            Sessions are tailored for you and can be held online via Zoom or in person on Maui's North Shore. Offered
            1:1 or for small groups.
          </p>
        }
        facts={[
          ['Rate', '$110 / 60-min (up to 5 people)'],
          ["Add'l", '+$15 per extra person'],
        ]}
        note="Hawaii GE Tax applies"
        delay={0.12}
      />
    </div>
  </section>
);

/* ─── YouTube CTA ─── */
const YouTubeCTA: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <div className="rounded-lg bg-paper-2 grain px-6 py-16 md:px-16 md:py-20 text-center">
        <Reveal>
          <h2 className="font-serif text-display-sm text-ink">Try a class at home</h2>
          <p className="mt-4 text-body text-ink-2 max-w-xl mx-auto">
            Check out my YouTube channel for free Qigong classes you can follow along with anytime.
          </p>
          <div className="mt-8">
            <Button variant="outline" arrow onClick={() => openExternal(YOUTUBE_URL)}>
              Watch on YouTube
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─── Email CTA ─── */
const EmailCTA: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 text-center">
      <Reveal>
        <p className="text-body-lg text-ink-2 max-w-[36rem] mx-auto">
          Questions about classes? Want to book a private session or retreat?
        </p>
        <a
          href="mailto:hello@courtneyalex.com"
          className="link-underline mt-6 inline-block font-serif text-2xl text-ink hover:text-clay-deep transition-colors duration-feedback"
        >
          hello@courtneyalex.com
        </a>
      </Reveal>
    </div>
  </section>
);

export const Qigong: React.FC = () => (
  <div className="overflow-x-clip">
    <Header />
    <VideoPhoto />
    <ClassesSection />
    <YouTubeCTA />
    <EmailCTA />
  </div>
);
