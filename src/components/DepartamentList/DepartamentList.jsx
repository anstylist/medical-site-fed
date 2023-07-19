import React from 'react'
import './DepartamentList.scss'
import DepartamentCard from '../DepartamentCard/DepartamentCard'
import { GiHeartOrgan, GiTemplarEye, GiStomach /** , GiBrokenBone, GiBrain, GiAbdominalArmor */ } from 'react-icons/gi'

const DepartamentList = () => {
  const arrayDepartament = [
    { id: 1, icon: <GiStomach size={34}/>, title: 'Gastroenterologist', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 2, icon: <GiHeartOrgan size={34}/>, title: 'Cardiology', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 3, icon: <GiTemplarEye size={34}/>, title: 'Ophthalmology', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' }
    /** ,
    { id: 4, icon: <GiBrokenBone size={34}/>, title: 'Orthopedics', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 5, icon: <GiBrain size={34}/>, title: 'Neurology', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' },
    { id: 6, icon: <GiAbdominalArmor size={34}/>, title: 'Plastic surgeons', information: 'Curabitur aliquet quam id dui posuere blandit. lacinia eget consectetur sed.' } */
  ]
  return (
    <div className='list-departament'>
      {arrayDepartament.map((item) => {
        return (
          <DepartamentCard
          key={item.id}
          id={item.id}
          icon={item.icon}
          title={item.title}
          information={item.information}
        />)
      })
      }
    </div>
  )
}
export default DepartamentList
