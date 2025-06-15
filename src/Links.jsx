function Links(params) {
  return (
    <div id='header-links'>
      <a className="button-link header_link" href="https://github.com/Justin-Moretto" target="_blank" rel="noopener noreferrer">Github</a>
      <a className="button-link header_link" href="https://www.linkedin.com/in/justinmoretto/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a className="button-link header_link" href="https://justinmoretto.itch.io/" target="_blank" rel="noopener noreferrer">Itch.io</a>

      <div className="cv-links">
        <a
          href="/JMoretto_CV_en.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button-link cv-link"
        >
          CV (EN)
        </a>
        <a
          href="/JMoretto_CV_fr.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="button-link cv-link"
        >
          CV (FR)
        </a>
      </div>
    </div>
  )
}

export default Links;
