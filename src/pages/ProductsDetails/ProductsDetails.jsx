import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Jumbotron from '../../components/Jumbotron/Jumbotron'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import './ProductsDetails.scss'
import useAddProductToCart from '../../hooks/useAddProductToCart'
import * as ProductService from '../../services/ProductService'

const ProductDetails = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState()
  const [addToCartSuccess, setAddToCartSuccess] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const handleChangeQuantity = (event) => {
    setQuantity(Number.parseInt(event.target.value, 10))
  }

  const { handleAddToCart } = useAddProductToCart()

  const breadcrumb = [
    {
      text: 'Home',
      route: '/'
    },
    {
      text: 'Product Details'
    }
  ]

  useEffect(() => {
    const { controller, productPromise } = ProductService.getProductById(productId)

    productPromise
      .then((data) => {
        setProduct(data)
      })

    return () => {
      controller.abort()
    }
  }, [])

  if (!product) {
    return <div className="product-details">Product not found</div>
  }

  return (
    <>
      <Jumbotron
        pageTitle={'Product Details'}
        backgroundClassName="product-details__bg"
        breadcrumb={breadcrumb}
      />
      <div className="product-details">
        <div className="product-details__image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details__info">
          <h2 className="product-details__name">{product.name}</h2>
          <p className="product-details__price">${product.price.toFixed(2)}</p>
          <div className="product-details__review">
            <div className="stars">
              ★★★★★
            </div>
            <p className='review-text'>(5 customer reviews)</p>
          </div>
          <p className="product-details__description">{product.description}</p>
          <div className="product-details__actions">
            <input
              className="product-details__quantity"
              type="number"
              value={quantity}
              onChange={handleChangeQuantity}
            />
            <button className="product-details__add-to-cart"
            onClick={() => {
              handleAddToCart(product, quantity)
              setAddToCartSuccess(false)
            }}
            >Add to Cart <AiOutlineShoppingCart/></button>
            {addToCartSuccess && (
            <p className="product-details__success-message">Successfully added to cart!</p>
            )}
            <p className="product-details__code">
              <span className="bold-text">Code: </span>
              <span className="grey-text">{product.code}</span>
            </p>
            <p className="product-details__category">
              <span className="bold-text">Category: </span>
              <span className="grey-text">{product.category}</span>
            </p>
          </div>
        </div>
      </div>
      </>
  )
}

export default ProductDetails
