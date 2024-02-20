import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


const PatientCard = (props) => {
    // Define the state with useState hook
   
    const patient=props.patient
    return (
      <div className='card-container'>
        <img
        src='https://as1.ftcdn.net/v2/jpg/06/59/99/78/1000_F_659997817_Lb8B0s2tZ7LpVtqGBSJhOJwowSKsz3vG.jpg'
        alt='Patients'
        height={200}
      />
        <div className='desc'>
        <h2>
          <Link to={ `/show-patientDetails/${patient._id}` }>
            {patient.name}  
          </Link> 
        </h2>

          <h3>{patient.patient_id}</h3>
          </div>
        </div>
      
    )
  }
  
  export default PatientCard
  
  