import React, { useState } from 'react'
import { HiPlus, HiMinus } from 'react-icons/hi2'
import data from './data.json'

import './Faq.scss'

function Faq () {
  const [Selected, Setselected] = useState(null)

  function toggle (i) {
    if (Selected === i) {
      return (Setselected(null))
    }
    Setselected(i)
  }

  return (
    <div className='faq'>
       <div className='faq__img'>
       </div>
       <div className='faq__container'>
            <div className='faq__title'>Frequently ask questions</div>
            <div className='faq__acordion'>
                {data.map((item, i) => (
                    <div className='faq__acordion-item' key={i} >
                        <div className='faq__acordion-item-title' onClick={() => toggle(i)}>
                            <h3 className={Selected === i ? 'title__noContent' : 'title__content'}>{item.Quiestion}</h3>
                            <span>{Selected === i ? <HiMinus className = 'Icon--Azul'/> : <HiPlus className = 'Icon'/>}</span>
                        </div>
                        <div className={Selected === i ? 'faq__acordion-item-content' : 'faq__acordion-item-nocontent'}>{item.Answer}</div>
                    </div>
                ))}
            </div>
       </div>
    </div>
  )
}

export default Faq
