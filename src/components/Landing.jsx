import { useState, useEffect } from 'react';
import { projectsData } from './projectsData';
import About from './About';
import Contact from './Contact';
import Connect from './Connect';
import "./Landing.css";

function Landing() {
  const [activeSection, setActiveSection] = useState('');
  const [opacity, setOpacity] = useState(1);
  const [transition, setTransition] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(window.scrollY > 30 ? 0.2 : 1);
      setTransition(window.scrollY > 30 ? '0.9s' : '');

      if (window.scrollY > 150) {
        setActiveSection('experiments');
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-container">
      <div className="main-header" style={{ opacity: activeSection !== '' ? 0.2 : opacity, transition }}>
        <h1>MORTON</h1>
        <h1>NICOLAYSEN</h1>
      </div>
      <ul className="nav-tabs">
        <li
          onClick={() => setActiveSection(activeSection === 'experiments' ? '' : 'experiments')}
          style={{ opacity: activeSection && activeSection !== 'experiments' ? 0.2 : 1, transition }}
        >EXPERIMENTS
          <ul className={`projects-dropdown ${activeSection === 'experiments' ? 'visible' : ''}`}>
            {projectsData.map((project, index) => (
              <li key={index}>
                <a style={{textDecoration:'none', color:'inherit'}} href={`#${project.title.replace(/ /g, "-")}`}>{project.title}</a>
              </li>
            ))}
          </ul>
        </li>
        <li
          onClick={() => setActiveSection(activeSection === 'about' ? '' : 'about')}
          style={{ opacity: activeSection && activeSection !== 'about' ? 0.2 : 1, transition }}
        >ABOUT</li>
        <li
          onClick={() => setActiveSection(activeSection === 'contact' ? '' : 'contact')}
          style={{ opacity: activeSection && activeSection !== 'contact' ? 0.2 : 1, transition }}
        >CONTACT</li>
        <li
          onClick={() => setActiveSection(activeSection === 'connect' ? '' : 'connect')}
          style={{ opacity: activeSection && activeSection !== 'connect' ? 0.2 : 1, transition }}
        >CONNECT</li>
      </ul>

      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'connect' && <Connect />}
    </div>
  );
}

export default Landing;
