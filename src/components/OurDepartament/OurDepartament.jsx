import React from 'react'
import './OurDepartament.scss'
import DepartamentList from '../DepartamentList/DepartamentList'

const OurDepartament = () => {
  return (
    <div className='ourdepartament'>
        <h3 className='ourdepartament-title'>Our department</h3>
        <h2 className='ourdepartament-subtitle'>Our hospital has all kinds of department services</h2>
        <DepartamentList/>
        <button className='ourdepartament--button'>All services → </button>
    </div>)
}
export default OurDepartament
