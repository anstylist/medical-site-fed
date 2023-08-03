import React from 'react'
import { BsPlayCircle } from 'react-icons/bs'
import Modal from '../Modal/Modal'
import './WideVideoSection.scss'

function WideVideoSection () {
  return (
    <section className='wide-video'>
        <div className='wide-video__container'>
          <Modal
            trigger={<BsPlayCircle size="7rem" className='wide-video__play-icon' />}
            className='wide-video__modal'
          >
            <div className='wide-video__modal-content'>
              <iframe className='wide-video__modal-iframe' src="https://www.youtube.com/embed/xEfAF4M8sis" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </Modal>
          <h3 className='wide-video__text'>When the doctor gives the <br/> patient an intravenous injection</h3>
        </div>
    </section>
  )
}

export default WideVideoSection
