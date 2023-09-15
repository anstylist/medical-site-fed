import React, { useEffect, useState } from 'react'
import { patientAll } from '../../../services/AdminService'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { FaTrashAlt } from 'react-icons/fa'
import { RxUpdate } from 'react-icons/rx'
import Swal from 'sweetalert2'
import Loading from '../../Loading/Loading'
import './Patients.scss'
import { updateUser } from '../../../services/UserService'

const Patients = () => {
  const [filter, setFilter] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [patientsData, setPatientsData] = useState([])
  const [loading, setLoading] = useState(false)
  const headboard = ['Name', 'Email', 'Phone Number', 'Country', 'Gender', 'RH', 'Birth Date', 'Status', 'Actions']

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    try {
      const data = await patientAll()
      setPatientsData(data)
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

  const changeHandler = (event) => {
    setFilter(event.target.value)
  }

  const updateStatus = async (email, status) => {
    const data = {
      status
    }
    await updateUser(email, data)

    const updateData = patientsData.map((patient) => {
      return patient.email === email ? { ...patient, status } : patient
    })
    setPatientsData(updateData)
  }

  const modalUpdateStatus = (email, status) => {
    Swal.fire({
      title: 'Are you sure?',
      text: status ? "You will activate this user's account!" : "you will deactivate this user's account",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: status ? 'Yes, activate it!' : 'Yes, deactivate it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await updateStatus(email, status)
          await Swal.fire(
            status ? 'Activated!' : 'Deactivated!',
            status ? 'Account successfully activated' : 'Account was successfully deactivated',
            'success'
          )
        } catch (error) {
          await Swal.fire(
            'Error!',
            error,
            'warning'
          )
        }
      }
    })
  }

  const nextPage = () => {
    if (currentPage + 9 < filterData.length) {
      setCurrentPage(currentPage + 9)
    }
  }

  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 9)
    }
  }

  const filterData = patientsData.filter((item) => { return item.fullName.toUpperCase().includes(filter.toUpperCase()) })

  return (
    <div className='admin-patients'>
      {
        loading && <Loading />
      }
      {
        !loading &&
        (
          <>
            <h2 className='title'> List of patients</h2>
            <h2 className='subtitle'>{`${patientsData.length} registered patients`}</h2>
            <div className='admin-patients-header'>
              <FaMagnifyingGlass size={15} className='icon' />
              <input
                className='filterName'
                name='searchPatient'
                type='text'
                placeholder='Patient name to search'
                onChange={changeHandler}
              />
            </div>
            <div className='admin-patients-content'>
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
                  {filterData.map((patient, index) => {
                    return (
                      <tr key={index}>
                        <td>
                          {patient.fullName}
                        </td>
                        <td >
                          {patient.email}
                        </td>
                        <td >
                          {patient.phone}
                        </td>
                        <td >
                          {patient.country}
                        </td>
                        <td >
                          {patient.gender}
                        </td>
                        <td >
                          {patient.rh}
                        </td>
                        <td >
                          {new Date(patient.birthDate).toISOString().split('T')[0]}
                        </td>
                        <td>
                          {patient.status
                            ? <h4 style={{ color: '#5F8D4E', backgroundColor: '#E9F7EF', textAlign: 'center', borderRadius: '5px' }}>Active</h4>
                            : <h4 style={{ color: '#F64E60', backgroundColor: '#FDEDEC', textAlign: 'center', borderRadius: '5px' }}>Inactive</h4>}
                        </td>
                        <td>
                          {
                            patient.status
                              ? <FaTrashAlt className='icon' onClick={() => modalUpdateStatus(patient.email, false)} />
                              : <RxUpdate className='icon' onClick={() => modalUpdateStatus(patient.email, true)} />
                          }
                        </td>
                      </tr>
                    )
                  }).slice(currentPage, currentPage + 9)
                  }
                </tbody>
              </table>
              <div className='buttons'>
                <button
                  onClick={previousPage}
                >
                  Previous
                </button>
                <button
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )
      }

    </div>
  )
}

export default Patients
