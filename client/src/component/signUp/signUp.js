
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
console.log(formData)

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

   if(!/^\w+@\w+\.\w+$/.test(data.email)){
    error.email = 'Invalid email address';
   }

   if(!/^\d+$/.test(data.phone)){
    error.phone = 'phone contain only numbers'
   }

   if(!data.gender){
    error.gender = 'Please select gender';
   }

   if(!data.howDidYouHere){
    error.howDidYouHere = 'please select howDidYouHere'
   }

   return error;
  
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
              {error.name && <span>{error.name}</span>}
              <label>Email:</label>
              <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
               {error.name && <span>{error.name}</span>}

              <label>phone:</label>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
               {error.name && <span>{error.name}</span>}

              <label>Gender:</label>

              <label>male</label>
              <input
                type ='radio'
                name = 'gender'
                value = 'male'
                checked ={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label>female</label>
              <input
                type='radio'
                name='gender'
                value='female'
                checked ={formData.gender === 'female'}
                onChange={handleChange}
              />
               <label>other</label>
              <input
                type='radio'
                name ='gender'
                value='other'
                checked = {formData.gender === 'other'}
                onChange={handleChange}
              />
                {error.name && <span>{error.name}</span>}


              <label>how Did You Here About Us:</label>
              <label>linkdin</label>
                <input
                  type='radio'
                  name='howDidYouHere'
                  value='linkdin'
                  checked ={formData.howDidYouHere === 'linkdin'}
                  onChange={handleChange}
                />
                <label>faceBook</label>
                <input
                  type='radio'
                  name ='howDidYouHere'
                  value='faceBook'
                  checked ={formData.howDidYouHere === 'faceBook'}
                  onChange={handleChange}
                />
                <label>other platform</label>
                <input
                  type='radio'
                  name='howDidYouHere'
                  value='other platform'
                  checked ={formData.howDidYouHere === 'other platform'}
                  onChange={handleChange}
                />
                 {error.name && <span>{error.name}</span>}



                 <button type='submit'>Submit</button>


              
          </form>
    </div>
  )
}

export default SignUp
