/* eslint-disable react/prop-types */
import React from 'react'
import './Main.scss'

function Main ({ children }) {
  return (
    <main className='main'>
      <article className="container">
        {children}
      </article>
    </main>
  )
}

export default Main
