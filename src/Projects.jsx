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
        <div>
          {['All', 'Web', 'Mobile', 'Game'].map(type => (
            <label key={type}>
              <input
                type="radio"
                name="projectFilter"
                value={type}
                checked={filter === type}
                onChange={() => setFilter(type)}
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <section id="portfolio">
        {filteredProjects.map(project => (
          <div className="project-container" key={project.name}>
            <h4>{project.name}</h4>
            <div className="tech-list">
              {project.techs.map(tech => (
                <div className="tech" key={tech}>
                  {'•' + tech}
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
                {/* <a
                  className="link"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  live project
                </a> */}
                <a
                  className="link"
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