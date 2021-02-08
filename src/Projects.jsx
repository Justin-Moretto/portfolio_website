import blackjack from "./docs/BJS.gif"
import tweeter from "./docs/tweeter-demo.gif"
import scheduler from "./docs/Form.png"
import tinyapp from "./docs/urls-page.png";

const projects = [
  {
    name: 'Blackjack Switch',
    github: 'https://github.com/Justin-Moretto/blackjack-switch',
    live: 'https://gracious-swartz-8e7f4d.netlify.app/',
    demo: blackjack
  },
  {
    name: 'Guitar Market',
    github: 'https://github.com/Justin-Moretto/blackjack-switch',
    live: 'https://gracious-swartz-8e7f4d.netlify.app/'
  },
  {
    name: 'Interview Scheduler',
    github: 'https://github.com/Justin-Moretto/blackjack-switch',
    live: 'https://gracious-swartz-8e7f4d.netlify.app/',
    demo: scheduler
  },
  {
    name: 'tinyApp',
    github: 'https://github.com/Justin-Moretto/blackjack-switch',
    live: 'https://justin-tinyapp.herokuapp.com/',
    demo: tinyapp
  },
  {
    name: 'Tweeter',
    github: 'https://github.com/Justin-Moretto/blackjack-switch',
    live: 'https://gracious-swartz-8e7f4d.netlify.app/',
    demo: tweeter
  }
]

const displayProjects = projects.map(project => {
  return (
    <div className="project-container">
      <h4>{project.name}</h4>
      <img class="project-demo" src={project.demo} alt="ERROR: picture broken"></img>
      <p> react app express html css javascript node</p>
      <div class="links">
        <a href={project.github} target="blank">github</a>
        <a href={project.live} target="blank">live project</a>
      </div>
    </div>
  )
})

function Projects(params) {
  return (
    <section id="portfolio">
      {displayProjects}
    </section>
  );
}

export default Projects;