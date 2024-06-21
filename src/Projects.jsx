import projects from "./projects_db"

const displayProjects = projects.map(project => {
  return (
    <div className="project-container">
      <h4>{project.name}</h4>
      <div class="tech-list">
        {project.techs.map(tech => {
          return (
            <div class="tech">
              {'•' + tech}
            </div>
          )
        })}
      </div>
      <img class="project-demo" src={project.demo} alt="ERROR: picture broken"></img>
      <p> {project.desc} </p>
      <div class='links-wrapper'>
        <div class="links">
          <a class="link" href={project.github} target="blank">github</a>
          <a class="link" href={project.live} target="blank">live project</a>
        </div>
      </div>
    </div>
  )
})

function Projects(params) {
  return (
    <section>
      <div id="portfolio-header">
        *Hosting for most of the live projects are currently down. It's better to follow the links to the github repos.
        I hope to get the hosting back up and running sometime but it is not currently a priority for me.
      </div>
      <section id="portfolio">
        {displayProjects}
      </section>
    </section>

  );
}

export default Projects;