import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://github.com/JSammy23/cv-app" 
        target='_blank'>
                By JSammy23
                <FontAwesomeIcon className='logo' icon={faGithub} />
            </a>
      </div>
    )
  }
}

export default Footer