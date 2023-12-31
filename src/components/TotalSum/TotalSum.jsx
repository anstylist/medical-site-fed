/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import './TotalSum.scss'
import CartProductsContext from '../../context/CartProductsContext'
import { getTotalToPay } from './shop.util'

function TotalSum ({ inCheckout, withButton = true, buttonText = 'Proceed to checkout' } = {}) {
  const { productsList } = useContext(CartProductsContext)
  const shipping = 0
  const calculatedTotal = getTotalToPay(productsList)

  return (
    <section className='total-sum'>
      <div className='total-sum__div'> 
        <h3 className='total-sum__title'>Cart totals</h3>
        {inCheckout && (
          <ul>
          {productsList.map((item) => (
            <li className='total-sum__list-item' key={item.id}>{item.name}
              <div className='total-div'>
                ${item.price.toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
        )}
        <ul className='total-sum__list'>
          <li className='total-sum__list-item'>
            <div>Subtotal</div>
            <div className='total-div'>
              ${Number(calculatedTotal).toFixed(2)}
            </div>
          </li>
          <li className='total-sum__list-item'>
            <div>Shipping</div>
            <div className='total-div'>
              ${Number(shipping).toFixed(2)}
            </div>
          </li>
          <li className='total-sum__list-item'>
            <div>Total</div>
            <div className='total-div'>
            ${Number(shipping + calculatedTotal).toFixed(2)}
            </div>
          </li>
          <li className='total-sum__list-item'>
            <div className='total-div__payable-label'>Payable Total</div>
            <div className='total-div__payable-number'>
              ${Number(shipping + calculatedTotal).toFixed(2)}
            </div>
          </li>
        </ul>
        {withButton && (
          <button type='submit' className='total-sum__btn'>{buttonText}</button>
        )}
      </div>
    </section>
  )
}

export default TotalSum
