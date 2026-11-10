/**
 * ==============================================================================
 * PORTFOLIO DATA CONFIGURATION FILE
 * ==============================================================================
 * This file contains all your personal information, projects, certifications,
 * skills, and social links. You can easily edit any text, link, or image path here
 * without modifying any component code!
 * ==============================================================================
 */

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  educationalDisclaimer: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string; // Optional: set to empty string if not available yet
  features: string[];
  status: 'In Development' | 'Completed' | 'Prototype';
  year: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuingOrganization: string;
  issueDate: string;
  grade: string;
  duration: string;
  trainingCenter: string;
  registrationNo: string;
  image: string;
  verificationUrl?: string;
  marksSummary: {
    subject: string;
    marks: number;
    max: number;
  }[];
}

export interface SkillCategory {
  categoryName: string;
  status: 'Confirmed' | 'Exploring';
  skills: {
    name: string;
    level: string;
    description: string;
    tags: string[];
  }[];
}

export const portfolioData = {
  // 1. Personal Details
  personal: {
    name: 'Abishek R T',
    shortName: 'Abishek',
    greeting: "HELLO, I'M",
    tagline: 'Building ideas into intelligent solutions.',
    roles: [
      'Student Developer',
      'Aspiring AI Developer',
      'Technology Enthusiast'
    ],
    email: 'abishekrt828@gmail.com',
    github: 'https://github.com/Abishek-AIDev',
    linkedin: 'https://www.linkedin.com/in/abishekrt',
    location: 'Tamil Nadu, India',
    statusBadge: 'Open for collaborations & tech learning',
    // You can upload your personal photo to /public/assets/profile.jpg and put the path here:
    customProfilePhoto: null as string | null, // e.g., '/assets/profile.jpg'
  },

  // 2. About Me
  about: {
    bio: "I'm Abishek R T, a first-year B.Tech student at Joy University, studying through NIAT. I'm passionate about technology, software development, and exploring artificial intelligence. I enjoy turning ideas into practical applications and continuously developing my technical skills through hands-on projects.",
    highlights: [
      {
        title: 'Academic Foundation',
        desc: 'First-year B.Tech engineering student focused on algorithmic logic, data structures, and computer science fundamentals.',
      },
      {
        title: 'AI Exploration',
        desc: 'Actively researching computer vision, intelligent systems, and applying machine learning to real-world educational problems.',
      },
      {
        title: 'Hands-on Builder',
        desc: 'Belief in learning by creating: building software prototypes from conceptual idea to working interface.',
      },
    ],
    quickFacts: [
      { label: 'Degree', value: 'B.Tech (First Year · 2026)' },
      { label: 'Institution', value: 'Joy University (NIAT)' },
      { label: 'Focus Areas', value: 'C++, AI Prototypes, Software Dev' },
      { label: 'Status', value: 'Active Student Developer' },
    ]
  },

  // 3. Featured Projects
  projects: [
    {
      id: 'skinwise-ai',
      title: 'SkinWise AI',
      subtitle: 'Educational AI Skin Condition Analysis Companion',
      description:
        'SkinWise AI is an application designed to help users understand possible skin conditions by taking a photograph or uploading an existing skin image. It provides educational information about possible skin allergies or infections and guidance on appropriate next steps.',
      educationalDisclaimer:
        'Educational & Informational Project: SkinWise AI is strictly an educational computer vision exploration and is NOT a medically validated diagnostic device. It is intended to raise awareness and encourage users to consult certified healthcare professionals.',
      image: '/src/assets/images/skinwise_ai_preview_1794326647127.jpg',
      tags: ['Computer Vision', 'Artificial Intelligence', 'React', 'Python', 'Healthcare Tech'],
      githubUrl: 'https://github.com/Abishek-AIDev',
      demoUrl: '', // Add your live demo URL when ready
      status: 'In Development',
      year: '2026',
      features: [
        'Image ingestion pipeline for skin photo uploads and camera capture',
        'Machine learning image classification for common dermatological patterns',
        'Structured educational guidance on potential allergies vs common irritations',
        'Precautionary self-care tips & recommendation to visit medical specialists',
        'Privacy-first design with local image preprocessing'
      ]
    } as ProjectItem
  ],

  // 4. Verified Certifications (Extracted directly from uploaded certificates)
  certificates: [
    {
      id: 'cert-cpp',
      title: 'Certificate Course in C++',
      issuingOrganization: 'Skill Training & Vocational Training Institute of India (STVT)',
      trainingCenter: 'National Computer College, Kuzhithurai',
      issueDate: '11-10-2023',
      grade: '1st Class (75%)',
      duration: '3 Months',
      registrationNo: 'TN09E0015554 · ISO 9001:2015',
      image: '/assets/certificates/cpp_certificate.jpeg',
      verificationUrl: 'http://kecttrust.com/kect/dataretrive.php',
      marksSummary: [
        { subject: 'C++ Programming & Fundamentals', marks: 75, max: 100 }
      ]
    },
    {
      id: 'cert-ms-office',
      title: 'Certificate Course in Microsoft Office User Specialist',
      issuingOrganization: 'Skill Training & Vocational Training Institute of India (STVT)',
      trainingCenter: 'National Computer College, Kuzhithurai',
      issueDate: '25-07-2024',
      grade: '1st Class (86%)',
      duration: '3 Months',
      registrationNo: 'TN09E0015554 · ISO 9001:2015',
      image: '/assets/certificates/ms_office_certificate.jpeg',
      verificationUrl: 'http://kecttrust.com/kect/dataretrive.php',
      marksSummary: [
        { subject: 'Introduction to IT', marks: 88, max: 100 },
        { subject: 'M.S Windows', marks: 86, max: 100 },
        { subject: 'M.S Word', marks: 85, max: 100 },
        { subject: 'M.S Excel', marks: 88, max: 100 },
        { subject: 'M.S PowerPoint', marks: 85, max: 100 }
      ]
    }
  ] as CertificateItem[],

  // 5. Skills (Confirmed Skills only + Editable Roadmap for future additions)
  skills: {
    confirmed: [
      {
        name: 'C++',
        level: 'Certified · 1st Class',
        category: 'Programming & Logic',
        description: 'Object-oriented programming, memory concepts, algorithms, control flow, functions, and structured problem solving.',
        tags: ['OOP', 'Pointers', 'Data Structures', 'Problem Solving', 'STL']
      },
      {
        name: 'Microsoft Office Suite',
        level: 'Certified Specialist · 86%',
        category: 'Productivity & Documentation',
        description: 'Advanced document formatting in MS Word, data modeling and formula calculations in MS Excel, dynamic presentation design in MS PowerPoint, and Windows IT administration.',
        tags: ['MS Word', 'MS Excel', 'MS PowerPoint', 'IT Fundamentals', 'Data Reporting']
      }
    ],
    // These are skills you can add to your verified list as you complete coursework and projects!
    exploringNext: [
      {
        name: 'Python',
        level: 'Currently Learning',
        description: 'Core syntax, scientific libraries (NumPy, Pandas), and scripts for automation and data preparation.',
        tags: ['Scripting', 'Data Processing', 'Automation']
      },
      {
        name: 'Artificial Intelligence & Computer Vision',
        level: 'Active Exploration',
        description: 'Convolutional neural networks, image classification architectures, and model deployment for projects like SkinWise AI.',
        tags: ['CNNs', 'OpenCV', 'Model Inference', 'Image Analysis']
      },
      {
        name: 'Web Technologies (React & JavaScript)',
        level: 'Building Interfaces',
        description: 'Component architecture, responsive UI design, modern web applications, and API integration.',
        tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite']
      }
    ]
  },

  // 6. Education
  education: {
    institution: 'Joy University',
    degree: 'Bachelor of Technology (B.Tech)',
    year: 'First Year (Current)',
    program: 'National Institute of Advanced Technologies (NIAT)',
    period: '2026 – Present',
    description: 'Pursuing undergraduate engineering with an emphasis on modern software technologies, computational thinking, and advanced technological systems.',
    milestones: [
      'Completed foundational certifications in C++ programming and office productivity systems.',
      'Designed and architected conceptual prototype for SkinWise AI educational platform.',
      'Active participant in technical learning labs, code reviews, and programming challenges.'
    ]
  },

  // 7. Navigation Links
  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ]
};
