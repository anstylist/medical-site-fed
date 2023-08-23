import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import Products from '../pages/Products/Products'
import ProductsDetails from '../pages/ProductsDetails/ProductsDetails'
import Cart from '../pages/Cart/Cart'
import Appointments from './Appointments/Appointments'

import Checkout from '../pages/Checkout/Checkout'
import UserContext from '../context/UserContext'
import CartProductsContext from '../context/CartProductsContext'
// Temporary
import cartProducts from '../__mocks__/cart-products.json'
import './App.scss'

function App () {
  // TODO: set the productList initial value to an empty [] array after implementing the Cart component
  const [productsList, setProductsList] = useState(cartProducts)
  const [user, setUser] = useState({})

  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <CartProductsContext.Provider value={{ productsList, setProductsList }}>
          <Header />
          <Main>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/our-doctors' element={<OurDoctors/>}/>
              <Route path='/doctor-details' element={<DoctorDetails/>}/>
              <Route path='/terms-of-service' element={<Terms/>}/>
              <Route path='/privacy-policy' element={<Privacy/>}/>
              <Route path='/coming-soon' element={<ComingSoon/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/forgot-password' element={<Forgot/>}/>
              <Route path='/appointment' element={<Appointment/>}/>
              <Route path='/doctors-timetable' element={<DoctorsTimetable/>}/>
              <Route path='/emergency-services' element={<EmergencyServices/>}/>
              <Route path='/patients-and-visitors' element={<PatientsVisitors/>}/>
              <Route path='/find-doctor' element={<FindDoctor/>}/>
              <Route path='/our-departments' element={<OurDepartments/>}/>
              <Route path='/products' element={<Products/>}/>
              <Route path='/products/:productId' element={<ProductsDetails/>}/>
              <Route path='/cart' element={<Cart/>} />
              <Route path="/checkout" element={<Checkout/>} />
              <Route path='/doctor/appointments' element={<Appointments type={true} />} />
              <Route path='/patient/appointments' element={<Appointments type={false} />} />
              <Route path='*' element={<Error404/>}/>
            </Routes>
          </Main>
          <Footer />
        </CartProductsContext.Provider>
      </UserContext.Provider>
    </>
  )
}

export default App
