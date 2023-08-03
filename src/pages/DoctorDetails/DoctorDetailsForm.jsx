import React, { useState } from 'react'
import './DoctorDetailsForm.scss'

const DoctorDetails = () => {
  const skillsData = [
    'Safety and fall prevention',
    'Dental implants',
    'Dental demi text',
    'Filling content',
    'Root canal demi text',
    'Orthodontics prob'
  ]

  const [selectedService, setSelectedService] = useState('')

  // State to store the selected date
  const [selectedDate, setSelectedDate] = useState('')

  const doctorImg =
    'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393390/medical-site/doctors-5_w2yhmu.jpg'

  return (
    <div className="doctor-details">
      <div className="doctor-details__first-column">
        <img className="doctor-details__image" src={doctorImg} alt="Doctor" />

        <div className="doctor-details__name-specialty">
          <h2 className="doctor-details__name">Dr. Perry Barkley</h2>
          <p className="doctor-details__specialty">Family Physician</p>
        </div>

        <div className="doctor-details__qualifications">
          <div className="doctor-details__qualifications-box">
            <h3 className="doctor-details__qualifications-heading">
              Qualifications
            </h3>
            <ul className='doctor-details__qualifications-list'>
              <li>Master of science</li>
              <li>University of medical science</li>
            </ul>
          </div>
        </div>

        <div className="doctor-details__memberships">
          <div className="doctor-details__memberships-box">
            <h3 className="doctor-details__memberships-heading">Memberships</h3>
            <ul className='doctor-details__membership-list'>
              <li>European society of cardiology</li>
              <li>Fellow royal society of medicine</li>
              <li>British cardiovascular society</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="doctor-details__second-column">
        <div className="doctor-details__introduction">
          <h1 className="doctor-details__introduction-title">Introduction</h1>
          <p className="doctor-details__introduction-text">
          Dr. Perry barkle dicrosa received his doctorate in medical doctorry from hospital usa in 2003. following his professional qualification he practiced maxillofacial surgery at hospital and the royal hospital. dr. bigham gained membership of the college of surgeons of usa in 2007. he has over 10 years of experience working general dental practitioner in both surrey and central.
          </p>
          <div className="doctor-details__affiliations">
            <span className="doctor-details__checkmark">✓ </span>
            <span className="doctor-details__affiliation-text">Member of the royal college of surgeons of USA</span>
          </div>
          <div className="doctor-details__affiliations">
            <span className="doctor-details__checkmark">✓ </span>
            <span className="doctor-details__affiliation-text">Member of the general dental council (USA)</span>
          </div>
        </div>

        <div className="doctor-details__skills">
          <div className="doctor-details__column">
            {skillsData.slice(0, 3).map((skill, index) => (
              <div className="doctor-details__skill-box" key={index}>
                {skill}
              </div>
            ))}
          </div>
          <div className="doctor-details__column">
            {skillsData.slice(3).map((skill, index) => (
              <div className="doctor-details__skill-box" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="doctor-details__appointment-form">
          <div className="doctor-details__column">
            <h1 className='doctor-details__form-title'>Your name*</h1>
            <input type="text" placeholder="Name" />
            <h1 className='doctor-details__form-title'>Your phone*</h1>
            <input type="text" placeholder="Phone" />
            <h1 className='doctor-details__form-title'>Type of service required</h1>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="doctor-details__service-type"
            >
              <option value="">Select service</option>
              <option value="surgery1">Hand surgery</option>
              <option value="surgery2">Knee surgery</option>
              <option value="surgery3">Sports injury</option>
            </select>
            <h1 className='doctor-details__form-title'>Select date</h1>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              placeholder="Booking Date"
              className="doctor-details__date"
            />
          </div>

          <button className="doctor-details__get-appointment-btn">
            Get Appointment
          </button>
      </div>
    </div>
    </div>
  )
}

export default DoctorDetails
