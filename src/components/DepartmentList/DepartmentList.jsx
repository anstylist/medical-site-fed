import React from 'react'
import './DepartmentList.scss'
import DepartmentCard from '../DepartmentCard/DepartmentCard'
import { GiHeartOrgan, GiAmbulance, GiMedicalDrip, GiTemplarEye, GiStomach, GiBrokenBone, GiBrain, GiAbdominalArmor } from 'react-icons/gi'
import { TbDental, TbPhysotherapist } from 'react-icons/tb'
import { dataDepartament } from '../data'

const DepartmentList = ({ isHome }) => {
  const icons = {
    stomach: <GiStomach size={34}/>,
    heartorgan: <GiHeartOrgan size={34}/>,
    templareye: <GiTemplarEye size={34}/>,
    brokebone: <GiBrokenBone size={34}/>,
    brain: <GiBrain size={34}/>,
    abdominal: <GiAbdominalArmor size={34}/>,
    dental: <TbDental size={34}/>,
    ambulance: <GiAmbulance size={34}/>,
    medicaldrip: <GiMedicalDrip size={34}/>,
    therapy: <TbPhysotherapist size={34}/>
  }

  const arrayDepartament = isHome ? [...dataDepartament()].slice(7, 10) : [...dataDepartament()]

  return (
    <div className='list-department'>
      { arrayDepartament.map((item) => {
        return (
          <DepartmentCard
          key={item.id}
          id={item.id}
          icon={icons[item.icon]}
          title={item.name}
          information={item.information}
        />)
      })}

    </div>
  )
}
export default DepartmentList
