import React, { useState } from "react";
import { FaAmbulance, FaHandHoldingMedical } from "react-icons/fa";
import "./AppointmentForm.scss";

const AppointmentForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [bookingDate, setBookingDate] = useState("");
  const [department, setDepartment] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission goes here
    console.log("Form submitted!");
  };
  return (
    <div className="main-banner-area">
      <div className="main-banner-container">
        <span>Welcome to Mebid</span>
        <h1>We are by your side in any services</h1>
        <p>
          We provide all kinds of medical services to our patients according to
          their
          <br></br>
          daily needs starting from special conditions
        </p>
        <ul className="banner-list">
          <li>
            <FaAmbulance />
            <span>Urgent Care</span>
          </li>
          <li>
            <FaHandHoldingMedical />
            <span>Primary Care</span>
          </li>
        </ul>
      </div>
      <div className="main-form-container">
        <h2>Appointment Booking</h2>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Booking Date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
        >
          <option value="">Select a Doctor</option>
          <option value="doctor1">Doctor 1</option>
          <option value="doctor2">Doctor 2</option>
          <option value="doctor3">Doctor 3</option>
        </select>
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleFormSubmit}>Book Appointment</button>
      </div>
    </div>
  );
};

export default AppointmentForm;
