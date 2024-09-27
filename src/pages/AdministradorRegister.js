import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users", {
        email: email, // Use state value
        password: password, // Use state value
        username: username, // Use state value
      });
      setMessage(response.data.message); // Show success message
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error); // Show error message
      } else {
        setMessage("Error registering user: " + error.message);
      }
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label>Username:</label>
          <input
            type="text" // Correct type
            value={username} // Correct value
            onChange={(e) => setUsername(e.target.value)} // Correct handler
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email" // Use type email for validation
            value={email} // Correct value
            onChange={(e) => setEmail(e.target.value)} // Correct handler
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
