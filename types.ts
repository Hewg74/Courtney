export type ViewState = 'home' | 'how-i-help' | 'about' | 'results' | 'workshops' | 'resources' | 'faq';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context?: string;
}

export interface Service {
  title: string;
  description: string;
  price?: string;
  features: string[];
}
