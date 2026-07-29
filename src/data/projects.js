export const projects = [
  {
    title: 'Irendity – Marketplace for Income-Producing Real Estate',
    period: 'Jan 2026 - Present',
    bullets: [
      'A premium investment platform for acquiring leased properties with defined yields and active contracts.',
      'Built an investment dashboard with real-time yield analytics (Recharts) and interactive property maps (Leaflet) for a multi-role platform (Admin / Agency / Investor).',
      'Implemented JWT-based role-based access control (RBAC) governing complex property lifecycle states across three distinct user roles.',
      'Integrated an AI assistant to automate property inquiries and deliver personalized investor guidance, cutting manual response overhead.',
    ],
    image: '/assets/irendity.webp',
    links: {
      demo: 'https://irendity-frontend.vercel.app/',
      video: 'https://drive.google.com/file/d/1FIgazdi72Ej7cTtd83utqg9mLGTQzPq_/view?usp=sharing',
    },
    tags: ['Next.js', 'TypeScript', 'Redux', 'RTK Query', 'Tailwind CSS', 'Ant Design', 'Stripe', 'AI', 'Leaflet Maps'],
  },
  {
    title: 'FoodResQ – Food Donation & Waste Reduction Platform',
    period: 'April 2025 - May 2025',
    bullets: [
      'A role-based food donation system connecting restaurants with charities to redistribute surplus food, with real-time donation tracking and visual reporting (Recharts).',
      'Built a Stripe-powered upgrade flow for charities plus an admin approval pipeline, streamlining onboarding for new organizations.',
      'Implemented Firebase Authentication and end-to-end role interactions across restaurants, charities, and admins.',
    ],
    image: '/assets/proj-1.webp',
    links: {
      codeCl: 'https://github.com/samir-45/FoodResQ-client',
      codeSv: 'https://github.com/samir-45/FoodResQ-server',
      demo: 'https://food-res-q.netlify.app/',
    },
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Stripe', 'Recharts'],
  },
  {
    title: 'Fresh Harvests – Grocery Shop Website',
    period: 'December 2025 - December 2025',
    bullets: [
      'A responsive grocery shop web app with product browsing and admin inventory management.',
      'Built dynamic product listing, category filtering, and related-product recommendations for a responsive grocery storefront.',
      'Implemented data fetching/caching with RTK Query and clean response mapping to keep UI state predictable and fast.',
      'Shipped authentication (login/register), token storage, and protected admin CRUD for categories and products.',
    ],
    image: '/assets/proj-4.webp',
    links: {
      codeCl: 'https://github.com/samir-45/fresh-harvests',
      demo: 'https://fresh-harvests-brown.vercel.app/',
    },
    tags: ['Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'REST API', 'Vercel'],
  },
  {
    title: 'Eduverse – Developer Blog Platform',
    period: 'January 2023 - June 2023',
    bullets: [
      'A full-stack platform for developers to explore, publish, and manage technical articles.',
      'Users can browse, write, edit, and delete blog posts with full CRUD operations.',
      'JWT-based authentication and authenticated user-based access for secure operations.',
      'Designed an intuitive UI for distraction-free reading and content management.',
    ],
    image: '/assets/proj-2.webp',
    links: {
      codeCl: 'https://github.com/samir-45/EduVerse-client',
      codeSv: 'https://github.com/samir-45/EduVerse-server',
      demo: 'https://eduverse-sm.netlify.app/',
    },
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
  },
  {
    title: 'Plantify – Plant Care Tracker',
    period: 'May 2025 - Present',
    bullets: [
      'A MERN app to monitor, schedule, and track personalized plant care routines.',
      'Integrated external plant health APIs for real-time environmental data.',
      'Users can log plant activity, receive reminders, and track changes.',
      'Authenticated user dashboard using JWT for secure and private data management.',
    ],
    image: '/assets/proj-3.webp',
    links: {
      codeCl: 'https://github.com/samir-45/Plantify-client',
      codeSv: 'https://github.com/samir-45/Plantify-server',
      demo: 'https://sm-plantify.netlify.app/',
    },
    tags: ['React', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
  },
];
