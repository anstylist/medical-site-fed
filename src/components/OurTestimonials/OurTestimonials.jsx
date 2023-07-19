import React from 'react'
import Slider from 'react-slick'
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './OurTestimonials.scss'

const OurTestimonials = () => {
  const testimonials = [
    { id: 1, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum neque explicabo labore placeat quam earum, culpa ipsa fugiat amet. Hic vel quo consectetur modi alias libero harum? Laudantium, consequatur amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.', author: 'Monoroe Bond', post: 'CEO' },
    { id: 2, text: 'Vivamus suscipit tortor eget felis porttitor volutpat curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Curabitur aliquot quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.', author: 'Nathanael Koed', post: 'Manager' },
    { id: 3, text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum neque explicabo labore placeat quam earum, culpa ipsa fugiat amet. Hic vel quo consectetur modi alias libero harum? Laudantium, consequatur amet.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.', author: 'Juan Perez', post: 'Gerent' },
    { id: 4, text: 'Vivamus suscipit tortor eget felis porttitor volutpat curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla porttitor accumsan tincidunt. Sed porttitor lectus nibh. Sed porttitor lectus nibh. Curabitur aliquot quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus.', author: 'Pedro Gomez', post: 'Gerent' }
  ]

  const NextArrow = ({ style, onClick }) => {
    return (
      <div className='next-arrow' style={{ ...style }} onClick={onClick}>
        <HiOutlineArrowNarrowRight size={25}/>
      </div>
    )
  }

  const PrevArrow = ({ style, onClick }) => {
    return (
      <div className='prev-arrow' style={{ ...style }} onClick={onClick}>
        <HiOutlineArrowNarrowLeft size={25}/>
      </div>
    )
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false
        }
      }
    ]
  }
  return (
    <div className ='ourtestimonials'>
      <h3 className='ourtestimonials_title'>Our medical partners</h3>
      <h2 className='ourtestimonials_subtitle'>What patients say about us</h2>
      <Slider className='ourtestimonials_slider' {...settings}>
        {testimonials.map((item) => {
          return (
            <div key={item.id}>
              <p className='ourtestimonials_slider-testimonial'> { `"${item.text}"` } </p>
              <h3 className='ourtestimonials_slider-author'> { item.author } </h3>
              <h3 className='ourtestimonials_slider-post'> { item.post } </h3>
            </div>
          )
        })}
      </Slider>
    </div>
  )
}
export default OurTestimonials
