import React, { Component }  from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import CVCard from "../CVCard";



export class Form extends Component {
  constructor() {
    super();
    this.state = {
      personalInfo: {
        firstName: '',
        lastName: '',
        title: '',
        address: '',
        phoneNumber: '',
        email: '',
        description: ''

      }
    }
  }

  handlePersonalInfoChange = (fieldName, value) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [fieldName]: value,
      }
    });
  };

  render() {
    return (
      <>
      
      <div className="wrapper">
        <section className="card">
          <Personal
            personalInfo={this.state.personalInfo}
            onPersonalInfoChange={this.handlePersonalInfoChange}
          />
          <Experience />
        </section>
        <CVCard personalInfo={this.state.personalInfo} />
      </div>
      
      </>
    )
  }
}

export default Form