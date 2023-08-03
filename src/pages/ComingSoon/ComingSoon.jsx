import React, { useState, useEffect } from 'react'
import './ComingSoon.scss'

const ComingSoon = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  const calculateTimeLeft = () => {
    const launchDate = new Date('2023-12-31') // Replace this with your actual launch date
    const difference = launchDate - new Date()

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((difference / 1000 / 60) % 60)
      const seconds = Math.floor((difference / 1000) % 60)

      setCountdown({ days, hours, minutes, seconds })
    }
  }

  useEffect(() => {
    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const logoImg = 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393390/medical-site/logo_bcp977.png'

  return (
    <div className="coming-soon">
      <div className="coming-soon__background-image"></div>
      <div className="coming-soon__content-container">
        <div className="coming-soon__logo">
            <img src={logoImg} alt="logo" />
        </div>
        <p className="coming-soon__launch-text">We are launching soon</p>
        <div className="coming-soon__countdown">
          <div className="coming-soon__countdown-item">
            <span className="coming-soon__countdown-number">{countdown.days}</span>
            <span className="coming-soon__countdown-label">days</span>
          </div>
          <div className="coming-soon__countdown-item">
            <span className="coming-soon__countdown-number">{countdown.hours}</span>
            <span className="coming-soon__countdown-label">hours</span>
          </div>
          <div className="coming-soon__countdown-item">
            <span className="coming-soon__countdown-number">{countdown.minutes}</span>
            <span className="coming-soon__countdown-label">minutes</span>
          </div>
          <div className="coming-soon__countdown-item">
            <span className="coming-soon__countdown-number">{countdown.seconds}</span>
            <span className="coming-soon__countdown-label">seconds</span>
          </div>
        </div>
        <div className="coming-soon__email-input">
          <input type="email" placeholder="Enter your email" />
          <button className="coming-soon__subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default ComingSoon
