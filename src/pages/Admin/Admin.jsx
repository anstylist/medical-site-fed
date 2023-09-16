import React, { useContext, useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './Admin.scss'
import Doctors from '../../components/Admin/Doctors/Doctors'
import Products from '../../components/Admin/Products/Products'
import { AuthContext } from '../../context/AuthContext'
import Patients from '../../components/Admin/Patients/Patients'
import Appointments from '../../components/Admin/Appointments/Appointments'

const Admin = () => {
  const { authData } = useContext(AuthContext)
  const fullName = authData.fullName
  const [activeTab, setActiveTab] = useState(0)
  const statePanels = ['Doctors', 'Patients', 'Appointments', 'Products', 'Orders']
  const breadcrumb = [
    {
      text: 'Go to home',
      route: '/'
    },
    {
      text: fullName
    }
  ]
  const handleTabClick = (id) => {
    setActiveTab(id)
  }
  return (
    <section className='admin'>
      <Jumbotron
        pageTitle={'My Dashboard'}
        backgroundClassName="admin__bg"
        breadcrumb={breadcrumb}
      />
      <ul className="admin__tabs">
        {statePanels.map((title, index) =>
          <li
            key={index}
            className={`admin__tabs--title ${activeTab === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}>{title}</li>
        )}
      </ul>
      <section className='admin__container'>

        <div className="admin__tab-content">
          {
            activeTab === 0 &&
            <div className="tab_panel">
              <Doctors />
            </div>
          }
          {
            activeTab === 1 &&
            <div className="tab_panel">
              <Patients />
            </div>
          }
          {
            activeTab === 2 &&
            <div className="tab_panel">
              <Appointments />
            </div>
          }
          {
            activeTab === 3 &&
            <div className="tab_panel">
              <Products />
            </div>
          }
          {
            activeTab === 4 &&
            <div className="tab_panel">
              <h2 className='title'> List of orders </h2>
            </div>
          }
        </div>
      </section>
    </section>
  )
}

export default Admin
