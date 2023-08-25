import { useState } from 'react';
import Landing from "./components/Landing";
import Projects from './components/Projects';
import { ProjectContext } from './components/ProjectContext';
import './App.css';

function App() {
  const [activeProject, setActiveProject] = useState('');

  return (
    <ProjectContext.Provider value={{ activeProject, setActiveProject }}>
      <Landing />
      <Projects />
    </ProjectContext.Provider>
  );
}

export default App;
