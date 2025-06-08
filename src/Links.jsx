function Links(params) {
  return (
      <div id='header-links'>
         {/* TODO: Add CV download links after importing PDFs */}
         {/* <a className="link" href="./docs/Resume_EN.pdf" target="_blank" rel="noopener noreferrer">CV (EN)</a> */}
         {/* <a className="link" href="./docs/Resume_FR.pdf" target="_blank" rel="noopener noreferrer">CV (FR)</a> */}
         <a className="header_link" href="https://github.com/Justin-Moretto" target="_blank" rel="noopener noreferrer">Github</a>
         <a className="header_link" href="https://www.linkedin.com/in/justinmoretto/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
         <a className="header_link" href="https://justinmoretto.itch.io/" target="_blank" rel="noopener noreferrer">Itch.io</a>
      </div>
  )
}

export default Links