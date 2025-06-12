import displayPic from "./docs/dp2023.jpg"
import Links from "./Links"


function Header(params) {
  return (
    <section id="header">
      
      <div className="headshot-container">
        <img src={displayPic} id="headshot" alt="Headshot" />
      </div>

      <div className="headerText-container">
          <h1>Justin Moretto</h1>
          <h1 className="title">Software Developer</h1>
          <h3>Montreal, Canada</h3>
      </div>

      <div className="links-container">
        <Links />
      </div>

    </section>
  )
}

export default Header;