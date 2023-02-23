import React, { useState } from "react";
import "../login/Login.css";
import { Link, useNavigate } from "react-router-dom";
import accountService from "../../services/accountService";

const Signup = () => {
  const [text, setText] = useState({
    email:"",
    username:"",
    password:""
  })

  const naviagate = useNavigate()

  const handleChange = (e) => {
    setText((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleClick = async e => {
    e.preventDefault()
    naviagate("/")
    accountService.signUp(text)
  }

  console.log(text)

  return (
    <>
      <div className="frost">
        <div className="left">
            <h1>Sign Up</h1>
            <p>If you do not have an account, create one right now and enjoy the world of Web-Technology and connect with people.</p>
        </div>
        <form action="" method="post">
          <div className="right">
              <input type="email" name="email" id="email" placeholder="E Mail" onChange={handleChange}/>
              <input type="text" name="username" id="username" placeholder="Username" onChange={handleChange}/>
              <input type="password" name="password" id="password" placeholder="Password" onChange={handleChange}/>
              {/* <input type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" /> */}
              <button type="submit" className="create" onClick={handleClick}>Sign Up</button>
              <Link to="/"><a href="/">Back to Login</a></Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
