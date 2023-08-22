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
      setActiveSection(window.scrollY > 150 ? 'experiments' : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['experiments', 'about', 'contact', 'connect'];

  return (
    <div className="landing-container">
      <div className="main-header" style={{ opacity: activeSection !== '' ? 0.2 : opacity, transition }}>
        <h1>MORTON</h1>
        <h1>NICOLAYSEN</h1>
      </div>
      <ul className="nav-tabs">
        {sections.map(section => (
          <li
            key={section}
            onClick={() => setActiveSection(activeSection === section ? '' : section)}
            style={{ opacity: activeSection && activeSection !== section ? 0.2 : 1, transition }}
          >
            {section.toUpperCase()}
            {section === 'experiments' && (
              <ul className={`projects-dropdown ${activeSection === 'experiments' ? 'visible' : ''}`}>
                {projectsData.map((project, index) => (
                  <li key={index}>
                    <a style={{textDecoration:'none', color:'inherit'}} href={`#${project.title.replace(/ /g, "-")}`}>{project.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'connect' && <Connect />}
    </div>
  );
}

export default Landing;
