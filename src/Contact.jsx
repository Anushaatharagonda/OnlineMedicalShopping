
// src/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const contactDetails = {
    phone: '1-800-555-0199',
    email: 'support@medicalshop.com',
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to your API
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '110px' }}>
      <h1>Contact Us</h1>

      <div style={{ marginBottom: '20px' }}>
        <h2>Contact Details</h2>
        <p>
          <strong>Phone:</strong> {contactDetails.phone}
        </p>
        <p>
          <strong>Email:</strong> {contactDetails.email}
        </p>
        <p>
          <strong>Address:</strong> {contactDetails.address}
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <label>
          Name:
          <br /><input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <br /><input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone:
          <br /><input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <br /><textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
