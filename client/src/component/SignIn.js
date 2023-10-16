import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material/";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errs, setErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();

    const signInData = JSON.stringify(formData);

    console.log(signInData);

    fetch("http://localhost:8000/api/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: signInData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.message === "successful login") {
          localStorage.setItem('user',JSON.stringify(formData))
          navigate("/dashboard");
        } else {
          setErr(data.message);
        }
      })
      .catch((err) => {
        //console.log(err);
        setErr("An error occurred during sign-in");
      });
  };

  

  return (
    <>

    <Box

          sx={{
               width: 500,
               height: 700,
               backgroundColor: '#6200EE',
               marginInline:'20px',
               color:'white',
               
               
               '&:hover': {
               backgroundColor: 'primary.dark',
               opacity: [1, 1, 1],},
              }}
    
    >

               {/* display:'flex',
               flexWrap:'wrap',
               justifyContent:'center',  
               marginLeft:'30vw', */}

      <h3 style={{paddingTop:'14vh'}}>SignIn</h3>
      <form onSubmit={submit}>
     
        <TextField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        /><br/>
        <TextField
          label="password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        /><br/><br/>
        <Button type="submit" variant='contained'>submit</Button>
      </form>

      {errs && <p>{errs}</p>}

      <h5 style={{marginTop:'14vh'}}>
        If you not have account signIn here :  <Button variant='contained'
          onClick={() => {
            navigate("/");
          }}
        >
          SignUp
        </Button>
      </h5>


      </Box>
    </>
  );
}

export default SignIn;
