/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
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
        X
        <section className={`modal ${className || ''}`} onClick={stopPropagation}>
          {isOpen && children}
        </section>
      </div>
    </>
  )
}

export default Modal
