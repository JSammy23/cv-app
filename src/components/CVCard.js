import React, { Component } from 'react'

export class CVCard extends Component {
    
  render() {

    const { firstName, lastName, title, address, phoneNumber, email, description, photo } = this.props.personalInfo;

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
                    {/* <p>{Experience}</p> */}
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