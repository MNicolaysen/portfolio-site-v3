import { useState, useEffect, useRef, useContext } from 'react';
import { projectsData } from "./projectsData";
import { ProjectContext } from './ProjectContext';
import "./Project.css"

function ProjectItem({
  title,
  tools,
  dateCreated,
  description,
  link,
  linkOne,
  linkTwo,
  linkThree,
  videoSrc,
  imageSrc,
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
    "fa-brands fa-figma",
    "fa-brands fa-github",
    "fa-brands fa-youtube"
  ];

  return (
    <div className="project" ref={projectRef} id={title.replace(/ /g, "-")}>
      <h3 className="project-header" style={{transform: window.innerWidth > 900 ? transformStyle : ''}}>{title}</h3>
        <video
          className="project-video"
          ref={videoRef}
          src={videoSrc}
          placeholder={imageSrc}
          autoPlay
          muted
          loop
          playsInline
          type="video/mp4"
          onClick={() => handleButtonClick(link)}
        ></video>
        <p className="project-description">{description}</p>
        <div className='project-info-lower'>
          <ul className="project-links" style={{paddingLeft:'0px'}}>
            {links.map((link, idx) => (
              link && (
                <button
                  key={idx}
                  className={"card-button"}
                  onClick={() => handleButtonClick(link)}
                >
                  {window.innerWidth > 900 ? 'Open in' : ''}
                  <i
                    className={icons[idx]}
                    style=
                      {
                        {
                          marginLeft: window.innerWidth > 1200 ? '8px' : '0',
                        }
                      }
                  ></i>
                </button>
              )
            ))}
          </ul>
          <div className='sub-description-group'>
            <h3>{dateCreated}</h3>
            <h3>{tools}</h3>
          </div>
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
