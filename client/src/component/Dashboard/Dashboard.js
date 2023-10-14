// list -name,emal,phone -  filter from  A-Z  & Z-A all user list show  & 


//if no user - no user find





//button - add user -save & cancel button , edit user - success msg with user edited- with dialog box

// on click list item - view datails

//delete user - confirmation dialog box

//



import React, { useState,useEffect } from 'react'

function Dashboard(){

    const [allusers,setAllUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:8000/api/allusers')
        .then((res)=>res.json())
        .then((data)=>{console.log('Data received:', data);setAllUsers(data);})
        .catch((err)=>console.log('data fetching error:',err))
    },[])
      
    console.log(allusers)

  return (
    <div>
           <h4> dashboards</h4>
           
           {allusers ? 
           (
            <ul>
           {allusers.map((user)=>{
            return(
             <li key={user.id}>{user.name}{user.email}{user.phone}</li>
            )
           })}
           </ul>

           ):(
            <h3>NO user found</h3>
           )}
          

    </div>
  )
}

export default Dashboard
