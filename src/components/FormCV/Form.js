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

      },
      experiences: [
        {
          position: "",
          company: "",
          city: "",
          startDate: "",
          endDate: "",
        },
      ],
    };
  }

  handlePersonalInfoChange = (fieldName, value) => {
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [fieldName]: value,
      }
    });
  };

  handleExperienceChange = (experienceIndex, fieldName, value) => {
    this.setState((prevState) => {
      const experiences = [...prevState.experiences];
      experiences[experienceIndex] = {
        ...experiences[experienceIndex],
        [fieldName]: value,
      };
      return { experiences };
    });
  };

  addExperience = () => {
    const newExperience = {
      position: "",
      company: "",
      city: "",
      startDate: "",
      endDate: "",
    };
    this.setState((prevState) => ({
      experiences: [...prevState.experiences, newExperience],
    }));
  };

  deleteExperience = (index) => {
    const experiences = [...this.state.experiences];
    experiences.splice(index, 1);
    this.setState({ experiences });
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
          <h2>Experience</h2>
          {this.state.experiences.map((experience, index) => (
            <Experience
              key={index}
              experience={experience}
              onExperienceChange={(fieldName, value) =>
                this.handleExperienceChange(index, fieldName, value)
              }
              onDelete={() => this.deleteExperience(index)}
            />
          ))}
          <button className="btn add" onClick={this.addExperience}>Add</button>
        </section>
        <CVCard personalInfo={this.state.personalInfo} experiences={this.state.experiences} />
      </div>
      
      </>
    )
  }
}

export default Form