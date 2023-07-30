import React from 'react'
import './Jumbotron.scss'

const Jumbotron = ({ pageTitle, breadcrumb, backgroundClassName }) => {
  return (
    <section className={`jumbotron ${backgroundClassName || ''}`}>
      <div className='jumbotron__container'>
        <h1 className="jumbotron__title">{pageTitle}</h1>
        <nav className="jumbotron__nav">
          <ul className='jumbotron__list'>
            {breadcrumb?.map((item) => (
              <li key={`item-${item.text}`} className='jumbotron__list-item'>
                {item.route
                  ? (
                  <a href={item.route}>{item.text}</a>
                    )
                  : (
                  <span>{item.text}</span>
                    )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Jumbotron
