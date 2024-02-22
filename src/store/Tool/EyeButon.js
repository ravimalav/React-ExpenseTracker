// Filename - App.js

import React, { useState } from "react";

import "./App.css";

const EyeButton = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="App">
      <div>
        <input
          id="pass"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <label for="check">Show Password</label>
        <input
          id="check"
          type="checkbox"
          value={showPassword}
          onChange={() => setShowPassword((prev) => !prev)}
        />
      </div>
      <br />
    </div>
  );
};

export default EyeButton;
