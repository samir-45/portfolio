import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Md Mahin Khan | Web Developer & Full-Stack Engineer',
  description: "Welcome to Md Mahin Khan's portfolio website. Explore my projects, technical skills, certifications, and professional experience.",
  keywords: ['Md Mahin Khan', 'Mahin Khan', 'Web Developer', 'Frontend Developer', 'Full Stack Developer', 'React.js', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Md Mahin Khan', url: 'https://mahin-portfolio-site.netlify.app/' }],
  metadataBase: new URL('https://mahin-portfolio-site.netlify.app/'),
  alternates: {
    canonical: 'https://mahin-portfolio-site.netlify.app/',
  },
  openGraph: {
    title: 'Md Mahin Khan - Web Developer Portfolio',
    description: 'Explore my projects, skills, and professional experience in modern web development.',
    url: 'https://mahin-portfolio-site.netlify.app/',
    siteName: 'Md Mahin Khan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Md Mahin Khan - Web Developer Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Mahin Khan - Web Developer Portfolio',
    description: 'Explore my projects, skills, and professional experience in modern web development.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Md Mahin Khan',
  url: 'https://mahin-portfolio-site.netlify.app/',
  sameAs: [
    'https://github.com/samir-45',
    'https://www.linkedin.com/in/devmahin',
    'https://x.com/mdmahinkhan621',
  ],
  jobTitle: 'Frontend Developer',
  description: 'Portfolio website of Md Mahin Khan, Frontend & Full-Stack Developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/mahin-logo.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
