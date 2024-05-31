import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import SuccessMessage from "./SuccessMessage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false); // New state for loading

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage(data.msg);
        setIsLoggedIn(true);
        setResponseData(data);
        localStorage.setItem("token", data.token);
        if (keepLoggedIn) {
          localStorage.setItem("keepLoggedIn", true);
        }
      } else {
        setMessage(data.msg);
      }
    } catch (err) {
      console.error("Error during the login process:", err);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <SuccessMessage data={responseData} />
      ) : (
        <form id="loginForm" className="form-container" onSubmit={handleLogin}>
          <div className="form-header">
            <h1>Login</h1>
            <p>Enter Login Details To Get Access</p>
          </div>
          <div className="data-input">
            <label>
              Email Address
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>

            <label>
              Password
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="description">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          <div className="form-footer">
            <p>
              Don't Have An Account? <span className="link-span"><Link to="/signup"> SignUp </Link></span>Here
            </p>
            <button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </div>
          {message && <p>{message}</p>}
        </form>
      )}
    </>
  );
}

export default Login;
