import blackjack from "./docs/BJS.gif"
import tweeter from "./docs/tweeter-demo.gif"
import scheduler from "./docs/scheduler-demo.gif"
import tinyapp from "./docs/urls-page.png"
import gutiarMarket from "./docs/gmarket-demo.gif"
import portfolio from "./docs/portfolio.gif"

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
    desc: 'React application where users may select available time slots and interviewers to book appointments throughout the week. User may then edit or delete their appointments. I also practiced testing on this app with Storybook, Jest and Cypress. Mobile friendly.',
    techs: ['react', 'psql']
  },
  {
    name: 'This portfolio site',
    github: 'https://github.com/Justin-Moretto/portfolio_website',
    live: 'https://justin-moretto.github.io/portfolio_website/',
    demo: portfolio,
    desc: 'I built this site with react, mostly just to seperate the components. I plan on implementing a few more cool features and CSS tricks, as well as working on the mobile layout.',
    techs: ['react']
  },
  {
    name: 'Tweeter',
    github: 'https://github.com/Justin-Moretto/tweeter',
    live: 'https://justin-moretto-tweeter.herokuapp.com/',
    demo: tweeter,
    desc: 'The user submits tweets which are added to the timeline, which is uploaded and sorted instantly. Formatted for all devices, mobile and desktop. To compose a tweet, the user must click the "write new tweet" to toggle the text area.',
    techs: ['jQuery', 'ajax', 'mongoDB', 'express']
  },
  {
    name: 'tinyApp',
    github: 'https://github.com/Justin-Moretto/tinyapp',
    live: 'https://justin-tinyapp.herokuapp.com/',
    demo: tinyapp,
    desc: 'TinyApp allows users to shorten long URLs (similar to bit.ly or tinyURL). Users must sign in to view, edit, create, and delete their shortened urls. Uses bcrypt to hash passwords and cookie-session to handle login status.',
    techs: ['express', 'EJS', 'cookies']
  },
  // {
  //   name: 'Sick Fits',
  //   github: '',
  //   live: '',
  //   demo: '',
  //   desc: 'A marketplace app built with react',
  //   techs: ['react', 'MongoDB', 'GraphQL', 'Next.js']
  // }
]

export default projects;