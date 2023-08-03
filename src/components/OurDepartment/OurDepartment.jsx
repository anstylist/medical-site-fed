import React from 'react'
import './OurDepartment.scss'
import DepartmentList from '../DepartmentList/DepartmentList'
import { Link } from 'react-router-dom'

const OurDepartment = () => {
  return (
    <div className='ourdepartment'>
        <h3 className='ourdepartment-title'>Our department</h3>
        <h2 className='ourdepartment-subtitle'>Our hospital has all kinds of department services</h2>
        <DepartmentList/>
        <Link to="/our-departments">
          <button className='ourdepartment--button'>All services → </button>
        </Link>
    </div>)
}
export default OurDepartment
