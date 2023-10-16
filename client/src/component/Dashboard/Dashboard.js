
// button - add user-save & cancel button , edit user - success msg with user edited- with dialog box


import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import DeleteConfirmationDialog from "./confirmationDialogBox";
import AddUser from "./AddUser";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';


function Dashboard() {

  const [allUsers, setAllUsers] = useState([]);
  const [order, setOrder] = useState("");
  const[loginPerson,setLoginPerson] = useState('');

  
  const navigate = useNavigate();


// login person
const signInPerson = localStorage.getItem("user")
useEffect(()=>{
  fetch(`http://localhost:8000/api/loginPerson`,{
    method :'post',
    headers:{'Content-Type' :'application/json'},
    body:signInPerson,
  })
  .then((res)=>res.json())
  .then((data)=>{

    setLoginPerson(data); 
  })
},[signInPerson])



  // get all users
  const getAllUser =()=>{
    fetch("http://localhost:8000/api/allusers")
       .then((res) => res.json())
       .then((data) => {
         setAllUsers(data);
       })
       .catch((err) => console.log("data fetching error:", err));
  }

  useEffect(()=>{
    getAllUser()
  },[])



  //sorting
  const sort = (order) => {
    let sortedData = [...allUsers]; // Create a copy of the original array

    if (order === "A-Z") {
      sortedData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === "Z-A") {
      sortedData.sort((a, b) => b.name.localeCompare(a.name));
    }

    setAllUsers(sortedData);
  };

  useEffect(() => {
    sort(order);
  }, [order]);


  //delete user 

  const deleteUser =(_id)=>{
    console.log(_id)
    fetch(`http://localhost:8000/api/delete/${_id}`,{method:'DELETE'})
    .then(()=>{getAllUser()})
  }

const handleDeatails =(_id)=>{
 navigate(`/dashboard/userdetail/${_id}`)
 
}

 const handleAddUser =()=>{
 if(signInPerson.length===0){
  //setDialogOpen(false);
  alert('Please login to add user')
 }
}

  return (
    <div style={{display:'flex'}}>
    
    <Box   
     sx={{
        width: 300,
        height: 730,
        backgroundColor: '#3700B3',
        color:'white',
        marginLeft:'10rem',
  
        '&:hover': {
          backgroundColor: 'primary.dark',
          opacity: [1, 1, 1],
        },
      }}>
      <h2> Dashboard</h2>
      
      {loginPerson ? (
        <h5>login Person : {loginPerson.name}</h5>
      ):(<h1>...</h1>)}
      

      <span style={{marginTop:'200px'}}>
     <ListItemButton onClick={handleAddUser}>
     <AddUser  button={handleAddUser}/>
      <ListItemText/>
     </ListItemButton>

     <ListItemButton  onClick={() => setOrder("A-Z")}>
     <ListItemText primary='Sort A-Z' />
     </ListItemButton>

     <ListItemButton  onClick={() => setOrder("Z-A")}>
     <ListItemText primary='Sort Z-A' />
     </ListItemButton>
     </span>
  

      </Box>
     

     
      {allUsers ? (
            
             <Box
              sx={{
               width: 900,
               height: 730,
               backgroundColor: '#6200EE',
               marginInline:'5px',
               color:'white',
               '&:hover': {
               backgroundColor: 'primary.dark',
               opacity: [1, 1, 1],},
              }}
             >

             <h4>User Data</h4>
             
             {allUsers.map((user) => {

              return (

              <div key={user._id} >
                 <List >
                 <span key={user._id} style={{marginTop:'20px',color:'wheat'}}>
                 <ListItemButton  key={user._id}  style={{display:"flex", marginTop:'-20px', columnGap:'2rem'}}  > 
                
                 <ListItemText primary=  {user.name } onClick={()=> handleDeatails(user._id)} />
                 <ListItemText primary=  {user.email} onClick={()=> handleDeatails(user._id)} />
                 <ListItemText primary=  {user.phone} onClick={()=> handleDeatails(user._id)} />
                
                 <DeleteConfirmationDialog deleteUser={()=>deleteUser(user._id)}/>
                 </ListItemButton>
                 <Divider/>
                 </span>
                 </List>

               </div>
              )

             })}

             </Box>
         
    
            ) : (  <h3>  NO user found</h3> )
        
             }

          </div>
        );
}

export default Dashboard;



//   edgertedge48@gmail.com     pawaradscjdcjjk48@gmail.com
//    wtdsdt244243@