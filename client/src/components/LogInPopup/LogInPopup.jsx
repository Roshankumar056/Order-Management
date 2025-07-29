import React, { useState } from "react";
import "./LogInPopup.css";

import { assets } from "../../assets/assets";

const LogInPopup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`${isLogin ? "Login" : "Register"} attempted for: ${email}`);
  };

  return (
    <div
      className="popup-container"
      style={{
        backgroundImage: `url(${isLogin ? assets.loginImage : assets.registerImage})`,
      }}
    >
      <div className="popup">
        <div className="popup-form-container">
          <h2>{isLogin ? "Login" : "Register"}</h2>
          <p onClick={() => setIsLogin(!isLogin)} className="toggle-text">
            {isLogin
              ? "Don't have an account? Register"
              : "Already have an account? Login"}
          </p>

          <form className="popup-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                placeholder="Full Name"
                className="popup-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="popup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="popup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {!isLogin && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="popup-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            )}
            <button type="submit" className="popup-button">
              {isLogin ? "Login" : "Register"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPopup;
