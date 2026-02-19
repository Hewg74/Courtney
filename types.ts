export type ViewState = 'home' | 'work-with-me' | 'qigong' | 'about' | 'contact' | 'testimonials';

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
