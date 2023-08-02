import React from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import DepartmentCard from '../../components/DepartmentCard/DepartmentCard'
import { dataDepartament } from '../../components/data'
import { GiHeartOrgan, GiAmbulance, GiMedicalDrip, GiTemplarEye, GiStomach, GiBrokenBone, GiBrain, GiAbdominalArmor, GiLungs } from 'react-icons/gi'
import { TbDental, TbPhysotherapist } from 'react-icons/tb'
import { FaRibbon } from 'react-icons/fa'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './OurDepartaments.scss'
import Slider from 'react-slick'

const OurDepartments = () => {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Departments'
    }
  ]
  const icons = {
    stomach: <GiStomach size={34}/>,
    heartorgan: <GiHeartOrgan size={34}/>,
    templareye: <GiTemplarEye size={34}/>,
    brokebone: <GiBrokenBone size={34}/>,
    brain: <GiBrain size={34}/>,
    abdominal: <GiAbdominalArmor size={34}/>,
    dental: <TbDental size={34}/>,
    ambulance: <GiAmbulance size={34}/>,
    medicaldrip: <GiMedicalDrip size={34}/>,
    therapy: <TbPhysotherapist size={34}/>,
    lungs: <GiLungs size={34}/>,
    ribbon: <FaRibbon size={34}/>
  }

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    slidesPerRow: 1,
    rows: 2,
    arrows: false,
    appendDots: dots => (
      <div>
        <ul className='slick-dots-container'>{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className='paging'>
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          rows: 6
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
          rows: 3
        }
      }
    ]
  }
  return (
    <section className='our-departments'>
      <Jumbotron
        pageTitle={'Departament'}
        backgroundClassName="our-departments__bg"
        breadcrumb={breadcrumb}
      />
      <section className='our-departments__container'>
        <header className='our-departments__header'>
          <h2 className='our-departments__header__title'>Our department</h2>
          <h3 className='our-departments__header__text'>Our hospital has all kinds of department services</h3>
        </header>
        <Slider {...settings}>
            {dataDepartament().map((item) => {
              return (
              <DepartmentCard
              key={item.id}
              id={item.id}
              icon={icons[item.icon]}
              title={item.name}
              information={item.information}
              link={item.link}/>
              )
            })}
          </Slider>
      </section>
    </section>
  )
}

export default OurDepartments
