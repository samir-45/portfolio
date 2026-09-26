import TopBanner from '../src/components/TopBanner';
import Header from '../src/components/Header';
import About from '../src/components/About';
import TechStackBar from '../src/components/TechStackBar';
import Experience from '../src/components/Experience';
import Projects from '../src/components/Projects';
import GithubStats from '../src/components/GithubStats';
import Skills from '../src/components/Skills';
import Certifications from '../src/components/Certifications';
import Education from '../src/components/Education';
import Contact from '../src/components/Contact';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-paper-white text-obsidian flex flex-col overflow-x-hidden">
      <TopBanner />
      <Header />
      <div className="main-content flex-grow">
        <About />
        <TechStackBar />
        <Experience />
        <Projects />
        <GithubStats />
        <Skills />
        <Certifications />
        <Education />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
