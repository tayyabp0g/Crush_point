import React, { useState } from "react";
import "../../App.css";
import logo from "../../../assets/logo.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={logo} alt="Crushpoint Logo" className="logo" />
      </div>
      <div className="signup-right">
        <form className="signup-form" onSubmit={e => e.preventDefault()}>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "-20px" }}>
            <svg width="80" height="80" viewBox="0 0 60 60">
              {/* Top semi-circle (head) */}
              <path d="M10 35 Q30 0 50 35 Z" fill="#7c3aed" />
              {/* Bottom half-circle (body) */}
              <path d="M15 35 A15 15 0 0 0 45 35 Q30 60 15 35" fill="#fbbf24" />
              {/* Middle circle (face) */}
              <circle cx="30" cy="25" r="7" fill="#fff" />
              {/* Middle overlay (pink) */}
              <circle cx="30" cy="40" r="10" fill="#f43f5e" />
            </svg>
          </div>
          <h2>Enter your details</h2>
          <div className="form-divider">
            <span>Or</span>
          </div>
          <label>Email Address</label>
          <input type="email" placeholder="Enter your email address" />
          <label>Plant Code</label>
          <input type="text" placeholder="Enter Plant Code" />
          <label>Password</label>
          <div className="input-with-icon">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />
            <span
              className="eye-icon"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{ cursor: "pointer" }}
            >
              {showPassword ? (
                // Eye-off SVG
                <svg width="19" height="18" fill="none" stroke="#fff" strokeWidth="1" viewBox="0 0 24 24">
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-7 0-11-7-11-7a21.77 21.77 0 0 1 5.06-6.06M1 1l22 22"/>
                  <path d="M9.53 9.53A3 3 0 0 0 12 15a3 3 0 0 0 2.47-5.47"/>
                </svg>
              ) : (
                // Eye SVG
                <svg width="18" height="18" fill="none" stroke="#fff" strokeWidth="1" viewBox="0 0 24 24">
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </span>
          </div>
          <button type="submit" className="signup-btn">
            Login
          </button>
          <div className="forgot-password-link">
            Forget Password?
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
