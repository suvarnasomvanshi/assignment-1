import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';



const UserDetail = () => {

  const {_id} = useParams();

const[userDetails,setUserDetails] = useState(null);

console.log(userDetails)
useEffect(()=>{

    fetch(`http://localhost:8000/api/userdetail/${_id}`)
    .then((res)=>res.json())
    .then((data)=>setUserDetails(data))
    .catch((err)=>console.log(err))
    
  },[_id])


  return (
    <>
       <h4>User Detail</h4>

       {userDetails ? (
        <div>
          <p>_id: {userDetails._id}</p>
          <p>Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>Phone: {userDetails.phone}</p>
          <p>state: {userDetails.state}</p>
          <p>gender: {userDetails.gender}</p>
        </div>
       ):(
        <h6>no userDetails fournd</h6>
       )}


    </>
  )
}

export default UserDetail
