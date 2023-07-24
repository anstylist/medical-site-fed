import React, { useEffect, useState } from 'react'
import './CardStatistics.scss'

const CardStatistics = ({ num, symbol, icon, text }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval
    if (count < num) {
      const increment = (num === 700 ? 20 : 1)
      interval = setInterval(() => setCount(count + increment), num === 20 ? 40 : num === 99 ? 5 : 20)
    }
    return () => clearInterval(interval)
  }, [count, num])

  return (
    <div className='statistics-card'>
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
