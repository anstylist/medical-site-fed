import React from 'react'
import './Error404.scss'
import { HiArrowNarrowRight } from 'react-icons/hi'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
function Error404 () {
  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: '404 Error'
    }
  ]

  return (
    <div>
      <Jumbotron
      pageTitle = {'404 Error'}
      backgroundClassName="error__bg"
      breadcrumb={breadcrumb}
      />
      <div className='error__content'>
        <div className='error__container'>
            <img src="https://res.cloudinary.com/dzmkilinu/image/upload/v1690917655/medical-site/error_xjnttw.png" className="error__container-img" />
            <h1 className='error__container-title'>Error 404: page not found</h1>
            <p className='error__container-p'>The page you are looking for might have been removed had its name
              changed or is temporarily unavailable
            </p>
            <a href='' className='error__botton'>
                Back to home
                <HiArrowNarrowRight className= 'Contact__Botton__Icon'/>
            </a>
        </div>
      </div>
    </div>
  )
}
export default Error404
