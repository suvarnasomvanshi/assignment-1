import './App.css';
import React from "react";
import SignUp from './component/signUp/signUp';
import StatesOption from "./component/signUp/StatesOption"
import Dashboard from "./component/Dashboard/Dashboard";
import {Routes, Route} from 'react-router-dom'
import DeleteConfirmationDialog from "./component/dialogBox"
import UserDetail from './component/Dashboard/UserDetail';

function App() {
  return (
    <div className="App">
         
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/dialog" element={<DeleteConfirmationDialog/>}/>
          <Route path="/dashboard/userdetail/:_id" element={<UserDetail/>}/>
        </Routes>
          
    </div>
  );
}

export default App;
