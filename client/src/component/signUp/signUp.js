
//name - only alphabates only

//email - alphanumeric only

//phone - number

// gender - radio button

// how did you here about this -radio buttons-option linkdin,facebook,other platform



//state - search bar with related search option below
//city - show according to state selected

//save - auto suggested search box

//save button & canel button


import React, { useState } from 'react'

function SignUp(){

const [formData,setFormData]= useState({
  name : '',
  email :'',
  phone : '',
  gender :'',
  howDidYouHere :'',
})

const [error,setError] = useState({});




const handleChange = (e)=>{
  const {name,value} = e.target;
  setFormData({...formData,[name]:value});
}

const validateForm =(data)=>{
   const error = {};

   if(!/^[A-Za-z\s]+$/.test(data.name)){
     error.name = 'name only contain alphabates & spaces'
   }

   if()
}

const handleSubmit =(e) =>{

  e.preventDefault();

  const newError = validateForm(formData);

  if(Object.keys(newError).length ===0){
    console.log('form submitted :', formData);
  }
  else{
    setError(newError);
  }
}


  
  return (
    <div>
          <form onSubmit={handleSubmit}>
              
              <label>name:</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
              />

              <label>Email:</label>
              <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />

              <label>phone:</label>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />

              <label>Gender:</label>

              <label>male</label>
              <input
                type ='radio'
                name = 'male'
                value = 'male'
                checked ={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label>female</label>
              <input
                type='radio'
                name='female'
                value='female'
                checked ={formData.gender === 'female'}
                onChange={handleChange}
              />
               <label>other</label>
              <input
                type='radio'
                name ='other'
                value='other'
                checked = {formData.gender === 'other'}
                onChange={handleChange}
              />

              <label>how Did You Here About Us:</label>
              <label>linkdin</label>
                <input
                  type='radio'
                  name='linkdin'
                  value='linkdin'
                  checked ={formData.howDidYouHere === 'linkdin'}
                  onChange={handleChange}
                />
                <label>faceBook</label>
                <input
                  type='radio'
                  name ='faceBook'
                  value='faceBook'
                  checked ={formData.howDidYouHere === 'faceBook'}
                  onChange={handleChange}
                />
                <label>other platform</label>
                <input
                  type='radio'
                  name='other platform'
                  value='other platform'
                  checked ={formData.howDidYouHere === 'other platform'}
                  onChange={handleChange}
                />




              
          </form>
    </div>
  )
}

export default SignUp
