import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Products.scss'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import * as ProductService from '../../services/ProductService'
import useAddProductToCart from '../../hooks/useAddProductToCart';

const Products = () => {
  const [products, setProducts] = useState([])
  const { handleAddToCart } = useAddProductToCart()

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Shop'
    }
  ]

  useEffect(() => {
    const { controller, productsPromise } = ProductService.searchProducts()

    productsPromise
      .then((data) => {
        setProducts(data)
      })

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <>

        <Jumbotron
            pageTitle={'Shop'}
            backgroundClassName="product-shop_bg"
            breadcrumb={breadcrumb}
        />
        <div className="shop-products">
        {/* <div className="products-banner">
            <p className="banner-results">Showing 1-9 of 27 results</p>
            <select className="banner-sort">
                <option value="default">Default sorting</option>
                <option value="lowest">Price: low to high</option>
                <option value="highest">Price: high to low</option>
            </select>
        </div> */}
        <div className="shop-products__product-list">
          {!products && (
            <div className="product-list__product">
              <h3> No products yet, try it later </h3>
            </div>
          )}
            {products?.map(product => (
            <div className="product-list__product" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} className="product__image" />
                <h3 className="product__name">{product.name}</h3>
                <p className="product__price">${product.price.toFixed(2)}</p>
              </Link>
              <button className="product__add-to-cart"
                onClick={() => {
                  handleAddToCart(product, 1)
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
