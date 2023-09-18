import React, { useEffect, useState } from 'react'
import './Orders.scss'
import { ordersAll } from '../../../services/AdminService'
import Swal from 'sweetalert2'
import Loading from '../../Loading/Loading'
import { FaMagnifyingGlass, FaUser } from 'react-icons/fa6'
import { FaAt, FaPhone, FaMapMarkerAlt, FaRegCalendarAlt, FaDonate, FaFlag } from 'react-icons/fa'
import { MdOutlineShoppingBag, MdStore, MdOutlineLocalGroceryStore } from 'react-icons/md'
import { AiFillEye } from 'react-icons/ai'
import Modal from '../../Modal/Modal'

const Orders = () => {
  const [filter, setFilter] = useState('')
  const [ordersData, setOrdersData] = useState([])
  const [loading, setLoading] = useState(false)
  const [productsSold, setProductsSold] = useState(0)
  const [totalSales, setTotalSales] = useState(0)
  const [totalOrders, setTotalOrders] = useState(0)
  const headboard = ['Order number', 'Payment method', 'Date of creation', 'Order total', 'Status', 'Details']
  const headDeatils = ['Nro.', 'Name', 'Quanty', 'Price', 'Total']

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await ordersAll()
      setOrdersData(data)
      calculateTotalSales(data)
      console.log(data)
    } catch (error) {
      Swal.fire(
        'Error!',
        error,
        'warning'
      )
    } finally {
      setLoading(false)
    }
  }

  const calculateTotalSales = (data) => {
    const newTotalSales = data.reduce((total, order) => {
      const totalOrder = order.products.reduce((subtotal, product) => subtotal + product.price, 0)
      return total + totalOrder
    }, 0)
    const newTotalProductSold = data.reduce((total, order) => {
      const totalProduct = order.products.reduce((subtotal, product) => subtotal + product.quantity, 0)
      return total + totalProduct
    }, 0)
    setTotalSales(newTotalSales)
    setProductsSold(newTotalProductSold)
    setTotalOrders(data.length)
  }

  const changeHandler = (event) => {
    setFilter(event.target.value)
  }

  const filterData = ordersData.filter(order => {
    const id = order.id.toUpperCase()
    const filterUpperCase = filter.toUpperCase()
    return id.includes(filterUpperCase)
  })

  return (
    <div className='admin-orders'>
      {
        loading && <Loading />
      }
      {
        !loading && (
          <>

            <h2 className='title'> List of orders</h2>
            <div className='admin-orders-card'>
              <div className='card-overview'>
                <MdOutlineShoppingBag className='card-overview__icon' size={40} />
                <p className='card-overview__details'>
                  <h3 className='card-overview__details__title'>Total Sales</h3>
                  <h3>{
                    totalSales.toLocaleString('en-US',
                      { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }
                    )
                  }</h3>
                </p>
              </div>
              <div className='card-overview' >
                <MdStore className='card-overview__icon' size={40} />
                <p className='card-overview__details'>
                  <h3 className='card-overview__details__title'>Products Sold</h3>
                  <h3>{productsSold}</h3>
                </p>
              </div>
              <div className='card-overview'>
                <MdOutlineLocalGroceryStore className='card-overview__icon' size={40} />
                <p className='card-overview__details'>
                  <h3 className='card-overview__details__title'>Total Orders</h3>
                  <h3>{totalOrders}</h3>
                </p>
              </div>
            </div>
            <div className='admin-orders-header'>
              <FaMagnifyingGlass size={15} className='icon' />
              <input
                className='filterName'
                name='searchOrder'
                type='text'
                placeholder='Order number to search'
                onChange={changeHandler}
              />
            </div>
            <div className='admin-orders-content'>
              <table className='table'>
                <thead>
                  <tr>
                    {headboard.map((title, index) => {
                      return (
                        <th key={index} scope="col">{title}</th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {
                    filterData.map((order) => {
                      return (
                        <tr key={order.id}>
                          <td>
                            {
                              order.id
                            }
                          </td>
                          <td>
                            {
                              order.paymentMethod.toUpperCase()
                            }
                          </td>
                          <td>
                            {
                              new Date(order.createdAt).toISOString().split('T')[0]
                            }
                          </td>
                          <td>
                            {
                              order.products.reduce((total, product) => total + product.price, 0)
                                .toLocaleString('en-US',
                                  { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }
                                )
                            }
                          </td>
                          <td>
                            {order.status === 'success'
                              ? <h4 style={{ color: '#5F8D4E', backgroundColor: '#E9F7EF', textAlign: 'center', borderRadius: '5px' }}>SUCCESS</h4>
                              : <h4 style={{ color: '#F64E60', backgroundColor: '#FDEDEC', textAlign: 'center', borderRadius: '5px' }}>PENDING</h4>
                            }
                          </td>
                          <td>
                            <Modal
                              trigger={<a className='view-order'><span><AiFillEye size={18} /></span>View order</a>}
                              className='view-order__modal'
                            >
                              <div className='view-order__modal-content'>
                                <h3 className='title'>ORDER INFORMATION</h3>
                                <section className='card-information'>
                                  <div>
                                    <p>
                                      <span className='card-information_subtitle'>
                                        <FaUser size={13} className='icon' />Fullname
                                      </span>
                                      {order.user.fullName}
                                    </p>
                                    <p>
                                      <span className='card-information_subtitle'>
                                        <FaAt size={13} className='icon' />email
                                      </span>
                                      {order.user.email}
                                    </p>
                                    <p>
                                      <span className='card-information_subtitle'>
                                        <FaPhone size={13} className='icon' />Phone
                                      </span>
                                      {order.phone}
                                    </p>

                                  </div>
                                  <div>
                                    <p>
                                      <span className='card-information_subtitle'>
                                        <FaMapMarkerAlt size={13} className='icon' />City
                                      </span>
                                      {order.phone}
                                    </p>
                                    <p>
                                      <span className='card-information_subtitle'>
                                        <FaMapMarkerAlt size={13} className='icon' />Address
                                      </span>
                                      {order.address}
                                    </p>
                                    <p>
                                      <span className='card-information_subtitle'>
                                        <FaRegCalendarAlt size={13} className='icon' />Order Date
                                      </span>
                                      {new Date(order.createdAt).toISOString().split('T')[0]}
                                    </p>
                                  </div>
                                  <p>
                                    <span className='card-information_subtitle'>
                                      <FaFlag size={13} className='icon' />Status
                                    </span>
                                    {order.status === 'success'
                                      ? <h4 style={{ color: '#5F8D4E', backgroundColor: '#E9F7EF', textAlign: 'center', borderRadius: '5px' }}>SUCCESS</h4>
                                      : <h4 style={{ color: '#F64E60', backgroundColor: '#FDEDEC', textAlign: 'center', borderRadius: '5px' }}>PENDING</h4>
                                    }
                                  </p>
                                </section>
                                <section className='card-information'>
                                  <table className='table' style={{ marginTop: '2rem' }}>
                                    <thead>
                                      <tr>
                                        {
                                          headDeatils.map((title, index) => {
                                            return (
                                              <th key={index}>
                                                {title}
                                              </th>
                                            )
                                          })
                                        }
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {
                                        order.products.map((item, index) => {
                                          return (
                                            <tr key={index}>
                                              <td>
                                                {
                                                  index + 1
                                                }
                                              </td>
                                              <td>
                                                {
                                                  item.product.name
                                                }
                                              </td>
                                              <td>
                                                {
                                                  item.quantity
                                                }
                                              </td>
                                              <td>
                                                {
                                                  item.product.price
                                                }
                                              </td>
                                              <td>
                                                {
                                                  item.price
                                                }
                                              </td>

                                            </tr>
                                          )
                                        }
                                        )
                                      }
                                    </tbody>
                                  </table>
                                </section>
                                <p>
                                  <span className='card-information_subtitle'>
                                    <FaDonate size={13} className='icon' />Order Total
                                  </span>
                                  <h3 style={{ fontSize: '20px' }}>
                                    {
                                      order.products.reduce((total, product) => total + product.price, 0)
                                        .toLocaleString('en-US',
                                          { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }
                                        )
                                    }
                                  </h3>
                                </p>
                              </div>
                            </Modal>
                          </td>
                        </tr>)
                    })
                  }
                </tbody>
              </table>

            </div>
          </>
        )
      }
    </div>
  )
}

export default Orders
