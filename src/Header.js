import React, { useState }  from "react";
import "./Styles/header.css"; // Your styles

function Header() {
  const [addressType, setAddressType] = useState('current'); 
  const [customAddress, setCustomAddress] = useState('');
  

  const handleAddressChange = (event) => {
    setAddressType(event.target.value);
    if (event.target.value === 'current') {
      setCustomAddress(''); 
    }
  };
  
  return (
    <div>
      <header className="nav">
        <a href="/" className="logo">
          <img src="./logoimage.jpeg" alt="logo" />
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/medicine">Medicine</a>
        <a href="/service">Services</a>
        <a href="/contact">Contact</a>
        <a href="/login">Login</a>
        <div className="delivery-address">
        <select value={addressType} onChange={handleAddressChange} className="address-select">
          <option value="current">Use Current Location</option>
          <option value="custom">Enter Custom Address</option>
        </select>
        {addressType === 'custom' && (
          <input
            type="text"
            placeholder="Enter delivery address..."
            value={customAddress}
            onChange={(e) => setCustomAddress(e.target.value)}
            className="address-input"
          />
        )}
      </div>
      
      </header>
    </div>
  );
}

export default Header;
