import React from "react";



function Experience(props) {
    
    const handleDelete = () => {
        props.onDelete();
    };
    
     const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.onExperienceChange(name, value);
    };
    

    return (
        <div className="formSection">
            <input type="text"
            name="position"
            placeholder="Position"
            onChange={handleInputChange} />
            <input type="text"
            name="company"
            placeholder="Company"
            onChange={handleInputChange} />
            <input type="text"
            name="city"
            placeholder="City"
            onChange={handleInputChange} />
            <input type="text"
            name="startDate"
            placeholder="From"
            onChange={handleInputChange} />
            <input type="text"
            name="endDate"
            placeholder="To"
            onChange={handleInputChange} />
            <button className="btn delete" onClick={handleDelete}>Delete</button>
        </div>
    )
  
}

export default Experience