import './globals.css';
import { Providers } from './providers';

export const metadata = {
  title: 'Mahin Khan | Web Developer & Full-Stack Engineer',
  description: "Welcome to Mahin Khan's portfolio website. Explore my projects, technical skills, certifications, and professional experience.",
  keywords: ['Mahin Khan', 'Mahin', 'Web Developer', 'Frontend Developer', 'Full Stack Developer', 'MERN Stack Developer', 'Portfolio'],
  authors: [{ name: 'Mahin Khan', url: 'https://mahin.in' }],
  metadataBase: new URL('https://mahin.in'),
  alternates: {
    canonical: 'https://mahin.in',
  },
  openGraph: {
    title: 'Mahin Khan - Web Developer Portfolio',
    description: 'Explore my projects, skills, and professional experience in modern web development.',
    url: 'https://mahin.in',
    siteName: 'Mahin Khan Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahin Khan - Web Developer Portfolio',
    description: 'Explore my projects, skills, and professional experience in modern web development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mahin Khan',
  url: 'https://mahin.in',
  sameAs: [
    'https://github.com/samir-45',
    'https://www.linkedin.com/in/devmahin',
    'https://x.com/mdmahinkhan621',
  ],
  jobTitle: 'Web Developer',
  description: 'Portfolio website of Mahin Khan, Web Developer. Projects, skills, experience, and contact information.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/Logoo.png" />
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
