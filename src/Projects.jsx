import blackjack from "./docs/BJS.gif"
import tweeter from "./docs/tweeter-demo.gif"
import scheduler from "./docs/scheduler-demo.gif"
import tinyapp from "./docs/urls-page.png";
import gutiarMarket from "./docs/gmarket-demo.gif"

const projects = [
  {
    name: 'Blackjack Switch',
    github: 'https://github.com/Justin-Moretto/blackjack-switch',
    live: 'https://gracious-swartz-8e7f4d.netlify.app/',
    demo: blackjack,
    desc: 'Blackjack game react bcrypt',//
    techs: ['react', 'express']//
  },
  {
    name: 'Guitar Market',
    github: 'https://github.com/Justin-Moretto/Guitar-Market',
    live: 'https://guitar-market.herokuapp.com/',
    demo: gutiarMarket,//
    desc: 'Guitar Market, cookie favourite, sellers, twillio bcrypt',//
    techs: ['psql']//
  },
  {
    name: 'Interview Scheduler',
    github: 'https://github.com/Justin-Moretto/scheduler',
    live: 'https://nostalgic-pasteur-6e603d.netlify.app/',
    demo: scheduler,
    desc: 'Users may select open time slots and available interviewers to book appointments. User may then edit or delete them. Tested with Storybook, Jest and Cypress.',
    techs: ['react', 'axios', 'psql']
  },
  {
    name: 'tinyApp',
    github: 'https://github.com/Justin-Moretto/tinyapp',
    live: 'https://justin-tinyapp.herokuapp.com/',
    demo: tinyapp,
    desc: 'tinyapp jQuery bcrypt', //
    techs: ['jQuery']//
  },
  {
    name: 'Tweeter',
    github: 'https://github.com/Justin-Moretto/tweeter',
    live: 'https://justin-moretto-tweeter.herokuapp.com/',
    demo: tweeter,
    desc: 'tweeter',//
    techs: []//
  }
]


const displayProjects = projects.map(project => {
  return (
    <div className="project-container">
      <h4>{project.name}</h4>
      <div class="tech-list">
        {project.techs.map(tech =>{
          return (
            <div class="tech">
              {'•' + tech}
            </div>
          )
        })}
      </div>
      <img class="project-demo" src={project.demo} alt="ERROR: picture broken"></img>
      <p> {project.desc} </p>
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