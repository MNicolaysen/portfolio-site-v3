import { useState, useEffect, useContext } from 'react';
import { projectsData } from './projectsData';
import About from './About';
import Contact from './Contact';
import Connect from './Connect';
import { ProjectContext } from './ProjectContext';
import "./Landing.css";

function Landing() {
  const [activeMouse, setActiveMouse] = useState(true)
  const [activeSection, setActiveSection] = useState('');
  const { activeProject } = useContext(ProjectContext);

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection(window.scrollY > 150 ? 'experiments' : '');
      if (window.scrollY > 10) {
        setActiveMouse(false);
      } else {
        setActiveMouse(true);
      }
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

  const handleFigmaClick = () => {
    window.open('https://www.figma.com/file/OCDLEl26XL7y17NfZ1cecS/portfolio-v3?type=design&node-id=103%3A1835&mode=design&t=1qpFqmH3nUoa2S0o-1', "_blank");
  }

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
      {< button
        className='landing-figma-btn'
        onClick={() => handleFigmaClick()}
        style={{display: activeMouse ? 'block' : 'none'}}
      >
        {window.innerWidth > 900 ? 'Open in' : ''}
        <i
          className="fa-brands fa-figma"
          style={
            {
              fontSize: window.innerWidth > 900 ? '' : '2em',
              color: 'black',
              textDecoration: 'none',
              marginLeft: window.innerWidth > 900 ? '8px' : '',
            }
          }>
        </i>
      </button> }
      {/* mouse scrolling animation  */}
      <div
        className="scroll-downs"
        style={
          {
            display: activeMouse && window.innerWidth > 900 ? 'block' : 'none',
          }
        }
      >
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </div>
      {/* //  */}
      <ul className="nav-tabs">
        {sections.map(section => (
          <li
            key={section}
            onClick={() => handleClick(section)}
            style=
              {
                {
                  ...style,
                  opacity: window.innerWidth > 900 ? activeSection && activeSection !== section ? 0.2 : 1 : '',
                  display: window.innerWidth > 900 ? 'block' : activeMouse ? 'block' : 'none'
                }
              }
          >
            {section.toUpperCase()}
            {section === 'experiments' && (
              <ul className={`projects-dropdown ${activeSection === 'experiments' && window.innerWidth > 900 ? 'visible' : ''}`}>
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
