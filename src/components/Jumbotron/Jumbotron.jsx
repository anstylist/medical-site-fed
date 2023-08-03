import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
                  <Link to={item.route}>{item.text}</Link>
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

Jumbotron.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  backgroundClassName: PropTypes.string,
  breadcrumb: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    route: PropTypes.string
  }))
}

export default Jumbotron
