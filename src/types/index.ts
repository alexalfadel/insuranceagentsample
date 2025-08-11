export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  insuranceType: string;
  message: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
}