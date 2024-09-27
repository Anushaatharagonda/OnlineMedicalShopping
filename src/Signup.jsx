import React, { useState } from 'react'
import './Styles/login.css'; 

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [conpass, setConpass] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        const Data= {
            username: username,
            password: password,
            Email: email,
                    }
        
    
        // if (!username || !password || password) {
        //   setError('Please fill in both fields.');
        //   return;
        // }
if (password === conpass){
    console.log(Data)
}
else{
    alert("checkpassword")
}
      
        
      };

  return (
    <div className="login-container">
        <div className="container">

    <h1>Registration </h1>

      <form onSubmit={handleSignup}>
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
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className="input-field">
            <input
              type="password"
              placeholder="ConfromPassword"
              value={conpass}
              onChange={(e) => setConpass(e.target.value)}
              required
            />
          </div>
          

        <button type='submit'>submit</button>
      </form>

      <p>Already you have Account? <a href='/login'>Login</a></p>
    </div></div>
  )
}

export default Signup
