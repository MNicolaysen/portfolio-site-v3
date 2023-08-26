import { useState, useEffect, useContext } from 'react';
import { projectsData } from './projectsData';
import About from './About';
import Contact from './Contact';
import Connect from './Connect';
import { ProjectContext } from './ProjectContext';
import "./Landing.css";

function Landing() {
  const [activeSection, setActiveSection] = useState('');
  const { activeProject } = useContext(ProjectContext);

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(window.scrollY > 150 ? 'experiments' : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = ['experiments', 'about', 'contact', 'connect'];

  const handleClick = section => {
    setActiveSection(prevSection => prevSection === section ? '' : section);
    if (['about', 'contact', 'connect'].includes(section)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const style = {
    opacity: activeSection !== '' ? 0.2 : 1,
    transition: '0.9s'
  };

  return (
    <div className="landing-container">
      <img
        className='landing-logo'
        style={style}
        src="/images/projects/bica.png"
        alt="logo"
      />
      <div className="main-header" style={style}>
        <h1>MORTON</h1>
        <h1>NICOLAYSEN</h1>
      </div>
      <ul className="nav-tabs">
        {sections.map(section => (
          <li
            key={section}
            onClick={() => handleClick(section)}
            style={{ ...style, opacity: activeSection && activeSection !== section ? 0.2 : 1 }}
          >
            {section.toUpperCase()}
            {section === 'experiments' && (
              <ul className={`projects-dropdown ${activeSection === 'experiments' ? 'visible' : ''}`}>
                {projectsData.map((project, index) => (
                  <li key={index}>
                    <a
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                        opacity: project.title === activeProject ? 1 : 0.2,
                      }}
                      href={`#${project.title.replace(/ /g, "-")}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const targetElement = document.getElementById(`${project.title.replace(/ /g, "-")}`);
                        targetElement && targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                    >
                      {project.title}
                    </a>
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
