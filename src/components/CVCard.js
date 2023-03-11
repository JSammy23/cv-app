import React, { Component } from 'react'

export class CVCard extends Component {
    
  render() {

    const { firstName, lastName, title, address, phoneNumber, email, description, photo } = this.props.personalInfo;

    const { experiences } = this.props;

    const { educations } = this.props;

    return (
      <div className='card'>
        <div className='cvHeader'>
            <h1>{firstName} {lastName}</h1>
            <h2>{title}</h2>
        </div>
        <div className='cvWrapper'>
            <div className='cvLeftCol'>
                <div className='infoSection'>
                    <h3 className='infoTitle'>Description</h3>
                    <p>{description}</p>
                </div>
                <div className='infoSection'>
                    <h3 className='infoTitle'>Experience</h3>
                    {experiences.map((experience, index) => (
                        <div key={index} className="expWrapper">
                            <div className="dates">
                                {experience.startDate} - {experience.endDate}
                            </div>
                            <div className="expInfo">
                                <h3>{experience.position}</h3>
                                {experience.company}, {experience.city}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="infoSection">
                    <h3 className="infoTitle">Education</h3>
                    {educations.map((education, index) => (
                        <div key={index} className="expWrapper">
                            <div className="dates">
                                {education.startDate} - {education.endDate}
                            </div>
                            <div className="expInfo">
                                <h3>{education.degree}</h3>
                                {education.university}, {education.city}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='cvRightCol'>
                <img src={photo} alt="" />
                <h3 className='infoTitle'>Personal Details</h3>
                <h3>Address</h3>
                <p>{address}</p>
                <h3>Phone Number</h3>
                <p>{phoneNumber}</p>
                <h3>Email</h3>
                <p>{email}</p>
            </div>
        </div>
      </div>
    )
  }
}

export default CVCard