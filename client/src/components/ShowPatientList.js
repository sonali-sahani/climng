import React, { useState, useEffect } from 'react'

import '../App.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import PatientCard from './PatientCard'

function ShowPatientList() {
  const[ patients, setPatients] = useState([])

  useEffect(() => {
    axios
      .get(`/api/patients`)
      .then((res) => {
        setPatients(res.data)
      })
      .catch((err) => {
        console.log('Error From ShowPatientList')
        console.log(err)
      })
  },)

  const patientList = 
    patients.length === 0
     ? 'there is no Patient record!'
     : patients.map((patient, k) => <PatientCard patient={patient} key={k} />)

  return (
   <div className='ShowPatientList'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <br />
          <h2 className='display-4 text-center'>Patients List</h2>

        </div>

        <div className='col-md-11'>
          <Link to='/create-patient' className='btn btn-outline-warning float-right'>
            + Add New Patient
          </Link>
          <br />
          <br />
          <hr />
        </div>
        </div>

        <div className='list'>{patientList} </div>


      
    </div>
   </div>


  )
}

export default ShowPatientList