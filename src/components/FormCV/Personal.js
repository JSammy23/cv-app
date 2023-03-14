import React from 'react'

function Personal(props) {

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    props.onPersonalInfoChange(name, value);
  
    if (event.target.type === 'file' && event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        props.onPersonalInfoChange(name, imageUrl);
      };
      reader.readAsDataURL(event.target.files[0]);
    } else {
      props.onPersonalInfoChange(name, value);
    }
  };

  return (
    <div className='formSection'>
      <h2>Personal</h2>
      <input 
      type="text"
      required
      placeholder='First Name'
      name='firstName'
      onChange={handleInputChange} />
      <input type="text" 
      required
      name='lastName'
      placeholder='Last Name'
      onChange={handleInputChange}/>
      <input 
      type="text"
      required
      placeholder='Title'
      name='title' 
      onChange={handleInputChange}/>
      <label htmlFor="photo">
        User Image
        <input
        type="file"
        name='photo'
        onChange={handleInputChange}
         />
      </label>
      <input
      type="text"
      name='address'
      placeholder='Address'
      onChange={handleInputChange} />
      <input 
      type="text"
      name='phoneNumber'
      placeholder='Phone Number'
      onChange={handleInputChange} />
      <input type="email"
      name='email'
      placeholder='Email'
      onChange={handleInputChange} />
      <textarea name="description" 
      cols="10" 
      rows="7"
      placeholder='Description'
      onChange={handleInputChange}></textarea>
    </div>
  )
}

export default Personal