import './CardStatistics.scss'
import React, { useState, useEffect, useRef } from 'react'

const CardStatistics = ({ num, symbol, icon, text }) => {
  const [count, setCount] = useState(0)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const cardRef = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && count < num) {
          setIsIntersecting(true)
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.5 }
    )
    if (cardRef.current) {
      observer.observe(cardRef.current)
    }
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [count, num])
  useEffect(() => {
    let interval
    if (isIntersecting && count < num) {
      const increment = num === 700 ? 20 : 1
      interval = setInterval(() => setCount(prevCount => prevCount + increment), num === 20 ? 40 : num === 99 ? 5 : 20)
    }
    return () => clearInterval(interval)
  }, [isIntersecting, count, num])
  return (
    <div ref={cardRef} className='statistics-card'>
      <i className='statistics-card--icono'>{icon}</i>
      <div className='statistics-card_content'>
        <h3>
          <span className='statistics-card_content--count'>{count}</span>
          <span className='statistics-card_content--simbolo'>{symbol}</span>
        </h3>
        <p className='statistics-card_content--text'>{text}</p>
      </div>
    </div>
  )
}
export default CardStatistics
