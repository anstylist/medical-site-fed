import React from 'react'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import OurDoctors from '../pages/OurDoctors/OurDoctors'
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails'
import Terms from '../pages/Terms/Terms'
import Privacy from '../pages/Privacy/Privacy'
import Error404 from '../pages/404/Error404'
import ComingSoon from '../pages/ComingSoon/ComingSoon'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Forgot from '../pages/Forgot/Forgot'
import Appointment from '../pages/Appointment/Appointment'
import DoctorsTimetable from '../pages/DoctorsTimetable/DoctorsTimetable'
import EmergencyServices from '../pages/EmergencyServices/EmergencyServices'
import PatientsVisitors from '../pages/PatientsVisitors/PatientsVisitors'
import FindDoctor from '../pages/FindDoctor/FindDoctor'
import OurDepartments from '../pages/OurDepartments/OurDepartments'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Appointments from './Appointments/Appointments'

function App() {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/our-doctors' Component={OurDoctors} />
          <Route path='/doctor-details' Component={DoctorDetails} />
          <Route path='/terms-of-service' Component={Terms} />
          <Route path='/privacy-policy' Component={Privacy} />
          <Route path='/coming-soon' Component={ComingSoon} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/forgot-password' Component={Forgot} />
          <Route path='/appointment' Component={Appointment} />
          <Route path='/doctors-timetable' Component={DoctorsTimetable} />
          <Route path='/emergency-services' Component={EmergencyServices} />
          <Route path='/patients-and-visitors' Component={PatientsVisitors} />
          <Route path='/find-doctor' Component={FindDoctor} />
          <Route path='/our-departments' Component={OurDepartments} />
          <Route path='/doctor/appointments' element={<Appointments type={true} />} />
          <Route path='/patient/appointments' element={<Appointments type={false} />} />
          <Route path='*' Component={Error404} />
        </Routes>
      </Main>
      <Footer />
    </>
  )
}

export default App
