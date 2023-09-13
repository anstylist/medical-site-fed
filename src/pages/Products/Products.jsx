import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Products.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import CartProductsContext from '../../context/CartProductsContext'
import products from '../../__mocks__/products.json'

const Products = () => {
  const { setProductsList } = useContext(CartProductsContext)

  const handleAddToCart = (product) => {
    setProductsList(prevProducts => [...prevProducts, product])
  }

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Shop'
    }
  ]
  return (
    <>

        <Jumbotron
            pageTitle={'Shop'}
            backgroundClassName="product-shop_bg"
            breadcrumb={breadcrumb}
        />
        <div className="shop-products">
        <div className="products-banner">
            <p className="banner-results">Showing 1-9 of 27 results</p>
            <select className="banner-sort">
                <option value="default">Default sorting</option>
                <option value="lowest">Price: low to high</option>
                <option value="highest">Price: high to low</option>
            </select>
        </div>
        <div className="shop-products__product-list">
            {products.map(product => (
            <div className="product-list__product" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} className="product__image" />
                <h3 className="product__name">{product.name}</h3>
                <p className="product__price">${product.price.toFixed(2)}</p>
              </Link>
              <button className="product__add-to-cart"
                onClick={() => {
                  handleAddToCart(product)
                }}
                >Add to Cart <AiOutlineShoppingCart className='product__add-to-cart-icon'/>
              </button>
            </div>
            ))}
        </div>
        </div>
    </>
  )
}

export default Products
