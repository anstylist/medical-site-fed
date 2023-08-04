import React from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './EmergencyServices.scss'
import { BiPhone } from 'react-icons/bi'
import ContactCard from '../../components/ContactCard/ContactCard'
import Contacts from './contacts.json'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import FormSendMessage from '../../components/FormSendMessage/FormSendMessage'
import GetInTouch from '../../components/GetInTouch/GetInTouch'
function EmergencyServices () {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Emergency Services'
    }
  ]

  return (
    <section className='emergency-services'>
      <Jumbotron
          pageTitle="Emergency Services"
          backgroundClassName="emergency-services__bg"
          breadcrumb={breadcrumb}
          />
      <section className='emergency-services__container'>
        <header className='emergency-services__header'>
          <h3 className='emergency-services__title'>
            Emergency care (24 hrs)
          </h3>
          <div className='emergency-services__phone-box'>
            <i className='emergency-services__phone'>
              <BiPhone className='emergency-services__icon' />
            </i>
            <a href="tel:(04) 0800 6655" className='emergency-services__link'>
            (04) 0800 6655
            </a>
          </div>
        </header>
        <section className='emergency-services__list'>
          {Contacts.map((item, index) => (
            <ContactCard
            key={index}
            text={item.text}
            icon={item.icon}
            number={item.number}
            />
          ))}
        </section>
        <section className='emergency-services__map-section'>
          <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </section>
        <header className='emergency-services__header-send'>
        <h3 className='emergency-services__header-title'>
          Send message
        </h3>
        </header>
        <div className='emergency-services__contact'>
          <FormSendMessage />
          <GetInTouch />
        </div>
      </section>
    </section>
  )
}

export default EmergencyServices
