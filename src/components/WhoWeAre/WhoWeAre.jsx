import { BsTelephoneFill } from 'react-icons/bs'
import './WhoWeAre.scss'
import { React } from 'react'
import { Link } from 'react-router-dom'

const WhoWeAre = () => {
  const img1 =
    'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393385/medical-site/about-4_n2kpdd.jpg'
  const img2 =
    'https://res.cloudinary.com/dzmkilinu/image/upload/v1689393386/medical-site/about-5_klveyi.jpg'
  return (
    <div className="whoweare-area">
      <div className="whoweare-content">
        <span className="whoweare-content__span">Who we are</span>
        <h1 className="whoweare-content__h1">
          We provide the highest level of care
        </h1>
        <div className="content-row1">
          <p className="content-row1__p">
            Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui
            posuere blandit vivamus magna justo lacinia eget consectetur
            convallis at tellus proin eget tortor.
          </p>
        </div>
        <div className="content-row2">
          <img className="content-row2__img" src={img1} alt="nurse" />
          <p className="content-row2__p">
            Donec velit neque auctor sit amet aliquam vel ullamcorper sit amet
            ligula. Lorem ipsum dolor sit amet consectetur adipiscing elit.
            Vivamus magna justo lacinia eget consectetur sed convallis at
            tellus.
          </p>
        </div>
        <div className="content-about-btn">
          <Link to="/about">
          <button type="button" className="content-about-btn__button">
            About us →
          </button>
          </Link>
        </div>
      </div>
      <div className="whoweare-contact">
        <div className="whoweare-contact--wrap">
          <img src={img2} alt="nurse-team" className="contact--wrap__img" />
          <div className="contact--about-info">
            <div className="about-info__box">
              <BsTelephoneFill className="about-info__icon" />
              <span className="about-info__txt">Emergency 24 hours</span>
              <a href="tel:0485443322" className="about-info__tel">
                +04 8544 3322
              </a>
            </div>
            <ul className="info-times">
              <li className="info-times__rows">
                <span className="info-times__day">Mon - Fri</span>
                <span className="info-times__hours">08:00 - 08:00</span>
              </li>
              <li className="info-times__rows">
                <span className="info-times__day">Saturday</span>
                <span className="info-times__hours">09:00 - 06:00</span>
              </li>
              <li className="info-times__rows">
                <span className="info-times__day">Sunday</span>
                <span className="info-times__hours">09:00 - 03:00</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre
