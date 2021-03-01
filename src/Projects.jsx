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
    desc: 'A variation of blackjack built with react. Players are dealt two hands instead of one, and have the option to "switch" the top card of each. Players place bets, then they are dealt cards. Then they may hit, stay, double down or split (if the cards allow).',
    techs: ['react', 'express', 'psql']
  },
  {
    name: 'Guitar Market',
    github: 'https://github.com/Justin-Moretto/Guitar-Market',
    live: 'https://guitar-market.herokuapp.com/',
    demo: gutiarMarket,
    desc: 'A marketplace application where users may search for and list guitars for sale, mark them as sold and contact sellers. Users must make an account, which is stored in a database with hashed passwords. Cookie-session keeps track of signed in user. Signed-in users may add listings to their favourites.',
    techs: ['express', 'psql', 'EJS', 'cookies']
  },
  {
    name: 'Interview Scheduler',
    github: 'https://github.com/Justin-Moretto/scheduler',
    live: 'https://nostalgic-pasteur-6e603d.netlify.app/',
    demo: scheduler,
    desc: 'React application where users may select available time slots and interviewers to book appointments throughout the week. User may then edit or delete their appointments. I also practiced testing on this app with Storybook, Jest and Cypress.',
    techs: ['react', 'psql']
  },
  {
    name: 'tinyApp',
    github: 'https://github.com/Justin-Moretto/tinyapp',
    live: 'https://justin-tinyapp.herokuapp.com/',
    demo: tinyapp,
    desc: 'TinyApp allows users to shorten long URLs (similar to bit.ly or tinyURL). Users must sign in to view, edit, create, and delete their shortened urls. Uses bcrypt to hash passwords and cookie-session to handle login status.',
    techs: ['express', 'EJS', 'cookies']
  },
  {
    name: 'Tweeter',
    github: 'https://github.com/Justin-Moretto/tweeter',
    live: 'https://justin-moretto-tweeter.herokuapp.com/',
    demo: tweeter,
    desc: 'The user submits tweets which are added to the timeline, which is uploaded and sorted instantly. Formatted for all devices, mobile and desktop. To compose a tweet, the user must click the "write new tweet" to toggle the text area.',
    techs: ['jQuery', 'ajax', 'mongoDB', 'express']
  }
]


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
    <section id="portfolio">
      {displayProjects}
    </section>
  );
}

export default Projects;