import React, { useRef, useState } from 'react'
import { LuChevronsLeftRight } from 'react-icons/lu'
import './BeforeAfter.scss'

const urlBefore = 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393392/medical-site/before.jpg'
const urlAfter = 'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393391/medical-site/after_fnmo0x.jpg'

export default function App () {
  const [imgRevealFrag, setImgRevealFrag] = useState(0.5)
  const imgContainer = useRef()

  const slide = (xPosition) => {
    const containerBoundingRect = imgContainer.current?.getBoundingClientRect()
    setImgRevealFrag(() => {
      if (!containerBoundingRect) {
        return 0.5
      }

      if (xPosition < containerBoundingRect?.left) {
        return 0
      } else if (xPosition > containerBoundingRect?.right) {
        return 1
      }

      return (
        (xPosition - containerBoundingRect?.left) / containerBoundingRect?.width
      )
    })
  }

  const handleMouseDown = () => {
    window.onmousemove = handleMouseMove
    window.onmouseup = handleMouseUp
  }

  const handleTouchMove = (event) => {
    slide(event.touches.item(0).clientX)
  }

  const handleMouseMove = (event) => {
    slide(event.clientX)
  }

  const handleMouseUp = () => {
    window.onmousemove = null
    window.onmouseup = null
  }

  return (
    <div className="before-after">
      <section className='before-after__content'>
        <h2 className='before-after__title'>Before and after</h2>
        <h3 className='before-after__text'>See samples of our treatment</h3>
      </section>
      <section className="image-section">
        <section className="image-section__container" ref={imgContainer}>
          <img
            className="image image-after"
            src={urlAfter}
            alt="after"
          />
          <img
            className="image image-before"
            src={urlBefore}
            alt="before"
            style={{
              clipPath: `polygon(0 0, ${imgRevealFrag * 100}% 0, ${
                imgRevealFrag * 100
              }% 100%, 0 100%)`
            }}
            />
          <div className="handler" style={{ left: `${imgRevealFrag * 100}%` }}>
            <div className="handler__control">
              <div className="handler__line" />
              <button
                onMouseDown={handleMouseDown}
                onTouchMove={handleTouchMove}
                type="button"
                className="handler__circle"
                >
                <LuChevronsLeftRight />
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}
