import React, { useState } from 'react'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './Checkout.scss'
import { dataCountries } from '../../components/data'
import TotalSum from '../../components/TotalSum/TotalSum'

const breadcrumb = [
  {
    text: 'cart',
    route: '/cart'
  },
  {
    text: 'Checkout'
  }
]

function Checkout () {
  const [checkout, setCheckout] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    address: '',
    city: '',
    state: '',
    postCode: '',
    notes: ''
  })

  const handlechange = (event) => {
    setCheckout({ ...Checkout, [event.target.name]: event.target.value })
  }

  return (
    <section className='checkout'>
      <Jumbotron
        pageTitle={'Checkout'}
        backgroundClassName="checkout__bg"
        breadcrumb={breadcrumb} />
      <section className='checkout__container'>
        <form className='checkout__form'>
          <section className='checkout__form-box'>
            <div className='checkout__title'>
              <h3 className='checkout__title-h3'>
                Billing details
              </h3>
            </div>
            <div className='checkout__form-container'>
              <label htmlFor='name'>
                Full name
              </label>
              <input
                id='mane'
                name='name'
                type="text"
                className='checkout__input'
                value={checkout.name}
              />
            </div>
            <div className='checkout__form-container' >
              <label htmlFor='email'>
                Email address
              </label>
              <input
                id='email'
                name='email'
                type="email"
                className='checkout__input'
              />
            </div>
            <div className='checkout__form-container'>
              <label htmlFor='tel'>
                Phone
              </label>
              <input
                id='tel'
                name='tel'
                type="tel"
                className='checkout__input' />
            </div>
            <div className='checkout__form-container'>
              <label htmlFor='country'>Country</label>
              <select
                id='country'
                name='country'
                value={Checkout.country}
                onChange={handlechange}
                required>
                <option value=''>-- Select Country --</option>
                {dataCountries().map((item) => {
                  return (
                    <option key={item.id} value={item.name}>{item.name}</option>
                  )
                })}
              </select>
            </div>
            <div className='checkout__form-container'>
              <label htmlFor='city'>
                Town / City
              </label>
              <input
                id='city'
                name='city'
                type="text"
                className='checkout__input'
              />
            </div>
            <div className='checkout__form-container'>
              <label htmlFor='street-address'>
                Street address
              </label>
              <input
                id='Street address'
                name='Street address'
                type="text"
                className='checkout__input'
              />
            </div>
            <div className='checkout__form-container'>
              <label htmlFor='notes' id='label-textarea'>Order notes</label>
                <textarea
                  placeholder="Order notes"
                  id='notes'
                  name='notes'
                  value={checkout.notes}
                  onChange={handlechange}
                />
            </div>
          </section>
            <div className='checkout__total'>
              <TotalSum inCheckout={true} />
            </div>
        </form>
      </section>
    </section>
  )
}

export default Checkout
