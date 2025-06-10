import { useState } from "react";
import projects from "./projects_db";

function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(project => {
    return filter === "All" || project.type.includes(filter);
  });

  return (
    <section>
      <div id="portfolio-header">
        <div className="filter-group">
          <label className="filter-label filter-static">Filter:</label>
          {['All', 'Web', 'Mobile', 'Game'].map(type => (
            <label key={type} className="filter-label">
              <input
                type="radio"
                name="projectFilter"
                value={type}
                checked={filter === type}
                onChange={() => setFilter(type)}
                className="filter-input"
              />
              <span className="filter-text">{type}</span>
            </label>
          ))}
        </div>
      </div>

      <section id="portfolio">
        {filteredProjects.map(project => (
          <div className="project-container" key={project.name}>
            <h4>{project.name}</h4>
            <div className="tech-list">
              {project.type.map(type => (
                <div className="project_type" key={type}>
                  {type}
                </div>
              ))}
              {project.techs.map(tech => (
                <div className="tech" key={tech}>
                  {tech}
                </div>
              ))}
            </div>
            <img
              className="project-demo"
              src={project.demo}
              alt="ERROR: picture broken"
            />
            <p>{project.desc}</p>
            <div className='links-wrapper'>
              <div className="links">
                {project.isLive && (
                  <a
                    className="button-link link live-button"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    live project
                  </a>
                )}
                <a
                  className="button-link link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

export default Projects;