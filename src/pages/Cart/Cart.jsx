import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import './Cart.scss'
import CartProductsContext from '../../context/CartProductsContext'
import { BsTrash } from 'react-icons/bs'
import TotalSum from '../../components/TotalSum/TotalSum'
import { AuthContext } from '../../context/AuthContext'

const breadcrumb = [
  {
    text: 'Home',
    route: '/'
  },
  {
    text: 'Cart'
  }
]

function Cart () {
  const navigateTo = useNavigate()
  const { authData } = useContext(AuthContext)
  const { productsList, setProductsList } = useContext(CartProductsContext)
  const isEmptyProductsList = productsList?.length === 0

  const handleDeleteClick = (productToDelete) => {
    const isConfirmedDelete = confirm(`Do you want to delete the product ${productToDelete.name}?`)
    if (!isConfirmedDelete) {
      return -1
    }
    const newProducts = productsList.filter((product) => product.id !== productToDelete.id)
    setProductsList(newProducts)
    alert(`The product ${productToDelete.name} was deleted successfully`)
  }

  const handleQuantity = (productToChange, event) => {
    const inputValue = event.target.value || '1'
    let newQuantity = Number.parseInt(inputValue, 10)

    if (newQuantity > productToChange.stock) {
      newQuantity = productToChange.stock
    }

    const newProducts = productsList.map((product) => {
      if (product.id === productToChange.id) {
        return {
          ...product,
          quantity: newQuantity
        }
      }

      return product
    })

    setProductsList(newProducts)
  }

  const handleSubmitOrder = (event) => {
    event.preventDefault()
    console.log(authData)
    if (!authData.token) {
      navigateTo('/login')
      return
    }
    navigateTo('/checkout')
  }

  return (
    <section className='cart'>
      <Jumbotron
        pageTitle={'Cart'}
        backgroundClassName="cart__bg"
        breadcrumb={breadcrumb}/>
      <section className='cart__section-products'>
        <form className='cart__container' onSubmit={handleSubmitOrder}>
          <section className='cart__products-table-container'>
            <table className='cart__products-table'>
              <thead className='cart__thead'>
                <tr className='cart__tr'>
                  <th className='cart__th'>Remove</th>
                  <th className='cart__th'>Product</th>
                  <th className='cart__th'>Name</th>
                  <th className='cart__th'>Price</th>
                  <th className='cart__th'>Quantity</th>
                  <th className='cart__th'>Subtotal</th>
                </tr>
              </thead>
              <tbody className='cart__tbody'>
                {isEmptyProductsList && (
                  <tr className='cart__tr'>
                    <td
                    colSpan="6"
                    className='cart__td'
                    >
                      The list of the cart products is empty
                    </td>
                  </tr>
                )}
                {productsList?.map((item) => (
                  <tr key={item.id} className='cart__tr'>
                    <td className='cart__td'>
                      <button
                        className='cart__delete-button'
                        type='button'
                        onClick={() => handleDeleteClick(item)}
                        title={`Delete ${item.name} from the cart list`}
                        aria-label={`Delete ${item.name} from the cart list`}
                      >
                        <BsTrash />
                      </button>
                    </td>
                    <td className='cart__td'>
                      <img src={item.image} alt="image Product" className='cart__image' />
                    </td>
                    <td className='cart__td'>{item.name}</td>
                    <td className='cart__td'>
                    ${Number(item.price).toFixed(2)}
                    </td>
                    <td className='cart__td cart__td-quantity'>
                      <label aria-label={`${item.name} Quantity`}>
                        <input
                          name={`product-quantity-${item.id}`}
                          className='cart__quantity-input'
                          type="number"
                          required
                          min={1}
                          max={item.stock}
                          value={item.quantity}
                          onChange={ (event) => handleQuantity(item, event)}
                        />
                      </label>
                    </td>
                    <td className='cart__td'>
                      <span>${Number(item.price * item.quantity).toFixed(2)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
          <section className='cart__section-total'>
            <TotalSum />
          </section>
        </form>
      </section>
    </section>
  )
}

export default Cart
