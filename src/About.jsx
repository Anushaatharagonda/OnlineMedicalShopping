import React from 'react';
import  './Styles/about.css';

const About = () => {
    return (
        <div className="about-container">
          
            <section>
                <h2>Welcome to Medical Store</h2>
                <p>
                    At Medical Store, we are committed to providing a reliable online shopping experience for all your medical needs. Whether you require prescription medications, over-the-counter products, or wellness items, we strive to make healthcare accessible and straightforward.
                </p>
            </section>

            <section>
                <h2>Our Mission</h2>
                <p>
                    Our mission is to empower individuals to take charge of their health by offering a comprehensive selection of high-quality medical products at competitive prices. Everyone deserves access to essential healthcare supplies, and we work tirelessly to ensure you find what you need quickly and easily.
                </p>
            </section>

            <section>
                <h2>Why Choose Us?</h2>
                <ul>
                    <li><strong>Wide Selection:</strong> A vast inventory of health essentials and specialized medications tailored to your needs.</li>
                    <li><strong>Expert Guidance:</strong> Our licensed pharmacists and healthcare professionals provide the support you need.</li>
                    <li><strong>Secure Shopping:</strong> Advanced encryption technology protects your personal information.</li>
                    <li><strong>Fast Delivery:</strong> Prompt shipping and real-time order tracking for urgent healthcare needs.</li>
                    <li><strong>Customer-Centric Service:</strong> Our dedicated team is here to assist with any inquiries or concerns.</li>
                </ul>
            </section>

            <section>
                <h2>Commitment to Quality</h2>
                <p>
                    We partner with trusted manufacturers to ensure that every product meets the highest standards of quality and safety. Your health is our priority.
                </p>
            </section>

            <section>
                <h2>Join Our Community</h2>
                <p>
                    We’re more than just a shopping platform; we’re a community dedicated to promoting health and wellness. Follow us on social media and subscribe to our newsletter for health tips, product updates, and exclusive offers.
                </p>
            </section>

            <footer>
                <p>Thank you for choosing Medical Store. We look forward to serving you!</p>
            </footer>
        </div>
    );
};

export default About;
