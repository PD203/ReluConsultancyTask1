import React, {  useState } from "react";
import "./register.css";
import email_icon from "../../assets/email.png";
import password_icon from "../../assets/password.png";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

const Register = () => {
  // Initializing states

  // State for email input --
  const [email, setEmail] = useState("");

 
  // State for password input --
  const [password, setPassword] = useState("");

   // State for error messages --
  const [error, setError] = useState("");

    // Accessing user authentication functions from the context
  const { signUp } = useUserAuth();


  let navigate = useNavigate();


  // Handle user registration
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); 
    try {
      await signUp(email, password);

      // Redirect to the login page upon successful registration --
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }

  };
  return (
    <div className="login-container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <form onSubmit={handleRegister}>
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
            Sign Up
          </button>
        </div>
        <div className="bottom">
          <span> Already have an account?</span>
          <Link to="/login" className="link">
            {" "}
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
