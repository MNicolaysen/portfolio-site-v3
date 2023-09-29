import './Connect.css'

function Connect() {
  return (
    <div className='connect-container'>
      <ul className='connect-links'>
        <li>
          <a
            style={{textDecoration:'none', color:'black', listStyle:'none'}}
            href="https://www.linkedin.com/in/morton-nicolaysen/"
            target="_blank"
            rel="noopener noreferrer">
              LINKEDIN
            </a>
          </li>
        <li>
          <a
            style={{textDecoration:'none', color:'black', listStyle:'none'}}
            href="https://github.com/MNicolaysen"
            target="_blank"
            rel="noopener noreferrer">
              GITHUB
          </a>
        </li>
        <li>
          <a
            style={{textDecoration:'none', color:'black', listStyle:'none'}}
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:81e20f1b-5263-4841-8d8b-fdc8b9e9132d"
            target="_blank"
            rel="noopener noreferrer">
              RESUME
            </a>
          </li>
      </ul>
    </div>
  )
}

export default Connect
