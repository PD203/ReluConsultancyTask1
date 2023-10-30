import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useUserAuth } from "../../context/UserAuthContext";

const Login = () => {
  // Initializing states

  // State for email input --
  const [email, setEmail] = useState("");

  // State for password input --
  const [password, setPassword] = useState("");

  // State for error messages --
  const [error, setError] = useState("");

  // Accessing authentication context --
  const { logIn, googleSignIn } = useUserAuth();

  
  const navigate = useNavigate();

   // Handle user login 
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      
      // Redirect to the home page upon successful login
      navigate("/"); 
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleLogin}>
        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="submit-container">
          <button type="submit" className="submit">
            Login
          </button>
        </div>
        <div className="bottom">
          <span>Don't have an account?</span>
          <Link to="/sign-up" className="link">
            {" "}
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
