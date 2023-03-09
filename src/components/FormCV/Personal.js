import React, { Component } from 'react'

export class Personal extends Component {
    constructor(props) {
        super(props);
    }

    handleInputChange = (event) => {
      const { name, value } = event.target;
      this.props.onPersonalInfoChange(name, value);
    };

  render() {
    return (
      <div className='formSection'>
        <h2>Personal</h2>
        <input 
        type="text"
        required
        placeholder='First Name'
        name='firstName'
        onChange={this.handleInputChange} />
        <input type="text" 
        required
        name='lastName'
        placeholder='Last Name'
        onChange={this.handleInputChange}/>
        <input 
        type="text"
        required
        placeholder='Title'
        name='title' 
        onChange={this.handleInputChange}/>
        <label htmlFor="photo">
          User Image
          <input
          type="file"
          name='photo'
           />
        </label>
        <input
        type="text"
        name='address'
        placeholder='Address'
        onChange={this.handleInputChange} />
        <input 
        type="text"
        name='phoneNumber'
        placeholder='Phone Number'
        onChange={this.handleInputChange} />
        <input type="email"
        name='email'
        placeholder='Email'
        onChange={this.handleInputChange} />
        <textarea name="description" 
        cols="10" 
        rows="7"
        placeholder='Description'
        onChange={this.handleInputChange}></textarea>
      </div>
    )
  }
}

export default Personal