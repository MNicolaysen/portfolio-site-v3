import { useState, useEffect, useRef } from 'react';
import { projectsData } from "./projectsData";
import "./project.css"

function ProjectItem({
  title,
  tools,
  dateCreated,
  description,
  linkOne,
  linkTwo,
  linkThree,
  videoSrc,
}) {

  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const projectRef = useRef(null);
  const videoRef = useRef(null);

  // project title effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIntersectionRatio(entry.intersectionRatio);
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
  }, []);

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
  return (
    <div className="project-item">
      {projectsData.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
