import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
        console.log("Response status:", res.status); // Log the response status
        return res.json();
      })
      .then((data) => {
        console.log("API response:", data); // Log the API response data
        if (data.message === "successful login") {
          localStorage.setItem('user',JSON.stringify(formData))
          navigate("/dashboard");
        } else {
          setErr(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setErr("An error occurred during sign-in");
      });
  };

  

  return (
    <>
      <form onSubmit={submit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">submit</button>
      </form>

      {errs && <p>{errs}</p>}

      <h4>
        If doesent have account :{" "}
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          SignUp
        </button>
      </h4>
    </>
  );
}

export default SignIn;
