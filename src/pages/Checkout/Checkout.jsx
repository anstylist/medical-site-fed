import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import {
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './Checkout.scss'
import TotalSum from '../../components/TotalSum/TotalSum'
import { getTotalToPay } from '../../components/TotalSum/shop.util'
import CartProductsContext from '../../context/CartProductsContext'
import CheckoutService from '../../services/CheckoutService'
import * as CountryService from '../../services/CountryService'
import Loading from '../../components/Loading/Loading'

const breadcrumb = [

  {
    text: 'Cart',
    route: '/cart'
  },
  {
    text: 'Checkout'
  }
]

function Checkout() {
  const navigateTo = useNavigate()
  const { productsList, setProductsList } = useContext(CartProductsContext)
  const [isLoading, setIsLoading] = useState(false)
  const [countries, setCountries] = useState([])
  const [checkout, setCheckout] = useState({
    name: '',
    email: '',
    phone: '',
    countryId: '',
    address: '',
    city: '',
    state: '',
    postCode: '',
    notes: ''
  })

  const [order, setOrder] = useState()

  const stripe = useStripe()
  const elements = useElements()

  const handlechange = async (event) => {
    setCheckout({ ...checkout, [event.target.name]: event.target.value })
  }

  const handleSubmitPayment = async (event) => {
    event.preventDefault()

    try {
      setIsLoading(true)

      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(
          CardNumberElement,
          CardExpiryElement,
          CardCvcElement
        )
      })

      if (error) {
        console.log(error)
        return
      }

      const response = await CheckoutService.checkout({
        paymentMethod,
        amount: getTotalToPay(productsList) * 100,
        checkout,
        products: productsList.map((product) => ({
          id: product.id,
          productId: product.id,
          price: product.price,
          quantity: product.quantity
        }))
      })

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })

      setOrder(response.order)
      handleSendMail(response.order)

      Swal.fire(
        'Order Created!',
        'Your order has been created successfully',
        'success'
      )

      setProductsList([])

      console.log('SUCCESS: ', response)
    } catch (error) {
      console.log('ERROR: ', error)
      Swal.fire(
        'Order creation error!',
        error.message,
        'warning'
      )
    } finally {
      elements.getElement(
        CardNumberElement,
        CardExpiryElement,
        CardCvcElement
      ).clear()

      setIsLoading(false)
    }
  }

  const handleSendMail = (order) => {
    try {
      const templateParams = {
        number_order: order.id,
        to_email: order.email,
        total_order: Number(productsList.reduce((subtotal, product) => subtotal + product.price * product.quantity, 0)).toFixed(2),
        my_html:
          `
    <table style="width:100%;">
    <thead
    style="font-weight: 400;
    background-color: #F4F6F6;
    text-align: left;
    color: #7F8C8D;
    padding: 1rem;"
    >
      <tr>
        <th>Product</th>
        <th>Quanty</th>
        <th>Price</th>
      </tr>
     </thead>
     <tbody> 
      ${productsList.map(product => `
        <tr style="border-bottom: 1px solid variables.$color-gray-light;">
          <td style="display: flex;
          justify-content: center; align-items: center;">
          <img src="${product.image}" style="width:70px"/>
          <p style="padding-left:20px">${product.name}</p>
          </td>
          <td>${product.quantity}</td>
          <td>${product.price}</td>
        </tr>
      `).join('')}
      </tbody> 
    </table>
  `
      }
      emailjs.send('service_q14m78b', 'template_gi17yu7', templateParams, 'PskvEZ0v3VVoD6fpn')
    } catch (error) {
      throw error.message
    }
  }

  useEffect(() => {
    CountryService.getCountry().then(data => {
      setCountries(data)
    })

    return () => {
      if (order) {
        setProductsList([])
      }
    }
  }, [])

  if (!productsList.length && !order) {
    navigateTo('/products')
  }

  return (

    <section className='checkout'>
      <Jumbotron
        pageTitle={'Checkout'}
        backgroundClassName="checkout__bg"
        breadcrumb={breadcrumb} />

      {order && (
        <div className='checkout__result'>
          The order order &nbsp;<b>{order.id}</b>&nbsp; has been created successfully!
        </div>
      )}

      {!order && (<section className='checkout__container'>
        <form className='checkout__form' onSubmit={handleSubmitPayment} method='POST'>
          <fieldset>
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
                  id='name'
                  name='name'
                  type="text"
                  className='checkout__input'
                  value={checkout.name}
                  onChange={handlechange}
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
                  value={checkout.email}
                  onChange={handlechange}
                />
              </div>
              <div className='checkout__form-container'>
                <label htmlFor='phone'>
                  Phone
                </label>
                <input
                  id='phone'
                  name='phone'
                  type="tel"
                  className='checkout__input'
                  value={checkout.phone}
                  onChange={handlechange}
                />
              </div>
              <div className='checkout__form-container'>
                <label htmlFor='countryId'>Country</label>
                <select
                  id='countryId'
                  name='countryId'
                  value={checkout.country}
                  onChange={handlechange}
                  required>
                  <option value=''>-- Select Country --</option>
                  {countries.map((item) => {
                    return (
                      <option key={item.id} value={item.id}>{item.name}</option>
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
                  value={checkout.city}
                  onChange={handlechange}
                />
              </div>
              <div className='checkout__form-container'>
                <label htmlFor='street-address'>
                  Street address
                </label>
                <input
                  id='street-address'
                  name='address'
                  type="text"
                  className='checkout__input'
                  value={checkout.address}
                  onChange={handlechange}
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
            {!order && (
              <section className='checkout__form-box'>
                <div className='checkout__title'>
                  <h3 className='checkout__title-h3'>
                    Card Details
                  </h3>
                </div>
                <div className='checkout__form-container'>
                  <label className='stripe-label'>Card Number</label>
                  <CardNumberElement className='stripe-input' options={{ showIcon: true }} />
                  <label className='stripe-label'>Expiration Date</label>
                  <CardExpiryElement className='stripe-input' />
                  <label className='stripe-label'>CVC</label>
                  <CardCvcElement className='stripe-input' />
                </div>
              </section>
            )}
          </fieldset>
          <section className='checkout__total'>
            <TotalSum inCheckout={!order} withButton={!order} buttonText='Checkout' />
          </section>
        </form>
      </section>)}

      {isLoading && <Loading />}
    </section>
  )
}

export default Checkout
