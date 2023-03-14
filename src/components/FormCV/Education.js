import React from 'react'

function Education(props) {

  const handleInputChange = (event) => {
      const { name, value } = event.target;
      props.onEducationChange(name, value);
  };

  const handleDelete = () => {
      props.onDelete();
  };

  return (
    <div className='formSection'>
      <input type="text"
      name='university'
      placeholder='University'
      onChange={handleInputChange}
       />
       <input type="text"
      name='city'
      placeholder='City'
      onChange={handleInputChange}
       />
       <input type="text"
      name='degree'
      placeholder='Degree'
      onChange={handleInputChange}
       />
       <input type="text"
      name='startDate'
      placeholder='From'
      onChange={handleInputChange}
       />
       <input type="text"
      name='endDate'
      placeholder='To'
      onChange={handleInputChange}
       />
       <button className='btn delete' onClick={handleDelete}>Delete</button>

    </div>
  )
  
}

export default Education