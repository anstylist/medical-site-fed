/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './Modal.scss'

function ControlledModal ({
  children,
  isOpen = false,
  onClose = () => {},
  className
}) {
  const stopPropagation = (event) => {
    event.stopPropagation()
  }

  const handleClose = () => {
    onClose()
  }

  useEffect(() => {
    const handleScape = (event) => {
      if (event.key === 'Escape') {
        handleClose()
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
      <div
        className={`modal-container ${isOpen && 'modal-container__open'}`}
        onClick={handleClose}
      >
        <section className={`modal ${className || ''}`} onClick={stopPropagation}>
          <a className='closed' onClick={handleClose}>
            <AiOutlineCloseCircle size={30} />
          </a>
          {isOpen && children}
        </section>
      </div>
    </>
  )
}

export default ControlledModal
