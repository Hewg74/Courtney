export type ViewState = 'home' | 'work-with-me' | 'qigong' | 'about' | 'contact' | 'testimonials' | 'book';

export interface Service {
  title: string;
  description: string;
  price?: string;
  features: string[];
}
