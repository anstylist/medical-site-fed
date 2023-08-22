import React, { useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './Admin.scss'
import Doctors from '../../components/Admin/Doctors/Doctors'
import axios from 'axios'
import host from '../../services/host'
import { useLoaderData } from 'react-router'

const Admin = () => {
  const fullName = localStorage.getItem('fullName')
  const { usersData } = useLoaderData()
  const doctorsData = usersData.filter((item) => { return item.doctor })
  console.log(doctorsData)
  const [activeTab, setActiveTab] = useState(0)
  const statePanels = ['Doctors', 'Patients', 'Not Patients', 'Appointments', 'Products', 'Orders']
  const breadcrumb = [
    {
      text: 'Welcome',
      route: ''
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
              <h2 className='title'> List of doctors </h2>
              <h2 className='subtitle'>{`${doctorsData.length} registered doctors`}</h2>
              <Doctors doctorsData={doctorsData} />
            </div>
          }
          {
            activeTab === 1 &&
            <div className="tab_panel">
              <h2 className='title'> List of patients </h2>
            </div>
          }
          {
            activeTab === 2 &&
            <div className="tab_panel">
              <h2 className='title'> List of no patients </h2>
            </div>
          }
          {
            activeTab === 3 &&
            <div className="tab_panel">
              <h2 className='title'> List of appointments </h2>
            </div>
          }
          {
            activeTab === 4 &&
            <div className="tab_panel">
              <h2 className='title'> List of products </h2>
            </div>
          }
          {
            activeTab === 5 &&
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

export const loaderDataUsers = async () => {
  try {
    const accessToken = localStorage.getItem('token')
    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    }
    const { data } = await axios.get(`${host}/api/users`, config)

    return { usersData: data }
  } catch (error) {
    console.log(error)
  }
}
