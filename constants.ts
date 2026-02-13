import { Testimonial, Service } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Since working with Courtney, I have seen a miraculous transformation in my son. Once nearly debilitated by anxiety, he now has confidence and courage and tools to help him curtail negative thoughts. He has learned to embrace his unique talents rather than fear or suppress them. You have made such a difference in his life!",
    author: "Kerrie",
    context: "Arizona"
  },
  {
    id: '2',
    quote: "After six months, she knows what to do when she feels upset, is more helpful around the house, communicating what she needs and why so that we argue less. She is doing well in school, calmer overall, and more confident in who she is. I'm so proud of her!",
    author: "Parent of a child with ADHD",
    context: "Family Coaching"
  },
  {
    id: '3',
    quote: "After our coaching sessions I'm doing better. I know what to do now. It really helped to have someone to talk to and help me reflect on what to do. The answers were there, I was just too close to the waterfall to hear it.",
    author: "Rona B.",
    context: "Hawaii"
  },
  {
    id: '4',
    quote: "Courtney has the ability to direct you gently to self-reflection so you can accomplish your goals. She creates an environment of safety, trust, and empowerment.",
    author: "Client",
    context: "Parent Coaching"
  },
  {
    id: '5',
    quote: "Someone who actually understood my kid — not just the behavior, but who they are underneath it. That changed everything.",
    author: "Parent",
    context: "San Francisco"
  }
];

export const SERVICES: Service[] = [
  {
    title: "1-on-1 Coaching",
    description: "Personalized guidance and strategies for stress relief. Coaching puts you in the driver's seat — we focus on your strengths and build on what you're already doing well, through small manageable steps.",
    price: "$500 (6-session package)",
    features: ["Bi-weekly 30-min sessions", "Parent support included", "Customized toolkit"]
  },
  {
    title: "The Calm Kid Program",
    description: "A structured 8-week program for kids dealing with anxiety, ADHD, or overwhelm. Week by week, we build practical tools your child can actually use.",
    price: "$1,200 (8-week program)",
    features: ["8 weekly 1-on-1 sessions", "Parent check-ins included", "Personalized toolkit"]
  },
  {
    title: "Workshops",
    description: "Interactive workshops that help families learn skills like emotional regulation, communication, and stress resilience — plus mind-body exercises (that your kiddo might actually try!).",
    price: "Custom",
    features: ["Online or In-Person", "For Schools & Parent Groups", "Communication & Stress Resilience"]
  }
];

export interface CaseStudy {
  id: string;
  title: string;
  situation: string;
  work: string;
  outcome: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: "From Debilitating Anxiety to Sleeping Through the Night",
    situation: "A 10-year-old with severe anxiety was unable to sleep alone and experienced daily panic about school.",
    work: "We built a bedtime ritual using body-scan techniques and shifted the focus from 'fixing' the anxiety to understanding what it was telling us.",
    outcome: "Sleeping through the night by week 6. School attendance is regular, and the child now has a specific 'reset' button they use independently."
  },
  {
    id: '2',
    title: "The 'Too Much' Teenager",
    situation: "A 15-year-old creative felt overwhelmed by the world's noise and their own big emotions, leading to shutdown.",
    work: "We helped them find language for their emotions and built practical tools for managing overwhelm — including breath and movement techniques.",
    outcome: "The teen now articulates their needs ('I need 10 mins of quiet') instead of shutting down. Improved relationship with parents."
  },
  {
    id: '3',
    title: "ADHD & The Bedtime Battle",
    situation: "A bright, high-energy 7-year-old could not wind down. Evenings were a 3-hour war zone.",
    work: "Introduced 'energy discharge' movement before the calm-down routine. Shifted parent language from command to connection.",
    outcome: "Bedtime is now 45 minutes and connection-focused. The child uses the word 'regulation' to describe their state."
  },
  {
    id: '4',
    title: "The Stressed Mom",
    situation: "A mother felt her child's behavior was a reflection of her failing. High stress in the home loop.",
    work: "Focused on mom's stress and calm first — the oxygen mask principle.",
    outcome: "Mom's calm became the anchor. As she relaxed, the child's behavioral spikes decreased in intensity and duration."
  }
];

export const FAQ_ITEMS = [
  {
    q: "Who do you work with?",
    a: "I work with children (ages 6-17), teens, adults, and their families. I specialize in working with kids dealing with anxiety, ADHD, stress, sleep challenges, and communication issues — and the parents who want real tools to support them."
  },
  {
    q: "What is mental wellness coaching and how is it different from therapy?",
    a: "Coaching is future-focused and action-oriented. It can work as a stand-alone service or complement therapy and/or psychiatry by helping you build skills, habits, and strategies. Coaches don't diagnose or treat mental health conditions. Many of my clients also see a therapist, and the two work really well together."
  },
  {
    q: "Do I have to practice qigong if I work with you?",
    a: "No. While I teach Qigong and may offer it as a tool, coaching sessions and workshops are tailored to each client. You choose the methods that feel right for you."
  },
  {
    q: "What does a typical session look like?",
    a: "Sessions are 30 minutes, online. We check in on the week's wins and challenges, learn a new tool or concept (like 'The Stress Thermometer' or 'Box Breathing'), and agree on a small experiment to try before the next session."
  },
  {
    q: "How long do families typically work with you?",
    a: "The initial engagement is often a 6-session package over 3 months. Many families choose to continue with monthly maintenance sessions or rejoin for specific transitions (like starting a new school year)."
  },
  {
    q: "Do you work with the parents or the child?",
    a: "Both. For younger children (under 10), I spend about 30-50% of the time with parents. For teens, it's mostly 1-on-1, with parent check-ins. Honestly, parents often end up doing important work too — and that's where a lot of the real change happens."
  },
  {
    q: "Is coaching covered by insurance?",
    a: "Coaching is generally not covered by insurance, though some HSA/FSA plans may accept it with a Letter of Medical Necessity. I can provide an invoice for you to submit."
  },
  {
    q: "How do I know if coaching is right for my child vs. therapy?",
    a: "If your child is in acute crisis, actively self-harming, or unable to function in daily life, therapy is the right first step. If your child is dealing with anxiety, sleep issues, confidence, or communication challenges and you want practical, action-oriented tools, coaching is a great fit."
  }
];
