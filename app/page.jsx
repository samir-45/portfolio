import Header from '../src/components/Header';
import About from '../src/components/About';
import Experience from '../src/components/Experience';
import Projects from '../src/components/Projects';
import GithubStats from '../src/components/GithubStats';
import Skills from '../src/components/Skills';
import Education from '../src/components/Education';
import Certifications from '../src/components/Certifications';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <div className="main-content">
        <About />
        <Experience />
        <Projects />
        <GithubStats />
        <Skills />
        <Education />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
