import React, { Component } from "react";



export class Experience extends Component {
  render() {
    return (
      <div className="formSection">
        <h2>Experience</h2>
        <input type="text"
        name="position"
        placeholder="Position" />
        <input type="text"
        name="company"
        placeholder="Company" />
        <input type="text"
        name="city"
        placeholder="City" />
        <input type="text"
        name="startDate"
        placeholder="From" />
        <input type="text"
        name="endDate"
        placeholder="To" />
      </div>
    )
  }
}

export default Experience