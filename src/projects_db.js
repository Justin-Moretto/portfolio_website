import blackjack from "./docs/BJS.gif"
import tweeter from "./docs/tweeter-demo.gif"
import scheduler from "./docs/scheduler-demo.gif"
import tinyapp from "./docs/urls-page.png"
import guitarMarket from "./docs/gmarket-demo.gif"
import portfolio from "./docs/portfolio.gif"
import ribbiting from "./docs/ribbit-demo.gif"
import magnetMerge from "./docs/magnet-demo.gif"
import dungeonMaze from "./docs/dungeon-maze-demo.gif"

const projects = [
  {
    name: 'Blackjack Switch',
    type: ["Web", "Game"],
    github: 'https://github.com/Justin-Moretto/blackjack-switch',
    live: 'https://gracious-swartz-8e7f4d.netlify.app/',
    demo: blackjack,
    desc: 'A variation of blackjack built with React. Players are dealt two hands instead of one, and have the option to "switch" the top card of each. Players place bets, then they are dealt cards. Then they may hit, stay, double down or split (if the cards allow).',
    techs: ['React', 'express', 'psql'],
    isLive: false
  },
  {
    name: 'Interview Scheduler',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/scheduler',
    live: 'https://nostalgic-pasteur-6e603d.netlify.app/',
    demo: scheduler,
    desc: 'React application where users may select available time slots and interviewers to book appointments throughout the week. User may then edit or delete their appointments. I also practiced testing on this app with Storybook, Jest and Cypress. Mobile friendly.',
    techs: ['React', 'psql'],
    isLive: false
  },
  {
    name: 'A Ribbiting Tale',
    type: ["Game"],
    github: 'https://github.com/jgitdaw/FrogJam2022',
    live: 'https://noccifer.itch.io/a-ribbitting-tale',
    demo: ribbiting,
    desc: 'Puzzle game. Playable in browser. The player controls a Frog who must navigate obstacles and use power-ups from flower to find his way back to his girlfriend. The player can press backspace to undo their moves. I was the solo coder on this game. We designed and built this in less than 4 weeks for a game jam (IVGD Winter FrogJam 2022 on itch.io)',
    techs: ['Unity', 'C#'],
    isLive: true
  },
  {
    name: 'This portfolio site',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/portfolio_website',
    live: 'https://justin-moretto.github.io/portfolio_website/',
    demo: portfolio,
    desc: 'I built this site with React, mostly just to separate the components. Adaptive design! Check it out on mobile!',
    techs: ['React'],
    isLive: true
  },
  {
    name: 'Dungeon Maze',
    type: ["Game"],
    github: 'https://github.com/Justin-Moretto/maze_prototype',
    live: 'https://tanspriter.itch.io/magnet-merge',
    demo: dungeonMaze,
    desc: 'Escape the maze! 3D Platformer. 3 to 5 minutes of gameplay. Move and jump. Compatible with controller as well as keyboard & mouse.',
    techs: ['Unity', 'C#'],
    isLive: false
  },
  {
    name: 'Guitar Market',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/Guitar-Market',
    live: 'https://guitar-market.herokuapp.com/',
    demo: guitarMarket,
    desc: 'A marketplace application where users may search for and list guitars for sale, mark them as sold and contact sellers. Users must make an account, which is stored in a database with hashed passwords. Cookie-session keeps track of signed in user. Signed-in users may add listings to their favourites.',
    techs: ['express', 'psql', 'EJS', 'cookies'],
    isLive: false
  },
  {
    name: 'Tweeter',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/tweeter',
    live: 'https://justin-moretto-tweeter.herokuapp.com/',
    demo: tweeter,
    desc: 'Simple Twitter clone. The user submits tweets which are added to the timeline, which is uploaded and sorted instantly. Formatted for all devices, mobile and desktop. To compose a tweet, the user must click the "write new tweet" to toggle the text area.',
    techs: ['jQuery', 'AJAX', 'mongoDB', 'express'],
    isLive: false
  },
  {
    name: 'tinyApp',
    type: ["Web"],
    github: 'https://github.com/Justin-Moretto/tinyapp',
    live: 'https://justin-tinyapp.herokuapp.com/',
    demo: tinyapp,
    desc: 'TinyApp allows users to shorten long URLs (similar to bit.ly or tinyURL). Users must sign in to view, edit, create, and delete their shortened urls. Uses bcrypt to hash passwords and cookie-session to handle login status.',
    techs: ['express', 'EJS', 'cookies', 'bcrypt'],
    isLive: false
  },
  // {
  //   name: 'Magnet Merge',
  //   type: ["Game"],
  //   github: 'https://bitbucket.org/an_moniz/gmtk21/src/main/', //todo - change link
  //   live: 'https://tanspriter.itch.io/magnet-merge',
  //   demo: magnetMerge,
  //   desc: 'PLACEHOLDER GMTK21', //todo - description
  //   techs: ['Unity', 'C#'],
  //   isLive: true
  // },
  // {
  //   name: 'Leaf Leap',
  //   type: ["Game"],
  //   github: 'https://bitbucket.org/an_moniz/gmtk21/src/main/', //todo - change link
  //   live: 'https://tanspriter.itch.io/magnet-merge', //todo
  //   demo: magnetMerge,
  //   desc: 'PLACEHOLDER GMTK21', //todo - description
  //   techs: ['Unity', 'C#'],
  //   isLive: true
  // },
  // {
  //   name: 'Spooky Maze',
  //   type: ["Game"],
  //   github: 'https://bitbucket.org/an_moniz/gmtk21/src/main/', //todo - change link
  //   live: 'https://oceanseal.itch.io/spooky-maze',
  //   demo: magnetMerge,
  //   desc: 'PLACEHOLDER GMTK21', //todo - description
  //   techs: ['Unity', 'C#'],
  //   isLive: true
  // },
]

export default projects;