import React from 'react';
import { PlayCircle } from 'lucide-react';
import { Button } from '../components/Button';
import { Reveal } from '../components/Reveal';
import { YOUTUBE_URL, openExternal } from '../constants';
import { ViewState } from '../types';

interface BookProps {
  setView: (view: ViewState) => void;
}

const BOOKS = [
  {
    tag: 'New Release',
    title: "Turning 40 & Other Things We're Not Supposed to Do",
    subtitle: 'Notes on Beauty, Bodies, Renewal, and Becoming More of Ourselves',
    desc: "We all got handed a list at some point. What we should have done by now, how we should look while doing it. This book is about setting the list down. It's honest about bodies and aging and the things we're supposed to keep quiet about, and it's funny, because most of that gets funny once somebody finally says it out loud.",
    cover: 'https://images-na.ssl-images-amazon.com/images/P/B0H9VXSGGV.01.LZZZZZZZ.jpg',
    url: 'https://www.amazon.com/Turning-Other-Things-Were-Supposed-ebook/dp/B0H9VXSGGV?th=1&psc=1&dib=eyJ2IjoiMSJ9.C6F16VSTWjyG8Z9qZKIyuhxunI72PTgYfCCfGz64B1U.mN9N9IkBVefpnYdln9T2saHl7Q4_ATKiOp42gpNQCmQ&dib_tag=AUTHOR',
    tilt: '-rotate-2',
  },
  {
    tag: null,
    title: 'Trust Your Magical Self',
    subtitle: 'How to be Super Psychic, Extra Intuitive, and Love Your Sensitive Soul',
    desc: "The earlier of the two, written for people who feel everything. If you've been told you're too sensitive, or you need a quiet hour after a crowded room, you'll recognize yourself in here. It's a practical book. Ways to settle yourself down, trust your own read on things, and stop soaking up stress that was never yours.",
    cover: 'https://images-na.ssl-images-amazon.com/images/P/B07YWFQ13G.01.LZZZZZZZ.jpg',
    url: 'https://www.amazon.com/Trust-Your-Magical-Self-Intuitive-ebook/dp/B081M6WVDB',
    tilt: 'rotate-2',
  },
];

/* ─── Header ─── */
const Header: React.FC = () => (
  <section className="page-top pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <Reveal>
        <h1 className="font-serif text-display-lg text-ink">
          My <em className="text-clay">Books</em>
        </h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 text-body-lg text-ink-2 max-w-[48ch]">
          Two books. One about getting older and all the rules nobody agreed to. The other about feeling things
          deeply and what to do with that.
        </p>
      </Reveal>
    </div>
  </section>
);

/* ─── One book, one editorial spread ─── */
const BookSpread: React.FC<{ book: (typeof BOOKS)[number]; reverse?: boolean }> = ({ book, reverse }) => (
  <section className="pb-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <Reveal variant="grow" className={`lg:col-span-4 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="relative mx-auto w-[min(60vw,260px)] lg:w-full lg:max-w-[280px]">
            <img
              src={book.cover}
              alt={`${book.title} cover`}
              loading="lazy"
              className={`w-full h-auto rounded-sm shadow-photo transition-transform duration-500 ease-calm ${book.tilt} hover:rotate-0`}
            />
          </div>
        </Reveal>
        <Reveal delay={0.12} className={`lg:col-span-8 ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
          {book.tag && (
            <span className="font-serif italic text-lg text-clay-deep">{book.tag}</span>
          )}
          <h2 className={`font-serif text-display-md text-ink max-w-[18ch] ${book.tag ? 'mt-3' : ''}`}>{book.title}</h2>
          <p className="mt-4 font-serif italic text-xl text-clay">{book.subtitle}</p>
          <p className="mt-6 text-body text-ink-2 max-w-[58ch]">{book.desc}</p>
          <div className="mt-9">
            <Button arrow onClick={() => openExternal(book.url)}>
              Available on Amazon
            </Button>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─── Why I wrote them: a forest band ─── */
const WhyIWroteThem: React.FC = () => (
  <section className="bg-forest text-mist">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 py-section">
      <div className="max-w-[46rem]">
        <Reveal>
          <h2 className="font-serif text-display-md text-mist">
            Why I <em className="text-clay-glow">wrote them</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-8 space-y-6 text-body-lg text-mist-2">
          <p>
            I write for the same reason I coach. It helps to hear that someone else has been through it, and that
            there's something you can actually do about it.
          </p>
          <p>
            Neither book is a plan you have to follow. Take what's useful, leave the rest. If one of them makes a
            hard week feel a little more manageable, that's what I wanted.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

/* ─── Resources: an asymmetric pair ─── */
const Resources: React.FC<BookProps> = ({ setView }) => (
  <section className="py-section">
    <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-8 items-stretch">
      <Reveal className="lg:col-span-7 border-t hairline pt-8">
        <h3 className="font-serif text-display-sm text-ink">The practices, on video</h3>
        <p className="mt-4 text-body text-ink-2 max-w-[46ch]">
          The practices from <em>Trust Your Magical Self</em> are up on my YouTube channel. Guided Qigong, short
          meditations, and simple things to try when you need to settle down.
        </p>
        <button
          onClick={() => openExternal(YOUTUBE_URL)}
          className="link-underline mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-clay-deep"
        >
          <PlayCircle size={17} strokeWidth={1.75} aria-hidden />
          Watch on YouTube
        </button>
      </Reveal>
      <Reveal delay={0.1} className="lg:col-span-5 border-t hairline pt-8">
        <h3 className="font-serif text-display-sm text-ink">Working together</h3>
        <p className="mt-4 text-body text-ink-2 max-w-[38ch]">
          If any of this sounds like your life, coaching or a Qigong class might be a good fit. Same tools, worked
          into your actual week.
        </p>
        <div className="mt-6">
          <Button variant="outline" arrow onClick={() => setView('work-with-me')}>
            Work With Me
          </Button>
        </div>
      </Reveal>
    </div>
  </section>
);

export const Book: React.FC<BookProps> = ({ setView }) => (
  <div className="overflow-x-clip">
    <Header />
    {BOOKS.map((b, i) => (
      <BookSpread key={b.title} book={b} reverse={i % 2 === 1} />
    ))}
    <WhyIWroteThem />
    <Resources setView={setView} />
  </div>
);
