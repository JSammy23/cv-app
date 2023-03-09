import React, { Component } from 'react'

export class CVCard extends Component {
    constructor(props) {
        super(props);
    }

  render() {

    const { firstName, lastName, title, address, phoneNumber, email, description } = this.props.personalInfo;

    return (
      <div className='card'>
        <div className='cvHeader'>
            <h1>{firstName} {lastName}</h1>
            <h2>{title}</h2>
        </div>
      </div>
    )
  }
}

export default CVCard