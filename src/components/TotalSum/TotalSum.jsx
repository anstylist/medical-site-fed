import React, { useContext } from 'react'
import './TotalSum.scss'
import CartProductsContext from '../../context/CartProductsContext'
import { getTotalToPay } from './shop.util'

function TotalSum () {
  const { productsList } = useContext(CartProductsContext)
  const shipping = 0

  const calculatedTotal = getTotalToPay(productsList)

  return (
    <section className='total-sum'>
      <div className='total-sum__div'>
        <h3 className='total-sum__title'>Cart totals</h3>
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
        <button type='submit' className='total-sum__btn'>Proceed to checkout</button>
      </div>
    </section>
  )
}

export default TotalSum
