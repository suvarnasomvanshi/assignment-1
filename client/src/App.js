import './App.css';
import React from "react";
import SignUp from './component/signUp/signUp';
import StatesOption from "./component/signUp/StatesOption"
import Dashboard from "./component/Dashboard/Dashboard";
import {Routes, Route} from 'react-router-dom'
import UserDetail from './component/Dashboard/UserDetail';
import SignIn from "./component/SignIn"
function App() {
  return (
    <div className="App">
         
        <Routes>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/dashboard/userdetail/:_id" element={<UserDetail/>}/>
        </Routes>
          
    </div>
  );
}

export default App;
