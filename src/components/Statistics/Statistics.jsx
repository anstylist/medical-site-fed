import React from 'react'
import CardStatistics from '../CardStatistics/CardStatistics'
import { SlBadge } from 'react-icons/sl'
import { BiLike } from 'react-icons/bi'
import { FaBed } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import './Statistics.scss'

const Statistics = () => {
  const infoStatistics = [
    { num: 20, symbol: '+', icon: <SlBadge size={34} />, text: 'Years of experience' },
    { num: 99, symbol: '%', icon: <BiLike size={34} />, text: 'Patients satisfied' },
    { num: 700, symbol: '+', icon: <FaBed size={34} />, text: 'Medical beds' },
    { num: 50, symbol: '+', icon: <FaUserDoctor size={34} />, text: 'Laboratory Experts' }
  ]

  return (
    <div className="statistics">
        <div className="list-statiscs-card">
        {infoStatistics.map((item, index) => {
          return (
            <CardStatistics
              key={index}
              num={item.num}
              symbol={item.symbol}
              icon={item.icon}
               text={item.text}
            />)
        })
        }
        </div>
    </div>
  )
}

export default Statistics
