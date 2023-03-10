import React, { Component } from "react";



export class Experience extends Component {
    
    handleDelete = () => {
        this.props.onDelete();
    };
    
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.props.onExperienceChange(name, value);
    };
    


  render() {
    return (
        <div className="formSection">
            <input type="text"
            name="position"
            placeholder="Position"
            onChange={this.handleInputChange} />
            <input type="text"
            name="company"
            placeholder="Company"
            onChange={this.handleInputChange} />
            <input type="text"
            name="city"
            placeholder="City"
            onChange={this.handleInputChange} />
            <input type="text"
            name="startDate"
            placeholder="From"
            onChange={this.handleInputChange} />
            <input type="text"
            name="endDate"
            placeholder="To"
            onChange={this.handleInputChange} />
            <button className="btn delete" onClick={this.handleDelete}>Delete</button>
        </div>
    )
  }
}

export default Experience