import React, { useState } from 'react';
import './Styles/medicine.css';

const MedicinePage = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [message, setMessage] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  
  const [prescriptionFile, setPrescriptionFile] = useState(null);

  const medicines = [
    {
      id: 1,
      name: 'Aspirin',
      price: 599,
      discount: 10,
      imageUrl: './Aspirin.jpg',
      relatedImages: [
        { imageUrl: './Aspirin1.jpg', price: 587, discount: 5 },
        { imageUrl: './Aspirin 2.jpg', price: 390, discount: 7 }
      ]
    },
    {
      id: 2,
      name: 'Ibuprofen',
      price: 899,
      discount: 15,
      imageUrl: './ibru1.jpg',
      relatedImages: [
        { imageUrl: './ibup1.jpg', price: 650, discount: 10 },
        { imageUrl: './ibru2.jpg', price: 670, discount: 11 },
        { imageUrl: './ibru3.jpg', price: 650, discount: 10 },
     
      ]
    },
    {
      id: 3,
      name: 'Paracetamol',
      price: 349,
      discount: 5,
      imageUrl: './prac.jpg',
      relatedImages: [
        { imageUrl: './prac1.jpg', price: 587, discount: 5 },
        { imageUrl: './prac.jpg', price: 290, discount: 4 },
        { imageUrl: './prac3.jpg', price: 490, discount: 8 },
        { imageUrl: './prac4.jpg', price: 390, discount: 7 }
      ]
    },
    {
      id: 4,
      name: 'Amoxicillin',
      price: 1599,
      discount: 20,
      imageUrl: './Amo.jpg',
      relatedImages: [
        { imageUrl: './Amo1.jpg', price: 587, discount: 5 },
        { imageUrl: './Amo2.jpg', price: 390, discount: 7 }
      ]
    },
    {
      id: 5,
      name: 'volini',
      imageUrl: './vol.jpg',
      price: 159,
      discount: 8},
      {
        id: 6,
        name: 'cough',
        imageUrl: './cough.jpg',
        price: 59,
        discount: 10},
        {
          id: 7,
          name: 'Okacet cold',
          imageUrl: './okacet.jpg',
          price: 19,
          discount: 15},
          {
            id: 8,
            name: 'volini',
            imageUrl: './vol.jpg',
            price: 159,
            discount: 8},
            {
              id: 9,
              name: 'cough',
              imageUrl: './cough.jpg',
              price: 59,
              discount: 10},
              {
                id: 10,
                name: 'Okacet cold',
                imageUrl: './okacet.jpg',
                price: 19,
                discount: 15},
                {
      id: 11,
      name: 'volini',
      imageUrl: './vol.jpg',
      price: 159,
      discount: 8},
      {
        id: 12,
        name: 'cough',
        imageUrl: './cough.jpg',
        price: 59,
        discount: 10},
        {
          id: 13,
          name: 'Okacet cold',
          imageUrl: './okacet.jpg',
          price: 19,
          discount: 15},
          {
          id: 14,
          name: 'Antibiotic Cream',
          price: 450,
          discount: 15,
          imageUrl: './anti.jpg'},
          {
            id: 15,
            name: 'Vitamin C Tablets',
            price: 299,
            discount: 10,
            imageUrl: './vit.jpg'},
  ];

  const addToCart = (medicine) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(item => item.medicine.id === medicine.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.medicine.id === medicine.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { medicine, quantity: 1 }];
      }
    });
    setMessage(`${medicine.name} added to cart!`);
    setTimeout(() => setMessage(''), 3000);
  };
  const handlePrescriptionChange = (event) => {
    setPrescriptionFile(event.target.files[0]);
  };

  const handlePrescriptionUpload = () => {
    if (prescriptionFile) {
      // Handle the prescription upload logic here
      console.log("Uploading prescription:", prescriptionFile);
      setMessage('Prescription uploaded successfully!');
      setTimeout(() => setMessage(''), 3000);
      setPrescriptionFile(null); // Reset the input
    } else {
      setMessage('Please select a file to upload.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const incrementQuantity = (id) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.medicine.id === id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.medicine.id === id && item.quantity > 1 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ).filter(item => item.quantity > 0) 
      
    );
  };

  const toggleCart = () => {
    setShowCart(prevShowCart => !prevShowCart);
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((total, item) => total + item.medicine.price * item.quantity, 0);
    const discount = subtotal > 1000 ? subtotal * 0.1 : 0;
    const deliveryCharges = 50;
    const total = subtotal - discount + deliveryCharges;
    return { subtotal, discount, deliveryCharges, total };
  };

  const { subtotal, discount, deliveryCharges, total } = calculateTotal();

  return (
    <div className="medicine-container">
      <h1>Online Medical Shopping</h1>
      <input
        type="text"
        placeholder="Search for medicines..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <div className="prescription-upload">
        <input
          type="file"
          accept="application/pdf,image/*"
          onChange={handlePrescriptionChange}
          className="prescription-input"
        />
        <button onClick={handlePrescriptionUpload} className="upload-btn">
          Upload Prescription
        </button>
      </div>
      {message && <div className="notification">{message}</div>}
      <div className="medicine-list">
        {medicines
          .filter(medicine => medicine.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(medicine => (
            <div key={medicine.id} className="medicine-card">
              <img
                src={medicine.imageUrl}
                alt={medicine.name}
                className="medicine-image"
                onClick={() => setSelectedMedicine(medicine)}
              />
              <h2>{medicine.name}</h2>
              <p>
                Price: ₹{medicine.price} <span className="discount">({medicine.discount}% off)</span>
              </p>
              <button onClick={() => addToCart(medicine)}>Add to Cart</button>
            </div>
          ))}
      </div>

      {cart.length > 0 && (
        <button className="view-cart-button" onClick={toggleCart}>
          {showCart ? 'Hide Cart' : 'View Cart'}
        </button>
      )}

      {showCart && (
        <div className="cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    {item.medicine.name} - ₹{item.medicine.price} 
                    <div>
                      <button onClick={() => decrementQuantity(item.medicine.id)}>-</button>
                      {item.quantity}
                      <button onClick={() => incrementQuantity(item.medicine.id)}>+</button>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="cart-summary">
                <p>Subtotal: ₹{subtotal}</p>
                <p>Discount: -₹{discount}</p>
                <p>Delivery: ₹{deliveryCharges}</p>
                <h3>Total: ₹{total}</h3>
              </div>
            </>
          )}
        </div>
      )}

      {selectedMedicine && (
        <div className="related-images">
          <h2>Related Images for {selectedMedicine.name}</h2>
          <div className="related-images-list">
            {selectedMedicine.relatedImages.map((relatedItem, idx) => (
              <div key={idx} className="related-image-card">
                <img
                  src={relatedItem.imageUrl}
                  alt={`Related ${idx}`}
                  className="related-image"
                />
                <p>
                  Price: ₹{relatedItem.price} <span className="discount">({relatedItem.discount}% off)</span>
                </p>
                <button onClick={() => addToCart(relatedItem)}>Add to Cart</button>
              </div>
            ))}
          </div>
          <button onClick={() => setSelectedMedicine(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default MedicinePage;