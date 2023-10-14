// list -name,emal,phone -  filter from  A-Z  & Z-A all user list show  & 


//if no user - no user find





//button - add user -save & cancel button , edit user - success msg with user edited- with dialog box

// on click list item - view datails

//delete user - confirmation dialog box

//



import React, { useState,useEffect } from 'react'

function Dashboard(){



    const [allUsers,setAllUsers] = useState([]);
   const [order,setOrder] = useState('')


   //get all users
    useEffect(()=>{
        fetch('http://localhost:8000/api/allusers')
        .then((res)=>res.json())
        .then((data)=>{setAllUsers(data);})
        .catch((err)=>console.log('data fetching error:',err))
    },[])
      

        
   
    useEffect(()=>{
        sort(order)
    },[order])

    const sort = (order) => {
        let sortedData = [...allUsers]; // Create a copy of the original array
    
        if (order === 'A-Z') {
          sortedData.sort((a, b) => a.name.localeCompare(b.name));
        } else if (order === 'Z-A') {
          sortedData.sort((a, b) => b.name.localeCompare(a.name));
        }
    
        setAllUsers(sortedData);
      };

    
  return (
    <div>
           <h4> dashboards</h4>


           <button onClick={()=>setOrder('A-Z')}>Sort A-Z</button>
           <button onClick={()=>setOrder('Z-A')}>Sort Z-A</button>

           
           {allUsers ? 
           (
            <ul>
           {allUsers.map((user)=>{
            return(
             <li key={user._id}>{user.name}  |    {user.email} |  {user.phone}</li>
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






// const data = [
// {_id: '6529653e8fdb1119c6856c99', name: 'shital', email: 'shital9999@gmail.com', password: '$2a$10$T0.uoG0WDqefFMf7jwtKo.zTxl8TkcdU7RGNxqt.frEbNfFT4WAdq', phone: 12345677969,}, 
// {_id: '6529654b8fdb1119c6856c9c', name: 'shital', email: 'shital88888@gmail.com', password: '$2a$10$nWTHdl3RHsIXv/ld8Mg8A.AJ1bn19syMllmbtv/OMuyZVWoj5SIwm', phone: 12345677969,},
// {_id: '652965548fdb1119c6856c9f', name: 'shital', email: 'shital22222@gmail.com', password: '$2a$10$ip5dca.onPHDBhuWYQ5WFOIWXRD4JGQp5KZTofQfGsoh2odDqNara', phone: 12345677969,},
// {_id: '652a6344ba60ab5a20d776ec', name: 'suvarna', email: 'somavanshisuvarna48@gmail.com', password: '$2a$10$5Pk7dmRnpeh734fnmjPKq.SDTCAyfzSLrUh.HwDnRKvKWMGJhCTD.', phone: 9370519528,},
// {_id: '652a64bf25a9e9be22f36f7e', name: 'suvarna somvanshi', email: 'somavanshisuvarna489@gmail.com', password: '$2a$10$VV76/BBx4G/yCsjUK/BrV.8ZjJE.xmH13Lzynd3S/YtAaV8Dn2sRC', phone: 9370519528,},
// {_id: '652a6a7625a9e9be22f36f81', name: 'suvarna', email: 'somavanshisuvarna4898@gmail.com', password: '$2a$10$PchsUII.4gxNSH70tbEKIe1b5RobYJ/ZxholAnG6.VOIYXD6bK7/W', phone: 9370519528,},
// {_id: '652a78b885de023e3b91055a', name: 'priya', email: 'somavanshi@gmail.com', password: '$2a$10$OJU01unfot9yEXklHRUywuxp0SuWEM.xBW56SUeK2fyOt1JoNO3yK', phone: 9370519528,},
// ]






