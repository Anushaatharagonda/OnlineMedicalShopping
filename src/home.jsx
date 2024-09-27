
import  React, { useState }  from 'react';

//import { Link, Router } from 'react-router-dom';

const Home = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleAppointmentClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    
      <section className="main">
        <div className="left">
          <h2>We Are Here For Your Care</h2>
          <h1>We Are The Best Pharmacy</h1>
          <p>We are here for your care 24/7. Any help, just call us.</p>
          <button onClick={handleAppointmentClick}>
          Make an Appointment
        </button>
        {showDetails && (
          <div className="appointment-details">
            <h3>Appointment Details</h3>
            <p>Please fill out your information below:</p>
            <form>
              <label>
                Name:
                <input type="text" required />
              </label>
              <label>
                Phone:
                <input type="tel" required />
              </label>
              <label>
                Date:
                <input type="date" required />
              </label>
              <label>
                Time:
                <input type="time" required />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
        <div className="right">
          <img src="./homeimage.jpg" alt="Home" />
        </div>
      </section>
   
  );
};

export default Home;
