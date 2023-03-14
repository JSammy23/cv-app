import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className="footer">
      <a href="https://github.com/JSammy23/cv-app" 
      target='_blank' rel="noreferrer">
              By JSammy23
              <FontAwesomeIcon className='logo' icon={faGithub} />
          </a>
    </div>
  )
}

export default Footer