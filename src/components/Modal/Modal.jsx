/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Modal.scss'

function Modal ({ trigger, children, className }) {
  const [isOpen, setIsOpen] = useState(false)

  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  useEffect(() => {
    const handleScape = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleScape)

    // Función para deshabilitar el desplazamiento del documento cuando el modal está abierto
    const disableScroll = () => {
      document.body.style.overflow = 'hidden'
    }

    // Función para habilitar el desplazamiento del documento cuando el modal se cierra
    const enableScroll = () => {
      document.body.style.overflow = 'auto'
    }

    if (isOpen) { // Se abrió el modal
      disableScroll()
    } else { // Se cerró el modal
      enableScroll()
      document.removeEventListener('keydown', handleScape)
    }

    return () => document.removeEventListener('keydown', handleScape)
  }, [isOpen])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type='button'
        className='btn'
      >
        {trigger || 'Open Modal'}
      </button>
      <div
        className={`modal-container ${isOpen && 'modal-container__open'}`}
        onClick={() => setIsOpen(false)}
      >

        <section className={`modal ${className || ''}`} onClick={stopPropagation}>
          <a className='closed' onClick={() => setIsOpen(false)}>
            <AiOutlineCloseCircle size={30} />
          </a>
          {isOpen && children}
        </section>
      </div>
    </>
  )
}

export default Modal
