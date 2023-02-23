import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="frost">
        <div className="left">
          <h1>GTA V</h1>
          <p>It is possible for the head-count of cars</p>
        </div>
        <form action="" className="right">
          <input type="text" name="username" id="username" placeholder="Username" />
          <input type="password" name="password" id="password" placeholder="Password" />
          <button type="submit" className="create">Log in</button>
          <Link to="/forgot"><a href="/">Forgot Password?</a></Link>
          <Link to="/signup"><button>Create Account</button></Link>
        </form>
      </div>
    </>
  );
}

export default Login;
