import { projectsData } from "./projectsData";
import "./project.css"

function ProjectItem({
  title,
  imageSrc,
  alt,
  tools,
  dateCreated,
  description,
  linkOne,
  linkTwo,
  linkThree,
  videoSrc,
}) {

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="project">
      <h3 className="project-header">{title}</h3>
      <img className="project-img" src={imageSrc} alt={alt} />
      <h3>{tools}</h3>
      <h3>{dateCreated}</h3>
      <p className="project-description">{description}</p>
      <ul className="project-links">
          {linkOne && (
            <button
              className={"card-button"}
              onClick={() => handleButtonClick(linkOne)}
            >
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </button>
          )}
          {linkTwo && (
            <button
              className={"card-button"}
              onClick={() => handleButtonClick(linkTwo)}
            >
              <i className="fa-brands fa-github"></i>
            </button>
          )}
          {linkThree && (
            <button
              className={"card-button"}
              onClick={() => handleButtonClick(linkThree)}
            >
              <i className="fa-brands fa-youtube"></i>
            </button>
          )}
      </ul>
      <video className="project-video" src={videoSrc}></video>
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
