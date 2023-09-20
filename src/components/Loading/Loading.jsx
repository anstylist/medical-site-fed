import React from 'react'
import './Loading.scss'

const Loading = () => {
  return (
    <div className='loading'>
      <img
        src='https://res.cloudinary.com/dzmkilinu/image/upload/v1692693479/medical-site/loading_xcwewp.gif'
        style={{ width: '200px', height: '200px' }}
      />
    </div>
  )
}

export default Loading
