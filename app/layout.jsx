import './globals.css';
import { Providers } from './providers';
import { profile } from '../src/data/profile';

export const metadata = {
  title: 'Md Mahin Khan | Frontend & Full-Stack Engineer',
  description: profile.seoDescription,
  keywords: ['Md Mahin Khan', 'Mahin Khan', 'Frontend Engineer', 'Full Stack Developer', 'React.js', 'Next.js 15', 'TypeScript', 'SM Technology', 'Portfolio'],
  authors: [{ name: 'Md Mahin Khan', url: 'https://mahin-portfolio-site.netlify.app/' }],
  metadataBase: new URL('https://mahin-portfolio-site.netlify.app/'),
  alternates: {
    canonical: 'https://mahin-portfolio-site.netlify.app/',
  },
  openGraph: {
    title: 'Md Mahin Khan — Frontend & Full-Stack Engineer',
    description: 'Crafting high-conversion web platforms at SM Technology where Figma precision meets clean, production-grade Next.js 15 & Node.js architecture.',
    url: 'https://mahin-portfolio-site.netlify.app/',
    siteName: 'Md Mahin Khan Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Md Mahin Khan — Frontend & Full-Stack Engineer',
    description: 'Crafting high-conversion web platforms at SM Technology where Figma precision meets clean, production-grade Next.js 15 & Node.js architecture.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: 'https://mahin-portfolio-site.netlify.app/',
  sameAs: [
    profile.github,
    profile.linkedin,
    profile.x,
  ],
  jobTitle: 'Frontend Developer',
  description: 'Portfolio website of Md Mahin Khan, Frontend & Full-Stack Developer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/mahin-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-paper-white text-obsidian font-sans antialiased selection:bg-wisteria-tint selection:text-obsidian">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
