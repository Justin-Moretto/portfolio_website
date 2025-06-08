import blackjack from "./docs/BJS.gif"
import tweeter from "./docs/tweeter-demo.gif"
import scheduler from "./docs/scheduler-demo.gif"
import tinyapp from "./docs/urls-page.png"
import guitarMarket from "./docs/gmarket-demo.gif"
import portfolio from "./docs/portfolio.gif"

const projects = [
  {
    name: 'Blackjack Switch',
    type: ["Web", "Game"],
    github: 'https://github.com/Justin-Moretto/blackjack-switch',
    live: 'https://gracious-swartz-8e7f4d.netlify.app/',
    demo: blackjack,
    desc: 'A variation of blackjack built with react. Players are dealt two hands instead of one, and have the option to "switch" the top card of each. Players place bets, then they are dealt cards. Then they may hit, stay, double down or split (if the cards allow).',
    techs: ['react', 'express', 'psql']
  },
  {
    name: 'Guitar Market',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/Guitar-Market',
    live: 'https://guitar-market.herokuapp.com/',
    demo: guitarMarket,
    desc: 'A marketplace application where users may search for and list guitars for sale, mark them as sold and contact sellers. Users must make an account, which is stored in a database with hashed passwords. Cookie-session keeps track of signed in user. Signed-in users may add listings to their favourites.',
    techs: ['express', 'psql', 'EJS', 'cookies']
  },
  {
    name: 'Interview Scheduler',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/scheduler',
    live: 'https://nostalgic-pasteur-6e603d.netlify.app/',
    demo: scheduler,
    desc: 'React application where users may select available time slots and interviewers to book appointments throughout the week. User may then edit or delete their appointments. I also practiced testing on this app with Storybook, Jest and Cypress. Mobile friendly.',
    techs: ['react', 'psql']
  },
  {
    name: 'This portfolio site',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/portfolio_website',
    live: 'https://justin-moretto.github.io/portfolio_website/',
    demo: portfolio,
    desc: 'I built this site with react, mostly just to separate the components. I plan on implementing a few more cool features and CSS tricks, as well as working on the mobile layout.',
    techs: ['react']
  },
  {
    name: 'Tweeter',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/tweeter',
    live: 'https://justin-moretto-tweeter.herokuapp.com/',
    demo: tweeter,
    desc: 'The user submits tweets which are added to the timeline, which is uploaded and sorted instantly. Formatted for all devices, mobile and desktop. To compose a tweet, the user must click the "write new tweet" to toggle the text area.',
    techs: ['jQuery', 'ajax', 'mongoDB', 'express']
  },
  {
    name: 'tinyApp',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/tinyapp',
    live: 'https://justin-tinyapp.herokuapp.com/',
    demo: tinyapp,
    desc: 'TinyApp allows users to shorten long URLs (similar to bit.ly or tinyURL). Users must sign in to view, edit, create, and delete their shortened urls. Uses bcrypt to hash passwords and cookie-session to handle login status.',
    techs: ['express', 'EJS', 'cookies']
  },
  {
    name: 'A Ribbiting Tale',
    type: ["Game"],
    github: 'https://github.com/Justin-Moretto/tinyapp', //todo - change link
    live: 'https://justin-https://noccifer.itch.io/a-ribbitting-tale.herokuapp.com/',
    demo: tinyapp, //todo - add gif
    desc: 'PLACEHOLDER', //todo - description
    techs: ['Unity', 'C#']
  },
  {
    name: 'Magnet Merge',
    type: ["Game"],
    github: 'https://github.com/Justin-Moretto/tinyapp', //todo - change link
    live: 'https://tanspriter.itch.io/magnet-merge',
    demo: tinyapp, //todo - add gif
    desc: 'PLACEHOLDER', //todo - description
    techs: ['Unity', 'C#']
  },
]

export default projects;