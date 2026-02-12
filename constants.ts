import { Testimonial, Service } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "We were drowning in daily meltdowns. Courtney didn't just give us strategies; she gave us our family evenings back. It feels peaceful again.",
    author: "Sarah J.",
    context: "Mom of a 7-year-old"
  },
  {
    id: '2',
    quote: "I was skeptical that 'coaching' could help with anxiety, but the practical tools for co-regulation changed everything. I feel capable as a dad now.",
    author: "Mark T.",
    context: "Dad of two"
  },
  {
    id: '3',
    quote: "Courtney's approach is gentle but incredibly effective. She validated my worries without letting me stay stuck in them.",
    author: "Elena R.",
    context: "Parent of a sensitive teen"
  }
];

export const SERVICES: Service[] = [
  {
    title: "1:1 Coaching",
    description: "Deep, personalized support for families in the thick of it. We work together to understand the root of the anxiety and build a custom toolkit.",
    price: "$1,200 / month",
    features: ["Weekly 50-min video calls", "Unlimited text support (Mon-Thu)", "Customized family wellness plan", "Co-regulation guides"]
  },
  {
    title: "The 8-Week Reset",
    description: "A structured program to move from chaos to calm. Best for families who need a clear roadmap and accountability.",
    price: "$1,800 one-time",
    features: ["8 weekly modules", "4 live coaching sessions", "Workbook & Journal", "Private community access"]
  },
  {
    title: "Single Strategy Session",
    description: "Perfect for specific transitions (new school, moving) or tackling one persistent challenge.",
    price: "$250 / session",
    features: ["90-minute deep dive", "Actionable follow-up plan", "Recording of our session"]
  }
];
