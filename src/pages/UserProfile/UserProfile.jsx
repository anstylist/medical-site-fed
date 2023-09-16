import React, { useState, useContext } from 'react'
import './UserProfile.scss'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { updateUser } from '../../services/UserService'
import Swal from 'sweetalert2'

const UserProfile = () => {
  const { authData, updateAuthData } = useContext(AuthContext)
  const [editingStates, setEditingStates] = useState({
    fullName: false,
    email: false,
    password: false
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    updateAuthData({ ...authData, [name]: value })
  }

  const toggleEditMode = (fieldName) => {
    setEditingStates((prevStates) => {
      const updateValue = {
        ...prevStates,
        [fieldName]: !prevStates[fieldName]
      }
      return updateValue
    })
  }

  const saveChanges = async (fieldName) => {
    try {
      toggleEditMode(fieldName)
      await updateUser(authData.email, { [fieldName]: authData[fieldName] })
    } catch (error) {
      Swal.fire('Error!', error.message || 'An error occurred.', 'error')
    }
  }

  const renderField = (fieldName, label) => (
    <div className="user-profile__field" style={fieldName === 'email' ? { justifyContent: 'left', gap: '11rem' } : null}>
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
                fieldName !== 'email'
                  ? authData[fieldName] && (
          <button
            className="user-profile__field-button"
            onClick={() => toggleEditMode(fieldName)}
          >
            Edit
          </button>
                  )
                  : null
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
        </div>
      </div>
  )
}
export default UserProfile
