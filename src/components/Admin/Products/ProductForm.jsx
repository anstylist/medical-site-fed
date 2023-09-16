/* eslint-disable react/prop-types */
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import UploadFile from './UploadFile'
import './ProductForm.scss'

const FILE_SIZE = 2000 * 1024
const SUPPORTED_FORMATS = [
  'image/jpg',
  'image/jpeg',
  'image/png',
  'image/webp'
]

const getValidationSchema = (isEdition) => {
  return Yup.object().shape({
    name: Yup.string()
      .required('Product name is required')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
    price: Yup.number()
      .typeError('The price should be a number')
      .positive('The price must be a positive number')
      .required('Product price is required'),
    description: Yup.string()
      .max(500, 'Too Long!')
      .required('Product description is required'),
    stock: Yup.number()
      .required('Product stock is required')
      .positive('The stock must be a positive number')
      .integer('the stock must be an integer')
      .typeError('The the stock of products must be a number'),
    category: Yup.string()
      .required('Product category is required')
      .max(50, 'Too Long!'),
    code: Yup.string()
      .max(50, 'Too Long!'),
    image: Yup.mixed()
      .test(
        'fileSize',
        'File too large',
        value => {
          if (!value && isEdition) {
            return true
          }
          return value && value.size <= FILE_SIZE
        }
      )
      .test(
        'fileFormat',
        'Unsupported Format',
        value => {
          if (!value && isEdition) {
            return true
          }

          return value && SUPPORTED_FORMATS.includes(value.type)
        }
      )
      .test(
        'requiredWhenItIsCreated',
        'Select a file to create the product',
        value => {
          if (!value && !isEdition) {
            return false
          }
          return true
        }
      )
  })
}

const ProductForm = ({
  formTitle = 'Create Product',
  id = null,
  name = '',
  description = '',
  code = '',
  image = '',
  category = '',
  price = '',
  stock = '',
  onSave = () => {},
  onCancel = () => {}
} = {}) => {
  const initialValues = {
    name,
    description,
    code,
    image: '',
    category,
    price,
    stock
  }

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const formData = new FormData()
      formData.append('name', values.name)
      formData.append('description', values.description)
      formData.append('code', values.code)

      if (values.image) {
        formData.append('image', values.image)
      }

      formData.append('category', values.category)
      formData.append('price', values.price)
      formData.append('stock', values.stock)

      resetForm()
      await onSave({ id, formData })
    } catch (error) {
      console.error('Error sending data:', error)
    }
  }

  return (
    <section className='product-form__section'>
      <header className='product-form__header'>
        <h2 className='product-form__title'>
          {formTitle}
        </h2>
      </header>
      <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema(!!id)}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form className='product-form__form'>
            <div className='product-form__row'>
              <label className='product-form__label' htmlFor="name">Product Name</label>
              <Field className='product-form__field' type="text" id="name" name="name" />
              <ErrorMessage className='product-form__error' name="name" component="div" />
            </div>

            <div className='product-form__row'>
              <label className='product-form__label' htmlFor="description">Description</label>
              <Field className='product-form__field' as="textarea" id="description" name="description" />
              <ErrorMessage className='product-form__error' name="description" component="div" />
            </div>

            <div className='product-form__row'>
              <label className='product-form__label' htmlFor="image">Image</label>
              <Field
                component={UploadFile}
                className='product-form__field'
                type="file"
                id="image"
                name="image"
                accept="image/png, image/jpg, image/jpeg, image/webp"
                setFieldValue={setFieldValue}
              />
              <ErrorMessage className='product-form__error' name="image" component="div" />
            </div>

            <div className='product-form__row'>
              <label className='product-form__label' htmlFor="category">Category</label>
              <Field className='product-form__field' type="text" id="category" name="category" />
              <ErrorMessage className='product-form__error' name="category" component="div" />
            </div>

            <div className='product-form__row'>
              <label className='product-form__label' htmlFor="price">Price</label>
              <Field className='product-form__field' type="number" id="price" name="price" />
              <ErrorMessage className='product-form__error' name="price" component="div" />
            </div>

            <div className='product-form__row'>
              <label className='product-form__label' htmlFor="stock">Stock</label>
              <Field className='product-form__field' type="number" id="stock" name="stock" />
              <ErrorMessage className='product-form__error' name="stock" component="div" />
            </div>

            <div className='product-form__row'>
              <label className='product-form__label' htmlFor="code">Code</label>
              <Field className='product-form__field' type="text" id="code" name="code" />
              <ErrorMessage className='product-form__error' name="code" component="div" />
            </div>

            <section className='product-form__button--container'>
              <button
                className='product-form__button product-form__button--secondary'
                type="button"
                onClick={onCancel}
              >Cancel</button>
              <button
                className='product-form__button product-form__button--primary'
                type="submit"
              >Save</button>
            </section>
          </Form>
        )}
      </Formik>
    </section>
  )
}

export default ProductForm
