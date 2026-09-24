import React, { useEffect, useState } from 'react';
import { Reveal } from '../components/Reveal';
import { useReducedMotion } from 'framer-motion';

interface PageTestimonial {
  quote: string;
  author: string;
  context?: string;
}

interface TestimonialCategory {
  label: string;
  items: PageTestimonial[];
}

const CATEGORIES: TestimonialCategory[] = [
  {
    label: 'Family & Youth Coaching',
    items: [
      {
        quote: "I didn't used to ask for help at school, even when I was confused. Coaching helped me figure out how I learn best and how to explain that to my teachers. Now I feel more motivated to go to school, and I'm getting better at sticking with the goals we set. It feels good to see that when I practice, things actually change and I sleep better too, get along better with my sister.",
        author: "Anonymous",
        context: "CA"
      },
      {
        quote: "My son is talking to people again. It was hard for us to see him struggling with anxiety to the point of not speaking to anyone but us. Thanks to you, he's discovered how to make small talk, how to prepare for talking to groups at school, and even what helps him feel calm and confident! We're so relieved. And we also notice he learned how to make better choices when choosing friends. Thank you.",
        author: "Anonymous",
        context: "WI"
      },
      {
        quote: "My son was having trouble handling big emotions and it was landing him on the bench instead of on the court. In coaching, he learned how to use his emotions to fuel his game, make changes and improvements where needed. He ended up on a more supportive team for him, understanding how to ask for help, and now he feels like he's growing and working with his emotions in a way he's proud of. The shift in his self-belief has been incredible to witness.",
        author: "Anonymous Parent",
        context: "NY"
      },
      {
        quote: "I came to you with an ADHD daughter who had trouble getting along with her siblings and with us. After six months, she knows what to do when she feels upset, is more helpful around the house, communicating what she needs and why so that we argue less, she is doing well in school, and is calmer overall. She also now sleeps through the night after you helped her figure out what was keeping her up (the bedding!). Overall, she's more confident in who she is and I'm so proud of her! She even figured out her own accountability and scheduling strategies, which we didn't expect!",
        author: "Anonymous",
        context: "NY"
      },
      {
        quote: "My child has often struggled with feeling different and socially awkward due to their ADHD. Through coaching, they've learned so many skills - from learning styles to how to organize their day to laughing at their mistakes which is helping them feel more socially comfortable. I'm seeing my child actually start to love who they are - and they're finding their own solutions more and more. I'm relieved knowing they're moving into adulthood with adult tools, feeling empowered and smiling!",
        author: "Anonymous Parent",
        context: "NJ"
      },
      {
        quote: "I was really anxious about starting college and doubted myself a lot. Coaching helped me feel more balanced and learn how to be my own best friend. I'm sleeping better, spending less time on my phone, getting out more, and saying kind things to myself. Last week I even helped another student who was going through what I did and I was really excited!",
        author: "Anonymous",
        context: "CA"
      },
      {
        quote: "My old baseball coach asked me what I was doing differently. He said that I looked happy now instead of sad and it made me so proud. Now that I know more about who I am and what I like, what kinds of friends feel good to be around, I haven't been as worried. And when I do feel upset, I just grab my favorite book and make myself laugh!",
        author: "Anonymous",
        context: "MN"
      },
      {
        quote: "Since working with you, I have seen a miraculous transformation in my son. Once nearly debilitated by anxiety, he now has confidence and courage and tools to help him curtail negative thoughts and toxic people. He has learned to embrace his unique talents rather than fear or suppress them and pursue a healthy lifestyle that includes organic foods and mindfulness in all things. You have made such a difference in his life! Thank you for all that you do.",
        author: "Kerrie",
        context: "AZ"
      },
      {
        quote: "My daughter is hard at work writing a novel. She has gained a lot from coaching, and I'm amazed to see how her creative expression has blossomed. She's working on her memory, scheduling homework and creative time well, and able to see neurodiversity as a strength. Her relationships are improving. Thanks! We loved your warm coaching style.",
        author: "Anonymous"
      }
    ]
  },
  {
    label: 'Adult Coaching',
    items: [
      {
        quote: "Once I committed to add weight training in my schedule, everything else fell into place! Thank you. It was a pleasure to have you as my coach. I felt you really listened and were able to hear me, respond to where I’m at with no judgement only compassion, you provided gentle guidance, great feedback and helped give me clarity! I was able to stay on track and I appreciated your flexibility as well. I’ve been a therapist for several decades and can feel you are just a natural at this!",
        author: "RL",
        context: "CA"
      },
      {
        quote: "Working with Courtney has led to an amazing amount of habit change around food and movement. I'm eating more intuitively, and I've figured out routines for exercise that work with my body and mind, not against it. I feel so much better and more in control. Courtney holds such a lovely and nonjudgemental space for self-exploration and I really trust her expertise around health and wellbeing. And it's surprising how even small changes ripple out to my wider lifestyle and level of contentment. Thank you Courtney!",
        author: "Lily",
        context: "UK"
      },
      {
        quote: "I started coaching sessions with Courtney unclear what I wanted to accomplish, but we uncovered much more than I was expecting. Her intuitive and collaborative style makes it easeful to get clarity and set goals. I would highly recommend working with Courtney if you want to create new habits that support you on several different levels. Her genuine interest in my progress was evident in her encouragement and non-judgmental approach. Courtney's ability to listen actively and offer constructive feedback created a partnership that felt empowering rather than authoritative.",
        author: "Anonymous"
      },
      {
        quote: "Courtney is incredibly kind and compassionate, and she created a safe space for me where I felt heard and understood. With her guidance, I have learned the importance of breaking down my goals into smaller, manageable steps. This approach has empowered me to make progress each day towards my bigger goals, leading to tangible improvements in various aspects of my life.",
        author: "Rachel",
        context: "Toronto, ON"
      },
      {
        quote: "[After our Health Coaching sessions] I'm doing better. I know what to do now\u2026Thank you again for your help. It really helped to have someone to talk to and help me reflect on what to do. The answers were there, I was just too close to the waterfall to hear it.",
        author: "Rona B",
        context: "HI"
      },
      {
        quote: "On the eve of a quiet, COVID Thanksgiving, I was just thinking about how differently I feel emotionally about this situation I've often found myself in. I feel fine. Good! Totally at peace and not wishing or wanting for anything else, anything different. I then wondered when and how this shift took place. And I really believe it is the result of the work we did together this summer. I just wanted to extend a thanks and gratitude\u2026 Thank you!!! Sending love and light!",
        author: "A."
      },
      {
        quote: "Thank you so much for your beautiful words, they really moved me when I read them after our session. I really feel an energy shift and a change of perspective, so I am very grateful. Take care and talk soon.",
        author: "Leilah",
        context: "Spain"
      },
      {
        quote: "I've been doing the action items we discussed and have been having a good sleep week! Thank you!",
        author: "Anonymous"
      },
      {
        quote: "Dear Courtney, I just wanted to THANK YOU THANK YOU THANK YOU for the session yesterday\u2026 you have no idea how much you helped.",
        author: "M.",
        context: "NY"
      }
    ]
  },
  {
    label: 'Workshops & Professional Collaboration',
    items: [
      {
        quote: "That was wonderful today :)) I loved it! You are amazing! I really enjoyed the way you structured the presentation of the material. It was approachable with multiple avenues for accessing the core of the content: imagery, philosophy, movement, felt sense work, and discussion.",
        author: "Student Support Director",
        context: "Maui, HI"
      },
      {
        quote: "Courtney was a joy to work with - she was diligent in her work and really cared about the families she served. Not only was she a thoughtful coach but a skilled one. Whenever she had a question, she would seek support and feedback in an open minded way allowing her to continuously grow in her craft.",
        author: "Jess S",
        context: "Former Coaching Manager"
      },
      {
        quote: "You have such a gift for listening with presence, and teaching in a clear, concise and gentle way. You make way out inexplicable things really accessible and normal (no small feat!). I've had important aha moments from every class. Your thoughtful responses to everyone wherever they were at was so encouraging, and I feel like you created a really safe space for us to move through whatever came up in a gentle, nurturing way.",
        author: "Rebekah",
        context: "CA"
      },
      {
        quote: "You gave clear, easy for a beginner to follow instructions, even with experienced practitioners in the class. I felt that we went somewhere together. The whole experience was uplifting and life affirming.",
        author: "David",
        context: "CA"
      },
      {
        quote: "[After our workshop] I cleaned the room and added air purifier, blue colors and intentional grid and through last days I sleep much better and waking up more energized and in peace. All works well. Thank you so much to you and your wonderful spirit who’s showing the way of light and support and care and love and open heart. Deeply grateful sending you blessings and love from my heart to yours!",
        author: "Oksana",
        context: "SF"
      },
      {
        quote: "Incredible workshop Courtney - your skills, experience, and voice grounded me and gave me some fresh tools to access my own wisdom. Wise woman!",
        author: "Ana",
        context: "CA"
      }
    ]
  },
  {
    label: 'Qigong',
    items: [
      {
        quote: "I definitely want you to know that I checked my blood pressure after our session and it was down significantly into the range I want it to be. Wonderful!! And pretty cool. Thanks as always and have a beautiful week.",
        author: "Nick B",
        context: "IL"
      },
      {
        quote: "After practicing Qigong with you for over a year now, two interesting things happened recently: I went to my chiropractor and she described my neck and shoulders as 'buoyant', my spine as 'that of a young person'. That is so different from what my chiropractor used to say about my spine\u2026 The chiro also noted that when I first started seeing her, I didn't have a cervical curve likely through poor posture and my accident, but now the healthy cervical curve is back. I also went to my PT and showed her an exercise you gave me\u2026 She said it was the perfect exercise\u2026 and would even show it to other patients. Very cool!",
        author: "JC",
        context: "HI"
      },
      {
        quote: "I've been having low-back pain for years consistently. After my first Qigong class with you, it was gone and I was pain-free for the first time in so long! I couldn't believe! Thank you for your classes, I will keep practicing :)",
        author: "M",
        context: "HI"
      },
      {
        quote: "Courtney, Thank you for one more class with great results. Today, I started the class with very achy, stiff shoulders and upper back\u2026 Less than half way into the practice, my shoulders had eased and the pain completely dissolved. I couldn't relate it to any specific movement, but it worked, like magic!",
        author: "KE",
        context: "AZ"
      },
      {
        quote: "Courtney, an amazing class. My shoulders were so tense, but now they're so calm after class! Today started out feeling weighed down and overwhelmed\u2026 I needed mental clarity. You really delivered.",
        author: "Kaitlin",
        context: "AZ"
      },
      {
        quote: "Thank you for alleviating the back issue I've been having for three days. When we first started turning to the left with our hands toward our chest/heart I could feel immense limitation diagonally across my back. With each repetition I felt easing. I'm back to normal.",
        author: "Anonymous"
      },
      {
        quote: "It's wonderful to have the tape and a printed version of the movements. I did them this morning before getting out of bed and during the day when I felt anxious. Very helpful and I'm very hopeful the practice is going to help me a lot. I'm looking forward to class on Wednesday. Thank you!!",
        author: "K",
        context: "HI"
      },
      {
        quote: "I just caught a look at my face in the mirror. Inner smile for outer glow. I cannot believe this result. It's truly transformational!",
        author: "KA",
        context: "CA"
      },
      {
        quote: "I wanted to thank you for helping to lift me out of depression. I came to your classes several months ago on Maui and had a major breakthrough afterwards about the changes I needed to make in my life. Since then, I've worked out a lot\u2026I feel so different and so much like I'm on the right track.",
        author: "Anonymous"
      }
    ]
  },
  {
    label: 'Books',
    items: [
      {
        quote: "Courtney it was such a relief to read through this table of contents it addresses so many things I’ve been grappling with and have been curious about forever. I’m excited to get deeper in to understanding how to work with everything. I’m only barely into ch 1 but your writing is so fun to read also!! Thank you again!!",
        author: "Zoe",
        context: "CO"
      },
      {
        quote: "I finished your book beautifully written and so grateful I found it\u2026 Thank you Courtney for sharing your story and creating language for me about all the magic (synchronicities) that exists.",
        author: "AJ",
        context: "CA"
      },
      {
        quote: "I am enjoying reading your book. You demonstrate such wisdom and you do it in a warm friendly manner. It's as if you are sitting chatting with a friend. I am also learning a lot too. You did a great job!!",
        author: "Sandra",
        context: "Canada"
      },
      {
        quote: "Hey Courtney I just wanted to tell you: I started reading your book the other day and it inspired me to change up my morning routines from eating breakfast and watching an hour of TV, to going outside and eating breakfast and reading more of this lovely book over coffee. So thank you for writing it :)",
        author: "Venesa",
        context: "Germany"
      },
      {
        quote: "I wanted to let you know I received the gift of your book and it's been an enormous aid in my life. I have used it a great deal in various aspects of my life. I'm grateful to have your book in my possession. I hope you will continue to bring that insight to the world. Thank you so much for what you have provided to me personally.",
        author: "R",
        context: "AZ"
      },
      {
        quote: "Courtney, just a quick note to say thank you for sharing the first part of your book - I'm really moved, full of tears, belief, disbelief, confusion, and a bit of warmth too, thank you!",
        author: "Christine",
        context: "UK"
      },
      {
        quote: "I read the first chapter of your book that you had offered as a free download a while back - it's soo good!!! I usually don't like to read things on a computer but I actually might make an exception for this one since it's so good :)",
        author: "Tiffany",
        context: "CA"
      },
      {
        quote: "I love your words, Courtney, and I read them in your voice. This book found me in my late thirties and celebrating many friends’ 40th’s this year. I love the title - it has felt taboo to talk about many of the honest things this book discusses and it has certainly felt “wrong” by society to be a woman and to age. So much fear mongering. I remember being younger and being told that those were the best years of our lives and yet I find that I’m having more fun with each decade; and I look to women in their 60s, 70s, and 80s and see so much wisdom and life. I know if we have the privilege of living long that we will look back and think that 40 was infancy.\n\nThere are many lines in this book that I highlighted and resonate with. I really love the part about you becoming more of your whole self and deeply appreciating those wisdom our bodies provide us. Embodiment. I love this and hope you continue to write and share.",
        author: "Sarafina",
        context: "AZ"
      }
    ]
  }
];

const cite = (t: PageTestimonial) => (t.context ? `${t.author}, ${t.context}` : t.author);
const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const Category: React.FC<{ cat: TestimonialCategory }> = ({ cat }) => {
  const [standout, ...rest] = cat.items;
  return (
    <section id={slugify(cat.label)} data-category className="scroll-mt-36 lg:scroll-mt-32 pt-12 md:pt-16 first:pt-0 pb-12 md:pb-20 border-b hairline last:border-b-0">
      <Reveal>
        <h2 className="font-serif text-display-md text-ink">{cat.label}</h2>
      </Reveal>
      {standout && (
        <Reveal delay={0.08} className="mt-9 max-w-[65ch] border-t hairline pt-9">
          <blockquote className="font-serif text-[1.45rem] leading-[1.36] md:text-display-sm md:leading-snug text-ink whitespace-pre-line">{standout.quote}</blockquote>
          <p className="mt-5 text-[0.9375rem] text-ink-2">{cite(standout)}</p>
        </Reveal>
      )}
      <ul className="mt-12 columns-1 md:columns-2 gap-x-12">
        {rest.map((t, i) => (
          <Reveal
            as="li"
            key={i}
            delay={Math.min(i * 0.04, 0.32)}
            className="list-none break-inside-avoid mb-9 pb-9 border-t hairline pt-9 max-w-[65ch]"
          >
            <blockquote className="font-serif text-[1.18rem] leading-[1.5] md:text-[1.3rem] text-ink whitespace-pre-line">{t.quote}</blockquote>
            <p className="mt-4 text-[0.9375rem] text-ink-2">{cite(t)}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
};

// Jump to a category, clearing the fixed header.
const jumpTo = (label: string, smooth: boolean) => {
  document.getElementById(slugify(label))?.scrollIntoView({ behavior: smooth ? 'smooth' : 'auto', block: 'start' });
};

export const Testimonials: React.FC = () => {
  const [active, setActive] = useState(slugify(CATEGORIES[0].label));
  const smooth = !useReducedMotion();

  // Track which category is being read, for the index highlight.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    document.querySelectorAll('[data-category]').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Keep the highlighted chip visible in the phone bar (horizontal only; never moves the page).
  useEffect(() => {
    const chip = document.querySelector<HTMLElement>(`[data-chip="${active}"]`);
    const bar = chip?.parentElement; // the scrolling <ul>
    if (!chip || !bar) return;
    const left = chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2;
    bar.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
  }, [active, smooth]);

  return (
    <div className="overflow-x-clip">
      <section className="page-top pb-10 md:pb-20">
        <div className="max-w-[1320px] mx-auto px-5 md:px-8">
          <Reveal>
            <p className="font-serif italic text-lg text-clay-deep">Testimonials</p>
            <h1 className="mt-3 font-serif text-display-lg text-ink">
              What clients <em className="text-clay">say</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Phones: a swipeable category bar that stays just under the header. */}
      <nav aria-label="Categories" className="lg:hidden sticky top-[72px] z-30 -mt-2 mb-8 bg-paper/90 backdrop-blur-md border-y hairline">
        <ul className="relative flex gap-2 overflow-x-auto no-scrollbar px-5 py-3 [mask-image:linear-gradient(90deg,#000_85%,transparent)]">
          {CATEGORIES.map((c) => {
            const on = active === slugify(c.label);
            return (
              <li key={c.label} data-chip={slugify(c.label)} className="shrink-0">
                <button
                  onClick={() => jumpTo(c.label, smooth)}
                  aria-current={on ? 'true' : undefined}
                  className={`whitespace-nowrap rounded-full px-4 min-h-[40px] text-[0.9rem] transition-colors duration-feedback ${
                    on ? 'bg-ink text-paper' : 'bg-paper-3 text-ink-2'
                  }`}
                >
                  {c.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <section className="pb-section">
        <div className="max-w-[1320px] mx-auto px-5 md:px-8 grid lg:grid-cols-12 gap-12 lg:gap-16">
          <nav aria-label="Categories" className="hidden lg:block lg:col-span-3">
            <ul className="lg:sticky lg:top-32 border-t hairline pt-6 space-y-1">
              {CATEGORIES.map((c) => (
                <li key={c.label}>
                  <button
                    onClick={() => jumpTo(c.label, smooth)}
                    aria-current={active === slugify(c.label) ? 'true' : undefined}
                    className={`flex items-center gap-3 py-2 text-left text-[0.9375rem] transition-colors duration-feedback ${
                      active === slugify(c.label) ? 'text-ink' : 'text-ink-2 hover:text-clay-deep'
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                        active === slugify(c.label) ? 'bg-clay' : 'bg-transparent'
                      }`}
                      aria-hidden
                    />
                    {c.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:col-span-9">
            {CATEGORIES.map((cat) => (
              <Category key={cat.label} cat={cat} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
