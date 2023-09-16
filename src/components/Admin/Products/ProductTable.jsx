/* eslint-disable react/prop-types */
import React from 'react'
import { GoPencil } from 'react-icons/go'
import Loading from '../../Loading/Loading'
import './ProductTable.scss'

function ProductTable ({ products, isLoading, onOpenEdit }) {
  const headboard = ['Name', 'Description', 'Code', 'Category', 'Price', 'Stock', '']
  const isListEmpty = !products || !products.length

  return (
    <section className='product-table'>
      <div className='product-table__container'>
        {isLoading && (
          <Loading />
        )}
        <table className='table product-table'>
          <thead>
            <tr className='table__tr'>
              {headboard.map((title, index) => {
                return (
                  <th
                    key={index}
                    className='table__th'
                    scope="col"
                  >
                    {title}
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody className='table__body'>
            {isListEmpty && (
              <tr>
                <td
                  className='text table__td empty-message'
                  colSpan={headboard.length}
                >
                  No Results
                </td>
              </tr>
            )}
            {products.map((product, index) => {
              return (
                <tr key={`product-${index}`}>
                  <td className='card table__td'>
                    <img className='img' src={product.image} alt='Product Image' />
                    <div className='name'>
                      <div>{`${product.name}`}</div>
                    </div>
                  </td>
                  <td className='text table__td' title={product.description}>
                    {product.description.slice(0, 50)}...
                  </td>
                  <td className='text table__td'>
                    {product.code}
                  </td>
                  <td className='text table__td'>
                    {product.category}
                  </td>
                  <td className='price table__td'>
                    $ {product.price.toFixed(2)}
                  </td>
                  <td className='stock table__td'>
                    {product.stock}
                  </td>
                  <td className='stock table__td'>
                    <button
                      aria-label={`Edit Product ${product.name} Data`}
                      onClick={() => onOpenEdit(product)}
                    >
                      <GoPencil />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ProductTable
