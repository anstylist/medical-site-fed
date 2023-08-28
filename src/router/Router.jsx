import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../pages/App'
import Error404 from '../pages/404/Error404'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import OurDoctors from '../pages/OurDoctors/OurDoctors'
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails'
import Terms from '../pages/Terms/Terms'
import Privacy from '../pages/Privacy/Privacy'
import ComingSoon from '../pages/ComingSoon/ComingSoon'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import Forgot from '../pages/Forgot/Forgot'
import Appointment, { loaderAppointmentData } from '../pages/Appointment/Appointment'
import DoctorsTimetable from '../pages/DoctorsTimetable/DoctorsTimetable'
import EmergencyServices from '../pages/EmergencyServices/EmergencyServices'
import PatientsVisitors from '../pages/PatientsVisitors/PatientsVisitors'
import FindDoctor from '../pages/FindDoctor/FindDoctor'
import OurDepartments from '../pages/OurDepartments/OurDepartments'
import Products from '../pages/Products/Products'
import ProductDetails from '../pages/ProductsDetails/ProductsDetails'
import Cart from '../pages/Cart/Cart'
import Appointments from '../pages/Appointments/Appointments'
import UserProfile from '../pages/UserProfile/UserProfile'
import Admin from '../pages/Admin/Admin'
import { ProtectedRoute } from '../router/ProtectedRoute'
import ChangePassword from '../pages/ChangePassword/ChangePassword'
import Checkout from '../pages/Checkout/Checkout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/our-doctors',
        element: <OurDoctors />
      },
      {
        path: '/doctor-details',
        element: <DoctorDetails />
      },
      {
        path: '/terms-of-service',
        element: <Terms />
      },
      {
        path: '/privacy-policy',
        element: <Privacy />
      },
      {
        path: '/coming-soon',
        element: <ComingSoon />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/forgot-password',
        element: <Forgot />
      },
      {
        path: '/change-password',
        element: <ChangePassword />
      },
      {
        path: '/appointment',
        element: <Appointment />,
        loader: loaderAppointmentData
      },
      {
        path: '/doctors-timetable',
        element: <DoctorsTimetable />
      },
      {
        path: '/emergency-services',
        element: <EmergencyServices />
      },
      {
        path: '/patients-and-visitors',
        element: <PatientsVisitors />
      },
      {
        path: '/find-doctor',
        element: <FindDoctor />
      },
      {
        path: '/our-departments',
        element: <OurDepartments />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/products/:productId',
        element: <ProductDetails />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/doctor/appointments',
        element: <Appointments type={true} />
      },
      {
        path: '/patient/appointments',
        element: <Appointments type={false} />
      },
      {
        path: '/user-profile',
        element: <UserProfile />
      },
      {
        path: '/checkout',
        element: <Checkout />
      }
    ]
  },
  {
    path: '/admin',
    element:
      <ProtectedRoute
        authorizedRoles={['ADMIN']}
        redirectTo={'/login'}
      >
        <Admin />
      </ProtectedRoute>
  }
])

export default router
