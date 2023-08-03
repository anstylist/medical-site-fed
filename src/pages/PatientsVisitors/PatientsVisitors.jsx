import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './PatientsVisitors.scss'

function PatientsVisitors () {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Patients & Visitors'
    }
  ]
  return (
    <>
      <Jumbotron
        pageTitle={'Patients & Visitors'}
        backgroundClassName="patients-visitor__bg"
        breadcrumb={breadcrumb}
      />
      <section className='patients-visitors'>
        <div className='patients-visitors__container'>
          <h2 className='patients-visitors__title'>
            All you need to know about inspections
          </h2>
        </div>
        <div className='patients-visitors__content'>
          <h3 className='patients-visitors__subtitle'>
            Discover our facilities at the hospital
          </h3>
          <p className='patients-visitors__text'>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. curabitur arcu erat accumsan id imperdiet et porttitor at sem. donec rutrum congue leo eget malesuada. vivamus suscipit tortor eget felis porttitor volutpat. donec sollicitudin molestie malesuada. vivamus magna justo lacinia eget consectetur sed convallis at tellus. cras ultricies ligula sed magna dictum porta. vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.
          </p>
        </div>
        <div className='patients-visitors__content'>
          <h3 className='patients-visitors__subtitle'>
            Patients
          </h3>
          <p className='patients-visitors__text'>
            Praesent sapien massa convallis a pellentesque nec egestas non nisi. pellentesque in ipsum id orci porta dapibus. praesent sapien mass, convallis a pellentesque nec egestas non nisi. pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi pretium ut lacinia in elementum id enim.
          </p>
        </div>
        <div className='patients-visitors__content'>
          <h3 className='patients-visitors__subtitle'>
            Visitor requirements
          </h3>
          <p className='patients-visitors__text'>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. curabitur arcu erat accumsan id imperdiet et porttitor at sem. donec rutrum congue leo eget malesuada. vivamus suscipit tortor eget felis porttitor volutpat. donec sollicitudin molestie malesuada. vivamus magna justo lacinia eget consectetur sed convallis at tellus. cras ultricies ligula sed magna dictum porta. vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.
          </p>
        </div>
        <div className='patients-visitors__content'>
          <h3 className='patients-visitors__subtitle'>
            Visiting hours and how to contact a patient
          </h3>
          <p className='patients-visitors__text'>
            Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. curabitur arcu erat accumsan id imperdiet et porttitor at sem. donec rutrum congue leo eget malesuada. vivamus suscipit tortor eget felis porttitor volutpat. donec sollicitudin molestie malesuada. vivamus magna justo lacinia eget consectetur sed convallis at tellus. cras ultricies ligula sed magna dictum porta. vivamus suscipit tortor eget felis porttitor volutpat. Sed porttitor lectus nibh.
          </p>
        </div>
        <div className='patients-visitors__content'>
          <h3 className='patients-visitors__subtitle'>
            Location, transport & parking
          </h3>
          <p className='patients-visitors__text'>
            Praesent sapien massa convallis a pellentesque nec egestas non nisi. pellentesque in ipsum id orci porta dapibus. praesent sapien mass, convallis a pellentesque nec egestas non nisi. pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit eget tincidunt nibh pulvinar a. Donec sollicitudin molestie malesuada. nulla quis lorem ut libero malesuada feugiat. Quisque velit nisi pretium ut lacinia in elementum id enim.
          </p>
        </div>
      </section>
      <section className='patients-visitors__map-section'>
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
    </>
  )
}

export default PatientsVisitors
