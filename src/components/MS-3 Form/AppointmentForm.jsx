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
        <span className="main-banner-container__span">Welcome to Mebid</span>
        <h1 className="main-banner-container__h1">
          We are by your side in any services
        </h1>
        <p className="main-banner-container__p">
          We provide all kinds of medical services to our patients according to
          their
          <br />
          daily needs starting from special conditions
        </p>
        <ul className="banner-list">
<<<<<<< HEAD
          <li className="banner-list__item">
            <FaAmbulance className="banner-list__icons" />
            <p className="banner-list__undertext">Urgent Care</p>
          </li>
          <li className="banner-list__item">
=======
          <li>
            <FaAmbulance className="banner-list__icons" />
            <p className="banner-list__undertext">Urgent Care</p>
          </li>
          <li>
>>>>>>> 4c2ef82 (MS-3 - Create component Appointment Form)
            <FaHandHoldingMedical className="banner-list__icons" />
            <p className="banner-list__undertext">Primary Care</p>
          </li>
        </ul>
      </div>
      <div className="main-form-container">
<<<<<<< HEAD
        <h2 className="main-form-container__h2">Book Appointment</h2>
        <p className="main-form-container__p">
          Fillup the form to make an appointment with the doctor
        </p>
=======
        <h2>Book Appointment</h2>
        <p>Fillup the form to make an appointment with the doctor</p>
>>>>>>> 4c2ef82 (MS-3 - Create component Appointment Form)
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="main-form-container__input"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="main-form-container__input"
        />
        <input
          type="date"
          placeholder="Booking Date"
          value={bookingDate}
          onChange={(e) => setBookingDate(e.target.value)}
          className="main-form-container__input"
        />
        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
<<<<<<< HEAD
          className="main-form-container__select"
=======
>>>>>>> 4c2ef82 (MS-3 - Create component Appointment Form)
        >
          <option value="">Department</option>
          <option value="department1">Department 1</option>
          <option value="department2">Department 2</option>
          <option value="department3">Department 3</option>
        </select>
        <select
          value={selectedDoctor}
          onChange={(e) => setSelectedDoctor(e.target.value)}
          className="main-form-container__select"
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
          className="main-form-container__textarea"
        ></textarea>
<<<<<<< HEAD
        <button
          type="submit"
          onClick={handleFormSubmit}
          className="main-form-container__button"
        >
          Book appointment
        </button>
=======
        <button onClick={handleFormSubmit}>Book appointment</button>
>>>>>>> 4c2ef82 (MS-3 - Create component Appointment Form)
      </div>
    </div>
  );
};

export default AppointmentForm;
