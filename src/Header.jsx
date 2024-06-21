import displayPic from "./docs/dp2023.jpg"
import Links from "./Links"


function Header(params) {
  return (
    <section id="header">
      <div className="headerDiv">
        <img src={displayPic} id="headshot"></img>
      </div>

      <div className="headerDiv">
        <div id="blurb">
          <h1>Justin Moretto</h1>
          <h1>Software Developper</h1>
          <h3>Montreal, Canada</h3>
        </div>
      </div>
      <Links></Links>
    </section>
  )
}

export default Header;