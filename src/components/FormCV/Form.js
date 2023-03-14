import React, { useState }  from "react";
import Personal from "./Personal";
import Experience from "./Experience";
import CVCard from "../CVCard";
import avatar from "../../assets/avatar.png"
import Education from "./Education";



const Form = () => {
  
  const [personalInfo, setPersonalInfo] = useState({
    firstName: '',
    title: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    description: '',
    email: '',
    photo: avatar
  });

  const [experiences, setExperiences] = useState([
    {
      position: "",
      company: "",
      city: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const [educations, setEducations] = useState([
    {
      university: '',
      city: '',
      degree: '',
      startDate: '',
      endDate: '',
    },
  ]);
  
  

  const handlePersonalInfoChange = (fieldName, value) => {
    setPersonalInfo((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleExperienceChange = (experienceIndex, fieldName, value) => {
    setExperiences((prevState) => {
      const updatedExperiences = [...prevState];
      updatedExperiences[experienceIndex] = {
        ...updatedExperiences[experienceIndex],
        [fieldName]: value,
      };
      return updatedExperiences;
    });
  };

  const handleEducationChange = (educationIndex, fieldName, value) => {
    setEducations((prevState) => {
      const updatedEducations = [...prevState];
      updatedEducations[educationIndex] = {
        ...updatedEducations[educationIndex],
        [fieldName]: value,
      };
      return updatedEducations;
    });
  };

  const addExperience = () => {
    setExperiences((prevState) => [
      ...prevState,
      {
        position: "",
        company: "",
        city: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const addEducation = () => {
    setEducations((prevState) => [
      ...prevState,
      {
        university: '',
        city: '',
        degree: '',
        startDate: '',
        endDate: '',
      },
    ]);
  };

  const deleteExperience = (index) => {
    setExperiences((prevState) => {
      const updatedExperiences = [...prevState];
      updatedExperiences.splice(index, 1);
      return updatedExperiences;
    });
  };

  const deleteEducation = (index) => {
    setEducations((prevState) => {
      const updatedEducations = [...prevState];
      updatedEducations.splice(index, 1);
      return updatedEducations;
    });
  };



  return (
    <>
    
    <div className="wrapper">
      <section className="card">
        <Personal
          personalInfo={personalInfo}
          onPersonalInfoChange={handlePersonalInfoChange}
        />
        <h2>Experience</h2>
        {experiences.map((experience, index) => (
          <Experience
            key={index}
            experience={experience}
            onExperienceChange={(fieldName, value) =>
              handleExperienceChange(index, fieldName, value)
            }
            onDelete={() => deleteExperience(index)}
          />
        ))}
        <button className="btn add" onClick={addExperience}>Add</button>
        <h2>Education</h2>
        {educations.map((education, index) => (
          <Education 
            key={index}
            education={education}
            onEducationChange={(fieldName, value) => 
              handleEducationChange(index, fieldName, value)
            }
            onDelete={() => deleteEducation(index)}
          />
        ))}
        <button className="btn add" onClick={addEducation}>Add</button>
      </section>
      <div className="cv-card">
        <CVCard  personalInfo={personalInfo}
         experiences={experiences}
         educations={educations} />
      </div>
    </div>
    
    </>
  )
}

export default Form