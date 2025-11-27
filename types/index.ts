export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  tagline: string;
  services: Service[];
  color: string;
  gradient: string;
}

export interface Package {
  id: string;
  name: string;
  letter: string;
  features: string[];
  highlighted?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  image?: string;
}

export interface Advisor {
  id: string;
  name: string;
  role: string;
  image: string;
  bio?: string;
}


