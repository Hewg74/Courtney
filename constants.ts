import { Testimonial, Service } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "Since working with Courtney, I have seen a miraculous transformation in my child. Once nearly debilitated by anxiety, they now have confidence, courage, and tools to help curtail negative thoughts. They've learned to embrace their unique talents rather than fear them.",
    author: "Parent of a 12-year-old",
    context: "Arizona"
  },
  {
    id: '2',
    quote: "Courtney has the ability to direct you gently to self-reflection so you can accomplish your goals. She creates an environment of safety, trust, and empowerment.",
    author: "Client",
    context: "Parent Coaching"
  },
  {
    id: '3',
    quote: "I came looking for help with my kid's anxiety. What I found was someone who actually understood my kid — not just the behavior, but who they are underneath it. That changed everything.",
    author: "Parent",
    context: "San Francisco"
  }
];

export const SERVICES: Service[] = [
  {
    title: "1-on-1 Coaching",
    description: "Personalized sessions for kids, teens, and adults. Whether specifically for your child or for your own nervous system regulation, we adhere to the same principles: gentle, strength-based growth.",
    price: "$500 (6-session package)",
    features: ["Bi-weekly 30-min sessions", "Parent support included", "Customized toolkit"]
  },
  {
    title: "The Calm Kid Program",
    description: "A structured 8-week program for anxious, overwhelmed, or deeply sensitive kids. Week by week, your child builds a personalized mind-body toolkit.",
    price: "Inquire for pricing",
    features: ["8 weekly themes", "Video lessons + Live coaching", "Workbook & Journal", "Parent guide"]
  },
  {
    title: "Qigong & Workshops",
    description: "Interactive sessions for schools and organizations on emotional regulation. Also offering Qigong classes for clients seeking movement-based healing.",
    price: "Custom",
    features: ["Online or In-Person (Maui)", "For Schools & Families", "Somatic & Qigong Tools"]
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
    work: "We normalized their sensitivity and built a bedtime ritual using body-scan techniques. We moved from 'fixing' the anxiety to understanding its signal.",
    outcome: "Sleeping through the night by week 6. School attendance is regular, and the child now has a specific 'reset' button they use independently."
  },
  {
    id: '2',
    title: "The 'Too Much' Teenager",
    situation: "A 15-year-old creative felt overwhelmed by the world's noise and their own big emotions, leading to shutdown.",
    work: "We refrained 'too much' as 'deeply feeling' and 'gifted'. Used qigong and breath to manage sensory overload.",
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
    work: "Focused on maternal nervous system regulation first. Oxygen mask principle.",
    outcome: "Mom's calm became the anchor. As she relaxed, the child's behavioral spikes decreased in intensity and duration."
  }
];

export const FAQ_ITEMS = [
  {
    q: "Who do you work with?",
    a: "I work with children (ages 6-17), teens, and their families. My specialization is with anxious, sensitive, or neurodivergent kids (ADHD, sensory processing) who need tools beyond standard behavioral correction."
  },
  {
    q: "What is wellness coaching and how is it different from therapy?",
    a: "Therapy often looks back to heal; coaching looks forward to build skills. I don't diagnose or treat mental illness. I help families build practical habits, mindsets, and routines to navigate daily life with more ease. Many of my clients also see a therapist; the two work beautifully together."
  },
  {
    q: "Do I need to practice qigong or meditation?",
    a: "No. Those are tools in my toolkit, and we only use them if they resonate with your child. Some kids love the movement; others prefer logical strategies or creative expression. We follow what works."
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
    a: "Both. For younger children (under 10), I spend about 30-50% of the time with parents. For teens, it's mostly 1-on-1, with parent check-ins. The family system is the client, not just the child."
  },
  {
    q: "Is coaching covered by insurance?",
    a: "Coaching is generally not covered by insurance, though some HSA/FSA plans may accept it with a Letter of Medical Necessity. I can provide an invoice for you to submit."
  },
  {
    q: "How do I know if coaching is right for my child vs. therapy?",
    a: "If your child is in acute crisis, actively self-harming, or unable to function in daily life, therapy is the right first step. If your child is basically functioning but struggling with specific roadblocks (worry, sleep, confidence) and you want action-oriented tools, coaching is a great fit."
  },
  {
    q: "What do you mean by 'intuitive' coaching?",
    a: "It means I listen to more than just the words. I pay attention to the energy, the body language, and the unspoken emotions in the room. It allows me to get to the heart of the matter faster and help kids feel truly 'seen,' often in ways they haven't experienced before."
  },
  {
    q: "My child is very sensitive / intuitive / psychic — can you help?",
    a: "Yes. This is a core part of my work and the subject of my book. I help these children understand their sensitivity as a superpower, not a defect. We work on boundaries, grounding, and how to manage 'feeling everyone else's feelings.'"
  }
];
