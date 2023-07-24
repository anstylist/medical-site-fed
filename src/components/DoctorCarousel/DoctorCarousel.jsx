import React from 'react'
import Slider from 'react-slick'
import DoctorCard from './DoctorCard'
import doctorsList from './doctors-list.json'
import './DoctorCarousel.scss'

export default function DoctorCarousel () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    dotsClass: 'med-gallery-dots',
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          speed: 700,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          speed: 700,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
      <div className='doctor-carousel'>
        <h2 className='doctor-carousel__title'>Our doctors</h2>
        <h3 className='doctor-carousel__text'>Professional staff at our hospital</h3>
        <Slider {...settings}>
            {doctorsList.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
                socialLinks={doctor.socialLinks}
              />
            ))}
            {doctorsList.map((doctor) => (
              <DoctorCard
                key={doctor.id}
                id={doctor.id}
                name={doctor.name}
                specialty={doctor.specialty}
                image={doctor.image}
                socialLinks={doctor.socialLinks}
              />
            ))}
        </Slider>
      </div>
  )
}
