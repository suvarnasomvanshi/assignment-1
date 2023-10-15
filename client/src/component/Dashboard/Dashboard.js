// list -name,emal,phone -  filter from  A-Z  & Z-A all user list show  &

// if no user - no user find

// button - add user -save & cancel button , edit user - success msg with user edited- with dialog box

// on click list item - view datails




import React, { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import DeleteConfirmationDialog from "./confirmationDialogBox";



function Dashboard() {
  const [allUsers, setAllUsers] = useState([]);
  const [order, setOrder] = useState("");
  const navigate = useNavigate();


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

  return (
    <div>
      <h4> dashboards</h4>

      <button>add new user</button>

      <button onClick={() => setOrder("A-Z")}>Sort A-Z</button>
      <button onClick={() => setOrder("Z-A")}>Sort Z-A</button>

      {allUsers ? (
        <ul>
          {allUsers.map((user) => {
            return (

              <li key={user._id}>
                
                <div onClick={()=>handleDeatails(user._id)}>
                {user.name} | {user.email} | {user.phone}
                </div>
            
               <DeleteConfirmationDialog deleteUser={()=>deleteUser(user._id)}/>
              
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>NO user found</h3>

         

        
      )}
    </div>
  );
}

export default Dashboard;
