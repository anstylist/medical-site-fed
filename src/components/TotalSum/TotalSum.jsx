import React, { useContext } from 'react'
import './TotalSum.scss'
import CartProductsContext from '../../context/CartProductsContext'

function TotalSum () {
  const { productsList } = useContext(CartProductsContext)
  const shipping = 0

  const calculateSubtotal = (item) => {
    return item.price * item.quantity
  }

  const calculateTotal = productsList.reduce((total, product) => total + calculateSubtotal(product), 0)

  return (
    <section className='total-sum'>
      <div className='total-sum__div'>
        <h3 className='total-sum__title'>Cart totals</h3>
        <ul className='total-sum__list'>
          <li className='total-sum__list-item'>
            <div>Subtotal</div>
            <div className='total-div'>
              ${Number(calculateTotal).toFixed(2)}
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
            ${Number(shipping + calculateTotal).toFixed(2)}
            </div>
          </li>
          <li className='total-sum__list-item'>
            <div>Payable Total</div>
            <div className='total-div__payable'>
              ${Number(shipping + calculateTotal).toFixed(2)}
            </div>
          </li>
        </ul>
        <button type='button' className='total-sum__btn'>Proceed to checkout</button>
      </div>
    </section>
  )
}

export default TotalSum
