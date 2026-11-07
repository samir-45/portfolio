import { notFound } from 'next/navigation';
import Dashboard from './dashboard';
import { profile } from '../../src/data/profile';
import { projects } from '../../src/data/projects';
import { experience } from '../../src/data/experience';
import { skills } from '../../src/data/skills';
import { certifications } from '../../src/data/certifications';
import { education } from '../../src/data/education';

export const metadata = {
  title: 'Portfolio Admin',
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  // Local-only tool: the save API can't write files on Netlify, so the page doesn't exist there either.
  if (process.env.NODE_ENV !== 'development') notFound();
  return <Dashboard initial={{ profile, projects, experience, skills, certifications, education }} />;
}
