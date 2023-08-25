import { useState, useEffect, useRef, useContext } from 'react';
import { projectsData } from "./projectsData";
import { ProjectContext } from './ProjectContext';
import "./Project.css"

function ProjectItem({
  title,
  tools,
  dateCreated,
  description,
  linkOne,
  linkTwo,
  linkThree,
  videoSrc,
  setActiveProject,
}) {

  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const projectRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        setIntersectionRatio(entry.intersectionRatio);
        if (entry.intersectionRatio > 0.5) {
          setActiveProject(title);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: Array.from({ length: 100 }, (_, i) => i / 100)
      }
    );

    if (projectRef.current) {
      observer.observe(projectRef.current);
    }

    return () => {
      if (projectRef.current) {
        observer.unobserve(projectRef.current);
      }
    };
  }, [title, setActiveProject]);

  const transformStyle = `translateX(${100 - (intersectionRatio * 200)}%)`;

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    if (videoRef.current) {
        videoRef.current.playbackRate = 2.0;
    }
  }, [videoRef]);

  const links = [linkOne, linkTwo, linkThree];
  const icons = [
    "fa-solid fa-arrow-up-right-from-square",
    "fa-brands fa-github",
    "fa-brands fa-youtube"
  ];

  return (
    <div className="project" ref={projectRef} id={title.replace(/ /g, "-")}>
      <h3 className="project-header" style={{ transform: transformStyle }}>{title}</h3>
      <video
        className="project-video"
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        type="video/mp4"
      ></video>
      <div className='project-description-group'>
        <p className="project-description">{description}</p>
        <ul className="project-links">
            {links.map((link, idx) => (
              link && (
                <button
                  key={idx}
                  className={"card-button"}
                  onClick={() => handleButtonClick(link)}
                >
                  <i className={icons[idx]}></i>
                </button>
              )
            ))}
        </ul>
      </div>
      <div className='sub-description-group'>
        <h3>{dateCreated}</h3>
        <h3>{tools}</h3>
      </div>
    </div>
  );
}

function Projects() {
  const { setActiveProject } = useContext(ProjectContext);

  return (
    <div className="project-item">
      {projectsData.map((project, index) => (
        <ProjectItem key={index} {...project} setActiveProject={setActiveProject} />
      ))}
    </div>
  );
}

export default Projects;
