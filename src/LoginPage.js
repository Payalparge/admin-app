import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css'; 

const LoginPage = () => {
  const [username, setUsername] = useState(''); // Add username state
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/v1/auth/login', {
        username, 
        password,
      });

      if (response.status === 200) {
        console.log('Login successful:', response.data.token);
        localStorage.setItem('token',response.data.token)
        navigate('/'); 
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>} 
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text" // Change input type to text
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state on change
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
