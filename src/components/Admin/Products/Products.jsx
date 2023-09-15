import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { LuSearch } from 'react-icons/lu'
import { BiPlus } from 'react-icons/bi'
import Modal from '../../Modal/ControlledModal'
import ProductForm from './ProductForm'
import * as ProductService from '../../../services/ProductService'
import './Products.scss'
import ProductTable from './ProductTable'

function Products () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formTitle, setFormTitle] = useState('Create Product')
  const [product, setProduct] = useState() // This is for edition or creation of a product
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([]) // This is a list of products
  const [isLoading, setIsLoading] = useState(false)
  const [lastController, setLastController] = useState()

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmitSearch = (event) => {
    event.preventDefault()

    return listProducts()
  }

  const handleOpenProductForm = () => {
    setIsModalOpen(true)
    const formTitle = product?.id ? 'Edit Product' : 'Create Product'
    setFormTitle(formTitle)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setProduct(undefined)
  }

  const listProducts = () => {
    if (lastController) {
      lastController.abort()
    }

    setIsLoading(true)
    const { productsPromise, controller } = ProductService.searchProducts(search)

    setLastController(controller)

    return productsPromise
      .then((data) => {
        if (Array.isArray(data)) {
          setProducts(data)
        }
      })
      .catch((error) => {
        Swal.fire(
          'Error!',
          error.message,
          'warning'
        )
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleSave = ({ id, formData }) => {
    console.log('-- AC: ', { id, formData })
    setIsLoading(true)

    if (!id) {
      return ProductService.createProduct(formData)
        .then((data) => {
          handleCloseModal()
          setProduct(undefined)
          Swal.fire(
            'Product Created!',
            `The product ${data.product.name} has been created successfully`,
            'success'
          )
          listProducts()
        })
        .catch((error) => {
          handleCloseModal()
          setProduct(undefined)
          Swal.fire(
            'Error!',
            error.message,
            'warning'
          )
        })
        .finally(() => {
          setIsLoading(false)
        })
    }

    return ProductService.updateProduct(id, formData)
      .then((data) => {
        handleCloseModal()
        setProduct(undefined)
        Swal.fire(
          'Product Updated!',
          `The product ${data.product.name} has been updated successfully`,
          'success'
        )
        listProducts()
      })
      .catch((error) => {
        handleCloseModal()
        setProduct(undefined)
        Swal.fire(
          'Error!',
          error.message,
          'warning'
        )
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleOpenEdit = (product) => {
    setProduct(product)
    handleOpenProductForm()
  }

  useEffect(() => {
    listProducts()

    return () => {
      if (lastController) {
        lastController.abort()
      }
    }
  }, [])

  return (
    <section className='products'>
      <header className='products__header'>
        <h1 className='products__title'>Products</h1>
      </header>
      <section className='products__main-actions'>
        <form className='products__search-form' onSubmit={handleSubmitSearch}>
          <div className='products__search--input-container'>
            <label htmlFor='search' className='products__search--icon'>
              <LuSearch />
            </label>
            <input
              className='products__search'
              type="text"
              name="search"
              id="search"
              placeholder='Search products'
              value={search}
              onChange={handleSearchChange}
            />
          </div>
          <button className='products__btn-search' type='submit'>
            Search
          </button>
        </form>
        <button className='products__btn-add'
          onClick={handleOpenProductForm}
        >
          <BiPlus />
          Add Product
        </button>
      </section>
      <ProductTable
        products={products}
        isLoading={isLoading}
        onOpenEdit={handleOpenEdit}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        className='products__modal'
      >
        <ProductForm
          formTitle={formTitle}
          onSave={handleSave}
          onCancel={handleCloseModal}
          {...product}
        />
      </Modal>
    </section>
  )
}

export default Products
