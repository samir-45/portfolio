// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';
// const Experience = React.lazy(() => import('./components/Experience'));
const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Mahin Khan - Web Developer</title>
        <meta name="description" content="Welcome to Mahin Khan's portfolio website. I'm Mahin Khan, a passionate Web developer showcasing my projects, skills, and experience." />
        <meta name="keywords" content="Mahin, mahin, mahin.in, Mahin Khan,mahinkhan portfolio, Web Developer" />
        <meta name="author" content="Mahin Khan" />
        <meta property="og:title" content="Mahin Khan - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahin.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mahin Khan - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <link rel="canonical" href="https://mahin.in" />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Mahin Khan",
            "url": "https://mahin.in",
            "sameAs": [
              "https://github.com/samir-45",
              "https://www.linkedin.com/in/devmahin",
              "https://x.com/mdmahinkhan621"
            ],
            "jobTitle": "Web Developer",
            "description": "Portfolio website of Mahin Khan, Web Developer. Projects, skills, experience, and contact information."
          }
        `}</script>
        {/* SEO: Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          {/* <Experience /> */}
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;