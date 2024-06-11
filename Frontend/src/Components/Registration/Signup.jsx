import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import SuccessMessage from "./SuccessMessage";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignedup, setIsSignedup] = useState(false);
  const [message, setMessage] = useState("");
  const [responseData, setResponseData] = useState(null); // New state for response data

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch("https://shop-ecommerce-3ryq.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          username: username,
          password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.msg);
        setIsSignedup(true);
        setResponseData(data); // Store the response data
        localStorage.setItem("token", data.token);
      } else {
        setMessage(data.msg);
      }
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {isSignedup ? (
        <SuccessMessage data={responseData} /> // Pass the response data as a prop
      ) : (
        <form
          id="signupForm"
          className="form-container"
          onSubmit={handleSignup}
        >
          <div className="form-header">
            <h1>Signup</h1>
            <p>Enter your details to create an account</p>
          </div>
          <div className="data-input">
            <label>
              Email Address
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label>
              Username
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <label>
              Confirm Password
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </label>
          </div>
          <div className="form-footer">
            <p>
              Already have an account?
              <span className="link-span">
                <Link to="/login"> Login </Link>
              </span>
            </p>
            <button type="submit">Signup</button>
          </div>
        </form>
      )}
    </>
  );
}

export default Signup;
