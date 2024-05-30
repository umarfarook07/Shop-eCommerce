import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import './styles.css'; // Import your CSS as before

function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the email submission to reset the password here
        console.log(email); // For demonstration, replace with your actual submission logic
    };

    return (
        
            <form className='form-container' id="forgotPasswordForm" onSubmit={handleSubmit}>
                <div className="form-header">
                    <h1>Forgot Password</h1>
                    <p>Enter your email to reset your password</p>
                </div>
                <div className="data-input">
                    <label>
                        Email Address
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>
                <div className="form-footer">
                    <span>Remember your password?<Link to="/login"> Login </Link>here</span>
                    <button type="submit">Reset Password</button>
                </div>
            </form>
        
    );
}

export default ForgotPassword;
