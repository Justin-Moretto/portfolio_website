import projects from "./projects_db"

const displayProjects = projects.map(project => {
  return (
    <div className="project-container">
      <h4>{project.name}</h4>
      <div className="tech-list">
        {project.techs.map(tech => {
          return (
            <div className="tech">
              {'•' + tech}
            </div>
          )
        })}
      </div>
        <img className="project-demo" src={project.demo} alt="ERROR: picture broken"></img>
      <p> {project.desc} </p>
        <div className='links-wrapper'>
          <div className="links">
            <a className="link" href={project.github} target="_blank" rel="noopener noreferrer">github</a>
            <a className="link" href={project.live} target="_blank" rel="noopener noreferrer">live project</a>
        </div>
      </div>
    </div>
  )
})

function Projects(params) {
  return (
    <section>
      <div id="portfolio-header">
        Hosting for the live projects are currently broken
        <br />
        <br/>
        All web apps built with javascript, html, css, node.js and more
      </div>
      <section id="portfolio">
        {displayProjects}
      </section>
    </section>

  );
}

export default Projects;