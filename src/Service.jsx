import React, { useState } from 'react';
import './Styles/service.css';

function Service() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <section>
      <div className="service">
        <div className="about">
      
          <p style={{ paddingLeft: '0%' }}>
            "<span>Medicure</span>" is the online deals site for medications supported by a US pharmacy, situated at the edge of Central Park and downtown in the 6th district of the United States.
          </p>
          <p>
            "<span>Medicure</span>" pharmacy is open Monday to Friday from 6 AM and Saturday and Sunday from 9 AM to 11 AM.
          </p>
          <p>
            As a pioneer in pharmacy, "<span>Medicure</span>" offers a worldwide selection of pharmacy items, natural medicines, aromatic healing, and medications (homeopathy, veterinary items, and over-the-counter prescriptions) at the best prices.
          </p>
          <a href="#" className="btn" onClick={handleReadMoreClick}>
            {showMore ? 'Show Less' : 'Read More'}
          </a>

          {showMore && (
            <div className="additional-info">
              <h3>Our Services</h3>
              <ul>
                <li>Prescription Refills</li>
                <li>Health Consultations</li>
                <li>Medication Therapy Management</li>
                <li>Immunizations</li>
              </ul>

              <h3>Special Offers</h3>
              <p>Check out our monthly promotions for discounts on select medications!</p>

              <h3>Testimonials</h3>
              <blockquote>
                "The staff is always friendly and helpful! I trust them with my health."
                <footer>- Satisfied Customer</footer>
              </blockquote>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Service;