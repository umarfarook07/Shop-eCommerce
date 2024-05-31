import React from "react";
import { Link } from "react-router-dom";
import "./ProfileStyles.css";
const UserProfile = () => {
  return (
    <div className="warning-container">
      <h2>Please Log In or Sign Up</h2>
      <div>
        <button>
      <Link to="/login"> Login </Link>
        </button>
        <button>

      <Link to="/signup"> SignUp </Link>
        </button>
      </div>
    </div>
  );
};

export default UserProfile;
