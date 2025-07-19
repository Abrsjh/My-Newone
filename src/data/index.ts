import { Doctor, Service, Testimonial, HospitalInfo, GalleryItem } from '../types';

export const hospitalInfo: HospitalInfo = {
  name: "MedCenter Excellence",
  tagline: "Caring Beyond Medicine",
  description: "A leading healthcare institution committed to providing exceptional medical care with state-of-the-art facilities and compassionate service. We combine cutting-edge technology with personalized patient care to ensure the best possible outcomes.",
  established: "1985",
  address: {
    street: "123 Healthcare Boulevard",
    city: "Medical City",
    state: "Healthcare State",
    zipCode: "12345",
    country: "USA"
  },
  contact: {
    phone: "+1 (555) 123-4567",
    email: "info@medcenterexcellence.com",
    emergencyPhone: "+1 (555) 911-HELP"
  },
  social: {
    facebook: "https://facebook.com/medcenterexcellence",
    twitter: "https://twitter.com/medcenterexc",
    instagram: "https://instagram.com/medcenterexcellence",
    linkedin: "https://linkedin.com/company/medcenter-excellence"
  }
};

export const services: Service[] = [
  {
    id: 1,
    title: "Emergency Care",
    description: "24/7 emergency medical services with state-of-the-art trauma center and rapid response team.",
    icon: "LocalHospital",
    features: [
      "24/7 Emergency Department",
      "Advanced Trauma Center",
      "Rapid Response Team",
      "Critical Care Units"
    ]
  },
  {
    id: 2,
    title: "Cardiology",
    description: "Comprehensive heart care including diagnosis, treatment, and prevention of cardiovascular diseases.",
    icon: "Favorite",
    features: [
      "Cardiac Catheterization",
      "Echocardiography",
      "Stress Testing",
      "Heart Surgery"
    ]
  },
  {
    id: 3,
    title: "Neurology",
    description: "Advanced neurological care for brain, spine, and nervous system disorders.",
    icon: "Psychology",
    features: [
      "MRI & CT Imaging",
      "Stroke Treatment",
      "Epilepsy Care",
      "Neurosurgery"
    ]
  },
  {
    id: 4,
    title: "Pediatrics",
    description: "Specialized medical care for infants, children, and adolescents in a child-friendly environment.",
    icon: "ChildCare",
    features: [
      "Newborn Care",
      "Pediatric Surgery",
      "Child Development",
      "Vaccination Programs"
    ]
  },
  {
    id: 5,
    title: "Oncology",
    description: "Comprehensive cancer care with advanced treatment options and supportive care services.",
    icon: "Healing",
    features: [
      "Chemotherapy",
      "Radiation Therapy",
      "Surgical Oncology",
      "Palliative Care"
    ]
  },
  {
    id: 6,
    title: "Orthopedics",
    description: "Expert care for bone, joint, and muscle conditions with minimally invasive procedures.",
    icon: "Accessible",
    features: [
      "Joint Replacement",
      "Sports Medicine",
      "Spine Surgery",
      "Physical Therapy"
    ]
  }
];

export const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Chief of Cardiology",
    description: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in interventional cardiology and heart disease prevention.",
    image: "/api/placeholder/300/400",
    experience: "15+ years",
    education: [
      "MD - Harvard Medical School",
      "Residency - Johns Hopkins Hospital",
      "Fellowship - Mayo Clinic"
    ],
    certifications: [
      "Board Certified Cardiologist",
      "Interventional Cardiology",
      "Nuclear Cardiology"
    ]
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Neurosurgeon",
    description: "Dr. Chen specializes in complex brain and spine surgeries with a focus on minimally invasive techniques.",
    image: "/api/placeholder/300/400",
    experience: "12+ years",
    education: [
      "MD - Stanford University",
      "Residency - UCSF Medical Center",
      "Fellowship - Cleveland Clinic"
    ],
    certifications: [
      "Board Certified Neurosurgeon",
      "Spine Surgery Specialist",
      "Minimally Invasive Surgery"
    ]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatric Specialist",
    description: "Dr. Rodriguez is dedicated to providing comprehensive healthcare for children from birth through adolescence.",
    image: "/api/placeholder/300/400",
    experience: "10+ years",
    education: [
      "MD - UCLA School of Medicine",
      "Residency - Children's Hospital LA",
      "Fellowship - Boston Children's Hospital"
    ],
    certifications: [
      "Board Certified Pediatrician",
      "Pediatric Emergency Medicine",
      "Child Development Specialist"
    ]
  },
  {
    id: 4,
    name: "Dr. David Thompson",
    specialty: "Orthopedic Surgeon",
    description: "Dr. Thompson specializes in joint replacement and sports medicine with cutting-edge surgical techniques.",
    image: "/api/placeholder/300/400",
    experience: "18+ years",
    education: [
      "MD - Duke University",
      "Residency - Hospital for Special Surgery",
      "Fellowship - Andrews Sports Medicine"
    ],
    certifications: [
      "Board Certified Orthopedic Surgeon",
      "Sports Medicine Specialist",
      "Joint Replacement Expert"
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jennifer Smith",
    role: "Heart Surgery Patient",
    content: "The care I received at MedCenter Excellence was exceptional. Dr. Johnson and her team saved my life with their expertise and compassionate care.",
    rating: 5
  },
  {
    id: 2,
    name: "Robert Wilson",
    role: "Emergency Care Patient",
    content: "When I had my accident, the emergency team responded quickly and professionally. Their fast action made all the difference in my recovery.",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Garcia",
    role: "Pediatric Patient Parent",
    content: "Dr. Rodriguez and the pediatric team made my daughter's treatment comfortable and stress-free. Highly recommend their services.",
    rating: 5
  },
  {
    id: 4,
    name: "James Brown",
    role: "Orthopedic Patient",
    content: "Dr. Thompson performed my knee replacement surgery flawlessly. I'm back to playing tennis thanks to his excellent work.",
    rating: 5
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Emergency Department",
    description: "State-of-the-art emergency facilities with advanced medical equipment",
    image: "/api/placeholder/600/400",
    category: "facility"
  },
  {
    id: 2,
    title: "Advanced MRI Scanner",
    description: "Latest 3T MRI technology for precise diagnostic imaging",
    image: "/api/placeholder/600/400",
    category: "equipment"
  },
  {
    id: 3,
    title: "Cardiac Surgery Suite",
    description: "Cutting-edge operating room for complex cardiac procedures",
    image: "/api/placeholder/600/400",
    category: "facility"
  },
  {
    id: 4,
    title: "Medical Team Meeting",
    description: "Our dedicated healthcare professionals collaborating on patient care",
    image: "/api/placeholder/600/400",
    category: "team"
  },
  {
    id: 5,
    title: "Patient Recovery Room",
    description: "Comfortable and modern recovery suites for optimal healing",
    image: "/api/placeholder/600/400",
    category: "facility"
  },
  {
    id: 6,
    title: "Health Fair Event",
    description: "Community outreach and health screening events",
    image: "/api/placeholder/600/400",
    category: "event"
  }
];
