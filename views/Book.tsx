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
    desc: "Turning forty arrived with unexpected questions. My confidence was being tested. And somewhere between hormones, headaches, grief, joy, sleeplessness, and learning to trust myself again, I discovered that this season of life wasn’t about becoming less than before.",
    cover: 'https://images-na.ssl-images-amazon.com/images/P/B0H9VXSGGV.01.LZZZZZZZ.jpg',
    url: 'https://www.amazon.com/Turning-Other-Things-Were-Supposed-ebook/dp/B0H9VXSGGV?th=1&psc=1&dib=eyJ2IjoiMSJ9.C6F16VSTWjyG8Z9qZKIyuhxunI72PTgYfCCfGz64B1U.mN9N9IkBVefpnYdln9T2saHl7Q4_ATKiOp42gpNQCmQ&dib_tag=AUTHOR',
    tilt: '-rotate-2',
  },
  {
    tag: null,
    title: 'Trust Your Magical Self',
    subtitle: 'How to be Super Psychic, Extra Intuitive, and Love Your Sensitive Soul',
    desc: "This reflective, experience-based guide is written for highly sensitive and intuitive people who want to embrace their gifts as strengths rather than struggles. Through personal stories, illustrations, guided exercises, and space for reflection, Courtney Alex Aldor shares tools that helped her navigate sensitivity and intuition in daily life. Readers often describe the book as supportive, validating, and “like talking to a friend.”",
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

export const Book: React.FC<BookProps> = ({ setView }) => (
  <div className="overflow-x-clip">
    <Header />
    {BOOKS.map((b, i) => (
      <BookSpread key={b.title} book={b} reverse={i % 2 === 1} />
    ))}
  </div>
);
