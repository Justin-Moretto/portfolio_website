import displayPic from "./docs/dp2023.jpg"
import Links from "./Links"


function Header(params) {
  return (
    <section id="header">
      <div className="headerDiv">
        <img src={displayPic} alt="picture broken" id="headshot"></img>
      </div>

      <div className="headerDiv">
        <div id="blurb">
          <h1>Justin Moretto</h1>
          <h1>Web Developper based in Montreal, Canada</h1>
        </div>
      </div>
      <Links></Links>
    </section>
  )
}

export default Header;