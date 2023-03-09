import React, { Component } from 'react'

export class Personal extends Component {
    constructor(props) {
        super();
    }
  render() {
    return (
      <div className='formSection'>
        <h2>Personal</h2>
        <input 
        type="text"
        required
        placeholder='First Name'
        name='firstName' />
        <input type="text" 
        required
        placeholder='Last Name'/>
        <input 
        type="text"
        required
        placeholder='Title'
        name='title' />
        <label htmlFor="photo">
          User Image
          <input
          type="file"
          name='photo' />
        </label>
        <input
        type="text"
        name='address'
        placeholder='Address' />
        <input 
        type="text"
        name='phoneNumber'
        placeholder='Phone Number' />
        <input type="email"
        name='email'
        placeholder='Email' />
        <textarea name="descriptiom" 
        cols="10" 
        rows="7"
        placeholder='Description'></textarea>
      </div>
    )
  }
}

export default Personal