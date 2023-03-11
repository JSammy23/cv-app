import React, { Component } from 'react'

export class Education extends Component {

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.props.onEducationChange(name, value);
    };

    handleDelete = () => {
        this.props.onDelete();
    };

  render() {
    return (
      <div className='formSection'>
        <input type="text"
        name='university'
        placeholder='University'
        onChange={this.handleInputChange}
         />
         <input type="text"
        name='city'
        placeholder='City'
        onChange={this.handleInputChange}
         />
         <input type="text"
        name='degree'
        placeholder='Degree'
        onChange={this.handleInputChange}
         />
         <input type="text"
        name='startDate'
        placeholder='From'
        onChange={this.handleInputChange}
         />
         <input type="text"
        name='endDate'
        placeholder='To'
        onChange={this.handleInputChange}
         />
         <button className='btn delete' onClick={this.handleDelete}>Delete</button>

      </div>
    )
  }
}

export default Education