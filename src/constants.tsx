import { 
  Code2, 
  Database, 
  Server, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Mail, 
  Linkedin, 
  Github,
  ExternalLink,
  ChevronRight,
  Terminal,
  Zap,
  Briefcase,
  GraduationCap
} from 'lucide-react';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS = [
  {
    category: 'Backend Development',
    icon: <Server className="w-5 h-5" />,
    items: ['PHP', 'Laravel', 'RESTful APIs', 'MVC Architecture', 'Clean Code']
  },
  {
    category: 'Database & ORM',
    icon: <Database className="w-5 h-5" />,
    items: ['MySQL', 'Eloquent ORM', 'Database Design', 'Query Optimization']
  },
  {
    category: 'Security & Auth',
    icon: <ShieldCheck className="w-5 h-5" />,
    items: ['JWT', 'Laravel Sanctum', 'RBAC', 'Authentication', 'Authorization']
  },
  {
    category: 'DevOps & Tools',
    icon: <Cpu className="w-5 h-5" />,
    items: ['Git & GitHub', 'Redis', 'Laravel Cache', 'Postman', 'cPanel']
  }
];

export const PROJECTS = [
   {
    title: 'LMS Backend Academy Platform',
    description: 'Built a Learning Management System with a centralized Admin Dashboard for full platform control.',
    tags: ['Laravel', 'MySQL', 'RESTful APIs'],
    link: 'https://mohamedkamalcourses.netlify.app/',
    features: ['Manual payment verification', 'Live & Recorded courses delivery', 'Automated student enrollment']
  },
  {
    title: 'LegalERP',
    description: 'Multi-tenant SaaS platform for law firms with multi-vendor architecture and HR/Payroll engine.',
    tags: ['Laravel', 'MySQL', 'Multi-tenancy', 'RBAC'],
    link: 'https://github.com/raghdahelmy/ERP-system-SaaS',
    liveLink: 'https://law-erp-portfolio.netlify.app/',
    features: ['Multi-vendor structure', 'Automated payroll', 'Workflow automation']
  },
 
  {
    title: 'PLAY PRO',
    description: 'Integrated sports booking, academy reservations, and e-commerce store with Paymob integration.',
    tags: ['PHP', 'Laravel', 'Paymob', 'RESTful API'],
    link: 'https://playpro-site.netlify.app/',
    features: ['Real-time booking', 'Payment gateway', 'Admin dashboard']
  },
  {
    title: 'UMQ Backend',
    description: 'Scalable backend for marine industry mobile app supporting e-commerce, rentals, and education.',
    tags: ['Laravel', 'REST API', 'FCM', 'EdfaPay'],
    link: 'https://github.com/raghdahelmy/UMQ-Backend',
    androidLink: 'https://play.google.com/store/apps/details?id=umq.app.umq&hl=en',
    iosLink: 'https://apps.apple.com/eg/app/umq/id6451067608',
    features: ['Multi-role architecture', 'Affiliate system', 'Real-time notifications']
  },
 
  {
    title: 'Jewelry Souqna',
    description: 'Full-featured e-commerce jewelry store with user signup/sign-in and an admin dashboard.',
    tags: ['Laravel', 'E-commerce', 'Admin Panel'],
    link: 'https://jewelry.souqna-sa.com/',
    features: ['Product lifecycle management', '35% faster order handling', 'Role-based access']
  },
   {
    title: 'Academy ZH',
    description: 'E-learning system backend with user signup, teacher dashboards, and course modules.',
    tags: ['Laravel', 'JWT', 'Dashboard'],
    link: 'https://github.com/raghdahelmy/Academy-courses-Api',
    features: ['30% faster processing', 'Teacher dashboards', 'Secure auth']
  },
  {
    title: 'Multi-Tenancy Multi-Database',
    description: 'Architecture using a separate database for each tenant, ensuring 100% data isolation.',
    tags: ['Laravel', 'Multi-tenancy', 'Database Design'],
    link: 'https://github.com/raghdahelmy/multi-tenancy-multi-database',
    features: ['100% data isolation', 'Dynamic tenant configuration', 'Supports 10+ tenants']
  },
  {
    title: 'Restaurant Api',
    description: 'RESTful Blog API with JWT authentication and role-based access control.',
    tags: ['Laravel', 'JWT', 'RESTful API'],
    link: 'https://github.com/raghdahelmy/restaurant_api.git',
    features: ['CRUD operations', 'Filters, search, and sorting', 'Postman documentation']
  }
];

export const PHILOSOPHY = [
  {
    title: "Clean Architecture",
    description: "Writing code that is easy to read, maintain, and scale using SOLID principles.",
    icon: <Code2 className="w-6 h-6" />,
    color: "indigo"
  },
  {
    title: "Security First",
    description: "Implementing robust authentication and authorization layers for every endpoint.",
    icon: <ShieldCheck className="w-6 h-6" />,
    color: "yellow"
  },
  {
    title: "Performance Driven",
    description: "Optimizing queries and caching strategies to ensure lightning-fast responses.",
    icon: <Zap className="w-6 h-6" />,
    color: "violet"
  },
  {
    title: "Scalable Systems",
    description: "Designing multi-tenant architectures that grow seamlessly with your business.",
    icon: <Layers className="w-6 h-6" />,
    color: "indigo"
  }
];

export const EXPERIENCE = [
  {
    role: 'Backend Developer (PHP & Laravel)',
    company: 'zh coding',
    period: 'Aug 2025 - Present',
    location: 'Egypt',
    highlights: [
      'Optimized RESTful APIs, improving response times by 30%.',
      'Collaborated with front-end teams for 100% API integration accuracy.',
      'Enhanced security with role-based authorization and middleware.',
      'Streamlined database design, improving retrieval speed by 40%.'
    ]
  }
];

export const EDUCATION = [
  {
    degree: 'Full Stack PHP Bootcamp Diploma',
    school: 'Kimit Academy',
    period: 'Jan 2024 - Jan 2025',
    description: 'Intensive backend development focused on PHP, Laravel, and RESTful API design.'
  },
  {
    degree: 'Bachelors Degree in Science',
    school: 'Suez Canal University',
    period: '2015 - 2019',
    description: 'Specializing in Microbiology.'
  }
];
