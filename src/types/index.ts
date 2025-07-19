export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  description: string;
  image: string;
  experience: string;
  education: string[];
  certifications: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'facility' | 'equipment' | 'event' | 'team';
}

export interface HospitalInfo {
  name: string;
  tagline: string;
  description: string;
  established: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    phone: string;
    email: string;
    emergencyPhone: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}
