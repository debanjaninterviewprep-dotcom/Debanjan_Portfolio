import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './hooks/useReveal.js';

export default function App() {
  // Enables scroll-triggered fade-up on any element with class="reveal"
  useReveal();

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
