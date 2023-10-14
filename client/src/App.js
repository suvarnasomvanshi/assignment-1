import './App.css';
import React from "react";
import SignUp from './component/signUp/signUp';
import StatesOption from "./component/signUp/StatesOption"
import Dashboard from "./component/Dashboard/Dashboard";
import {Routes, Route} from 'react-router-dom'
import DeleteConfirmationDialog from "./component/dialogBox"

function App() {
  return (
    <div className="App">
         
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<SignUp/>}/>
          <Route path="/dialog" element={<DeleteConfirmationDialog/>}/>
        </Routes>
          
    </div>
  );
}

export default App;
