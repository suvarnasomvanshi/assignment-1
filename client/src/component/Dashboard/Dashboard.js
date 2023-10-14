// list -name,emal,phone -  filter from  A-Z  & Z-A all user list show  &

// if no user - no user find

// button - add user -save & cancel button , edit user - success msg with user edited- with dialog box

// on click list item - view datails

// delete user - confirmation dialog box

//

import React, { useState, useEffect } from "react";
import DeleteConfirmationDialog from "../dialogBox"



function Dashboard() {
  const [allUsers, setAllUsers] = useState([]);
  const [order, setOrder] = useState("");


  //get all users
  useEffect(() => {
    fetch("http://localhost:8000/api/allusers")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data);
      })
      .catch((err) => console.log("data fetching error:", err));
  }, []);



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




  return (
    <div>
      <h4> dashboards</h4>

      <button onClick={() => setOrder("A-Z")}>Sort A-Z</button>
      <button onClick={() => setOrder("Z-A")}>Sort Z-A</button>

      {allUsers ? (
        <ul>
          {allUsers.map((user) => {
            return (
              <li key={user._id}>
                {user.name} | {user.email} | {user.phone}
                <button>delete User</button>
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


