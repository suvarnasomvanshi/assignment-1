//city - show according to state selected




import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';


const states = ['Andaman and Nicobar Islands', 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chandigarh', 'Chhattisgarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Ladakh', 'Lakshadweep', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Puducherry', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'];




function SignUp(){

const [formData,setFormData]= useState({
  name : '',
  email :'',
  password :'',
  phone : '',
  gender :'',
  howDidYouHere :'',
  state:'',
})

console.log(formData)
const [error,setError] = useState({});

const navigate = useNavigate();


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

   if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*?&]).{8,}$/.test(data.password)){
    error.password = 'Password must contain at least 1 letter, 1 number, and 1 special character and be at least 8 characters long'}

   if(!/^\d+$/.test(data.phone)){
    error.phone = 'phone contain only numbers'
   }

   if(!data.gender){
    error.gender = 'Please select gender';
   }

   if(!data.howDidYouHere){
    error.howDidYouHere = 'please select howDidYouHere'
   }

   if(!data.state){
    error.state = 'please select state '
   }




   return error;
  
}


const handleSubmit =(e) =>{

  e.preventDefault();

  const newError = validateForm(formData);

  if(Object.keys(newError).length ===0){

    const jsonData = JSON.stringify(formData);

    fetch('http://localhost:8000/api/signup',{
      method : 'post',
      headers:{
        'content-type' : 'application/json',
      },
      body :jsonData
    })
    .then((res)=>res.json())
    .then((data)=>{
      if(data.message === 'User created successfully'){
        navigate('/dashboard')
      }else if(data.message === 'User already exists'){
        navigate('/signin')
      }
    })
    .catch((err)=>console.log(err))
  }

  else{
    setError(newError);
  }

}


  
  return (
    <>
    <Box
    sx={{
               width: 500,
               height: 700,
               backgroundColor: '#6200EE',
               marginInline:'20px',
               color:'white',
               display:'flex',
               flexWrap:'wrap',
               marginLeft:'30vw',
               justifyContent:'center',
               '&:hover': {
               backgroundColor: 'primary.dark',
               opacity: [1, 1, 1],},
              }}
              >

              <h2 style={{marginTop:'60px'}}>SignUp </h2>
          <form onSubmit={handleSubmit}>
          <TextField 
           label="name" 
           variant="outlined"
           type='text'
           name='name'
           value={formData.name}
           onChange={handleChange}
            />

              {error.name && <span>{error.name}</span>}

               <br/>
            
              <TextField
               label='email'
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
              />
               {error.email && <span>{error.email}</span>}
               <br/>
               
               
               <TextField
               label='password'
                type='password'
                name ='password'
                value = {formData.password}
                onChange={handleChange}
               />
              {error.password && <span>{error.password}</span>}
              <br/>

             
              <TextField
               label='phone'
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
              />
               {error.phone && <span>{error.phone}</span>}

               <br/><br/>

              <label>Gender :  </label>
             
              <input
                type ='radio'
                name = 'gender'
                value = 'male'
                checked ={formData.gender === 'male'}
                onChange={handleChange}
              />
              <label>male</label>
             

              <input
                type='radio'
                name='gender'
                value='female'
                checked ={formData.gender === 'female'}
                onChange={handleChange}
              />
              <label>female</label>
              
              <input
                type='radio'
                name ='gender'
                value='other'
                checked = {formData.gender === 'other'}
                onChange={handleChange}
              />
               <label>other</label>
              {error.gender && <span>{error.gender}</span>}
               <br/><br/>


              <label>how Did You Here About Us : </label>
              
                <input
                  type='radio'
                  name='howDidYouHere'
                  value='linkdin'
                  checked ={formData.howDidYouHere === 'linkdin'}
                  onChange={handleChange}
                /><label>linkdin</label>
                
                <input
                  type='radio'
                  name ='howDidYouHere'
                  value='faceBook'
                  checked ={formData.howDidYouHere === 'faceBook'}
                  onChange={handleChange}
                /><label>faceBook</label>
                
                <input
                  type='radio'
                  name='howDidYouHere'
                  value='other platform'
                  checked ={formData.howDidYouHere === 'other platform'}
                  onChange={handleChange}
                /><label>other</label>
                 {error.howDidYouHere && <span>{error.howDidYouHere}</span>}
                 <br/><br/>


                 <label>Select a State :  </label>
                 <select name='state' value={formData.state} onChange={handleChange}>
                 <option value =''>select a State</option>
                      {states.map((state)=>(
                        <option key ={state} value={state}>{state}</option>
                      ))}

                 </select>
                {error.state && <span>{error.state}</span>}
                  <br/><br/>

      

                 <Button type='submit'variant="contained" style={{marginTop:'5vh'}}>Submit</Button>
              
          </form>

          <h5>Already have account signIn please :  <Button onClick={()=>{navigate('/signin')}} variant='outlined'>SignIn</Button></h5>
          </Box>
          
    </>
  )
}

export default SignUp
