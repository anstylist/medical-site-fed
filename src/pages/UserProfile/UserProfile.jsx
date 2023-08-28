import React, { useState } from 'react'
import mockUser from '../../__mocks__/mockUser.json'
import './UserProfile.scss'
import { Link } from 'react-router-dom'

const UserProfile = () => {
  const [user, setUser] = useState(mockUser)

  const initialEditingStates = {
    fullName: false,
    email: false,
    password: false,
    country: false,
    city: false,
    bloodtype: false,
    phoneNumber: false
  }
  const [editingStates, setEditingStates] = useState(initialEditingStates)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))
  }

  const toggleEditMode = (fieldName) => {
    setEditingStates((prevStates) => ({
      ...prevStates,
      [fieldName]: !prevStates[fieldName]
    }))
  }

  const saveChanges = (fieldName) => {
    toggleEditMode(fieldName)
  }

  const renderField = (fieldName, label) => (
      <div className="user-profile__field">
        <label className="user-profile__field-label">
            <strong>{label}</strong>
        </label>
        {editingStates[fieldName]
          ? (
          <input
            className="user-profile__field-input"
            type={fieldName === 'password' ? 'password' : 'text'}
            name={fieldName}
            value={user[fieldName]}
            onChange={handleInputChange}
          />
            )
          : (
              fieldName === 'password'
                ? (
              <p className="user-profile__field-value">********</p>
                  )
                : (
              <p className="user-profile__field-value">{user[fieldName]}</p>
                  )
            )}
        {editingStates[fieldName]
          ? (
          <button
            className="user-profile__field-button user-profile__field-button--save"
            onClick={() => saveChanges(fieldName)}
          >
            Save Changes
          </button>
            )
          : (
              fieldName === 'password'
                ? (
                <Link to="/change-password">
                  <button className="user-profile__field-button">Change Password</button>
                </Link>
                  )
                : (
                <button
                  className="user-profile__field-button"
                  onClick={() => toggleEditMode(fieldName)}
                >
                  Edit
                </button>
                  )
            )}
      </div>
  )

  return (
      <div className="user-profile">
        <h1 className="user-profile__title">My Profile</h1>
        <div className="user-profile__fields">
          {renderField('fullName', 'Full Name')}
          {renderField('email', 'Email')}
          {renderField('password', 'Password')}
          {renderField('country', 'Country')}
          {renderField('city', 'City')}
          {renderField('bloodType', 'Blood Type')}
          {renderField('phoneNumber', 'Phone Number')}
        </div>
      </div>
  )
}
export default UserProfile
