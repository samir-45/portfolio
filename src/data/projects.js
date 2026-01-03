import proj_1 from '../Assets/proj-1.png'
import proj_2 from '../Assets/proj-2.png'
import proj_3 from '../Assets/proj-3.png'
import proj_4 from '../Assets/proj-4.png'

export const projects = [
  {
    title: 'FoodResQ – Food Donation & Waste Reduction Platform',
    period: 'April 2025 - May 2025',
    bullets: [
      'A role-based food donation system connecting restaurants with charities to reduce waste.',
      'Real-time donation tracking and visual reports using Recharts.',
      'Charities apply for upgraded access via Stripe; Admin manages approvals.',
      'End-to-end system handling restaurants, charities, and users with role-based interactions.',
    ],
    image: proj_1,
    links: {
      codeCl: 'https://github.com/samir-45/FoodResQ-client',
      codeSv: 'https://github.com/samir-45/FoodResQ-server',
      demo: 'https://food-res-q.netlify.app/',
    },
    tags: ['React', 'TailwindCSS', 'Node.js', 'Express.js', 'MongoDB', 'Firebase Auth', 'Stripe', 'Recharts'],
  },
  {
    title: 'Fresh Harvests – Grocery Shop Website',
    period: 'December 2025 - December 2025',
    bullets: [
      'A responsive grocery shop web app with product browsing and admin inventory management.',
      'Dynamic product listing, category-based filtering, and product details with related products.',
      'API data fetching and caching with RTK Query, using clean response mapping for UI.',
      'Auth (Login/Register), token storage, and protected admin CRUD (categories/products).',
    ],
    image: proj_4,
    links: {
      codeCl: 'https://github.com/samir-45/fresh-harvests',
      demo: 'https://fresh-harvests-brown.vercel.app/',
    },
    tags: ['Next.js', 'TypeScript', 'Redux Toolkit', 'RTK Query', 'Tailwind CSS', 'DaisyUI', 'REST API', 'Vercel'],
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
    image: proj_2,
    links: {
      codeCl: 'https://github.com/samir-45/EduVerse-client',
      codeSv: 'https://github.com/samir-45/EduVerse-server',
      demo: 'https://eduverse-sm.netlify.app/',
    },
    tags: ['React', 'TailwindCSS', 'DaisyUI', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
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
    image: proj_3,
    links: {
      codeCl: 'https://github.com/samir-45/Plantify-client',
      codeSv: 'https://github.com/samir-45/Plantify-server',
      demo: 'https://sm-plantify.netlify.app/',
    },
    tags: ['React', 'TailwindCSS', 'DaisyUI', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
  },
];


