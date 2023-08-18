import {useState, useEffect} from 'react'
import "./Landing.css"
import Projects from "./Projects"

function Landing() {
  const [opacity, setOpacity] = useState(1);
  const [transition, setTransition] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setOpacity(window.scrollY > 30 ? 0.2 : 1);
      setTransition(window.scrollY > 30 ? '0.9s' : '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <div className="landing-container">
        <div className="main-header" style={{ opacity, transition }}>
          <h1>MORTON</h1>
          <h1>NICOLAYSEN</h1>
        </div>
          <ul className="nav-tabs">
            <li>experiments</li>
            <li style={{ opacity, transition }}>about</li>
            <li style={{ opacity, transition }}>contact</li>
            <li style={{ opacity, transition }}>connect</li>
          </ul>
      </div>

      <div className="projects">
        <Projects />
      </div>
    </div>
  )
}

export default Landing
