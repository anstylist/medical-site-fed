import React, { useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi2'

import './Faq.scss'

const data = [
  {
    Quiestion: '01. How do I request an appointment?',
    Answer: 'Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla porttitor accumsan tincidunt.'
  },
  {
    Quiestion: '02. What happens if I need to go to a hospital?',
    Answer: 'Dos Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla porttitor accumsan tincidunt.'
  },
  {
    Quiestion: '03. Can I make payment arrangements on my account?',
    Answer: 'Tres Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla porttitor accumsan tincidunt.'
  },
  {
    Quiestion: '04. How can I choose a health insurance plan?',
    Answer: 'Cuatro Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla porttitor accumsan tincidunt.'
  },
  {
    Quiestion: '05. Will I be able to stay with my doctor?',
    Answer: 'Cinco Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat accumsan id imperdiet et porttitor at sem. Nulla porttitor accumsan tincidunt.'
  }

]

function Faq () {
  const [Selected, Setselected] = useState(null)

  function toggle (i) {
    if (Selected === i) {
      return (Setselected(null))
    }
    Setselected(i)
  }

  return (
    <div className='Container__All'>
       <div className='Container__Img'>
       </div>
       <div className='Container__FAQ'>
            <div className='Container__FAQ__Title'>Frequently ask questions</div>
            <div className='Container__Acordion'>
                {data.map((item, i) => (
                    <div className='Container__Acordion__Item' key={i} >
                        <div className='Container__Acordion__Item__Title' onClick={() => toggle(i)}>
                            <h3 className={Selected === i ? 'Title__NoContent' : 'Title__Content'}>{item.Quiestion}</h3>
                            <span>{Selected === i ? <HiMinus className = 'Icon--Azul'/> : <HiPlus className = 'Icon'/>}</span>
                        </div>
                        <div className={Selected === i ? 'Container__Acordion__Item__Content' : 'Container__Acordion__Item__NoContent'}>{item.Answer}</div>
                    </div>
                ))}
            </div>
       </div>
    </div>
  )
}

export default Faq
