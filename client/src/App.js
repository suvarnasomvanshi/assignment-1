import './App.css';
import React from "react";
import SignUp from './component/signUp/signUp';
import StatesOption from "./component/signUp/StatesOption"
import Dashboard from "./component/Dashboard/Dashboard";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
         
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<SignUp/>}/>
        </Routes>
          
    </div>
  );
}

export default App;
