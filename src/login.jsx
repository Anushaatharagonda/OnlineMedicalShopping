


import React, { useState } from 'react';
import './Styles/login.css'; 




const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

    // Mock authentication logic
    if (username === 'user' && password === 'password') {
      setSuccess('Login successful!');
      setTimeout(() => {
        window.location.href = '/'; // Redirect to home page
      }, 1000);
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login-container">
      <div className="container">
       
        <form onSubmit={handleSignIn}>
          <h1>Login</h1>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <div className="input-field">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit">Sign In</button>
          <p><a href="#">Forgot your password?</a></p>
          <p>Don't have an account? <a href="/signup">Create Account</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
