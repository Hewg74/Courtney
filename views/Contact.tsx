import React from 'react';
import { CalendarHeart, Mail } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal, Photo } from '../components/Reveal';
import { CALENDLY_URL, INSTAGRAM_URL, YOUTUBE_URL, openExternal } from '../constants';

/* ─── Page header ─── */
const Header: React.FC = () => (
  <section className="page-top pb-16 md:pb-24">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-end border-b hairline pb-12 md:pb-16">
      <Reveal className="lg:col-span-6">
        <h1 className="font-serif text-display-xl text-ink">
          Get in <em className="text-clay">touch</em>
        </h1>
      </Reveal>
      <Reveal delay={0.15} className="lg:col-span-6">
        <p className="text-body-lg text-ink-2 max-w-[36rem]">
          I'm happy to talk through what might work for you. Reach out to ask a question or book a session.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─── Two ways to reach her: an asymmetric pair, Calendly primary ─── */
const Options: React.FC = () => (
  <section className="py-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
      {/* Book a call - primary */}
      <Reveal delay={0.1} className="lg:col-span-7">
        <div className="h-full flex flex-col rounded-lg bg-forest text-mist grain p-10 md:p-14">
          <CalendarHeart size={30} className="text-clay-glow" strokeWidth={1.25} aria-hidden />
          <h2 className="mt-6 font-serif text-display-sm text-mist">Book a free chat</h2>
          <p className="mt-4 text-[0.9375rem] text-mist-2 leading-relaxed max-w-[40ch] flex-grow">
            A 15-minute intro call to talk about what you're looking for and see if coaching is a good fit.
          </p>
          <div className="mt-8">
            <Button variant="light" size="lg" arrow onClick={() => openExternal(CALENDLY_URL)}>
              Schedule on Calendly
            </Button>
          </div>
        </div>
      </Reveal>

      {/* Email - quieter */}
      <Reveal delay={0.2} className="lg:col-span-5">
        <div className="h-full flex flex-col rounded-lg border border-line-strong p-10 md:p-14">
          <Mail size={30} className="text-clay-deep" strokeWidth={1.25} aria-hidden />
          <h2 className="mt-6 font-serif text-display-sm text-ink">Send an email</h2>
          <p className="mt-4 text-[0.9375rem] text-ink-2 leading-relaxed flex-grow">
            Have a question about coaching, workshops, or Qigong? I'd love to hear from you.
          </p>
          <a
            href="mailto:hello@courtneyalex.com"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-line-strong px-7 py-3.5 min-h-[48px] text-[0.9375rem] font-medium text-ink hover:border-ink hover:bg-paper-2 transition-colors duration-feedback ease-calm"
          >
            hello@courtneyalex.com
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

/* ─── Where she works + a warm photo ─── */
const Where: React.FC = () => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center border-t hairline pt-16 md:pt-20">
      <Reveal className="lg:col-span-7">
        <p className="font-serif text-display-sm text-ink max-w-[22ch]">
          I work with clients <em className="text-clay">virtually worldwide</em> and in person on Maui.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <button
            onClick={() => openExternal(INSTAGRAM_URL)}
            aria-label="Follow Courtney on Instagram"
            className="link-underline text-ink hover:text-clay-deep text-[0.9375rem] font-medium min-h-[44px] inline-flex items-center"
          >
            @courtneyalex_healthcoach
          </button>
          <button
            onClick={() => openExternal(YOUTUBE_URL)}
            aria-label="Watch Courtney on YouTube"
            className="link-underline text-ink hover:text-clay-deep text-[0.9375rem] font-medium min-h-[44px] inline-flex items-center"
          >
            YouTube
          </button>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="lg:col-span-5">
        <Photo
          src="/images/maui.webp"
          alt="Footprints along a quiet Maui beach lined with palm trees"
          radius="28px"
          className="aspect-[4/5] shadow-photo"
        />
      </Reveal>
    </div>
  </section>
);

export const Contact: React.FC = () => (
  <div className="overflow-x-clip">
    <Header />
    <Options />
    <Where />
  </div>
);
