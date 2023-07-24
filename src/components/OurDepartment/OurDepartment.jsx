import React from 'react'
import './OurDepartment.scss'
import DepartmentList from '../DepartmentList/DepartmentList'

const OurDepartment = () => {
  return (
    <div className='ourdepartment'>
        <h3 className='ourdepartment-title'>Our department</h3>
        <h2 className='ourdepartment-subtitle'>Our hospital has all kinds of department services</h2>
        <DepartmentList isHome={true}/>
        <button className='ourdepartment--button'>All services → </button>
    </div>)
}
export default OurDepartment
