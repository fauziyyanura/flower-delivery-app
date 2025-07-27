import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

const SignUp = () => {
  const [name, setName] = useState("");           
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const response = await fetch("https://flower-delivery-app.onrender.com/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),  
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        alert("Registration successful!");
        navigate("/");
      } else {
        alert("Registration failed: " + (data.message || data.error || "Unknown error"));
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signin-container">
      <h2>Create Account</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Enter your name"              
          value={name}
          onChange={(e) => setName(e.target.value)}  
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Creating your account..." : "SIGN UP"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
