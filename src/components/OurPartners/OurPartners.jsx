import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './OurPartners.scss'

const OurPartners = () => {
  const partners = [
    { id: 1, src: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393384/medical-site/partner-1_mywkg1.png' },
    { id: 2, src: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393381/medical-site/partner-2_wqe55p.png' },
    { id: 3, src: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393381/medical-site/partner-3_x21aft.png' },
    { id: 4, src: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393381/medical-site/partner-5_q4xdh4.png' },
    { id: 5, src: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393381/medical-site/partner-4_baypix.png' },
    { id: 6, src: 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689656428/medical-site/partner_6.png' }
  ]
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  }
  return (
    <div className='ourpartners'>
      <h3 className='ourpartners-title'>Our medical partners</h3>
      <Slider className='ourpartners-slider' {...settings}>
        { partners.map((item) => {
          return (
          <div key={item.id}>
            <img
              className='ourpartners-slider-logo'
              src={item.src}
            />
          </div>)
        })}
      </Slider>
    </div>
  )
}
export default OurPartners
