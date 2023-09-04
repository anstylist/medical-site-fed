import React, { useState, useContext } from 'react'
import './UserProfile.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const UserProfile = () => {
  const { authData, updateAuthData } = useContext(AuthContext)

  const initialEditingStates = {
    fullName: false,
    email: false,
    password: false,
    country: false,
    city: false,
    bloodType: false,
    phoneNumber: false
  }
  const [editingStates, setEditingStates] = useState(initialEditingStates)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    updateAuthData({ [name]: value, ...authData })
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
  console.log(authData)

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
        value={authData[fieldName]}
        onChange={handleInputChange}
      />
        )
      : (
          fieldName === 'password'
            ? (
        <p className="user-profile__field-value">********</p>
              )
            : (
        <p className="user-profile__field-value">{authData[fieldName]}</p>
              )
        )}
    {editingStates[fieldName]
      ? (
      <button
        className="user-profile__field-button user-profile__field-button--save"
        onClick={() => saveChanges(fieldName)}
      >
        Save
      </button>
        )
      : (
          fieldName === 'password'
            ? (
        <Link to="/forgot-password">
          <button className="user-profile__field-button">Change Password</button>
        </Link>
              )
            : (
                authData[fieldName] && (
          <button
            className="user-profile__field-button"
            onClick={() => toggleEditMode(fieldName)}
          >
            Edit
          </button>
                )
              )
        )}
  </div>
  )
  return (
      <div className="user-profile">
        <h1 className="user-profile__title">My Profile</h1>
        <img
          className="user-profile__avatar"
          src={`https://robohash.org/${authData.fullName}`}
          alt={authData.fullName}
        />
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
