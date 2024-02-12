// import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ShowPatientList from './ShowPatientList';
import Navbar from './navbar';
import Footer from './footer';


const CreatePatient = (props) => {
  // Define the state with useState hook
  const onSubmit = (e) => {
   // prevent the page from refreshing
    e.preventDefault();
    //API calls with the help of axios
    // axios
    //   .post('/api/patients', patient)
    //   .then((res) => {
    //     setPatient({
    //       patient_id: '',
    //       name: '',
    //       address: '',
    //       phone_no: '',
    //       gender: '',
    //       age: '',
    //       join_date: '',
    //     });
    //   })
      
    }

  return (
    <div className='CreatePatient'>
      <Navbar/>
      <div className='container'>
        <div className='row'>
        <div className='col-md-8 m-auto'>
            <br />
            <Link to='/all-patient ' className='btn btn-outline-warning float-left'>
              show Patient List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add Patient</h1>
            <p className='lead text-center'>Create new Patient</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='number'
                  placeholder='Enter Your Name'
                  address='Enter Your Address'
                  className='form-control'
                  // value={patient.name}
                  // onChange={onChange}
                />
                
            </div>
            </form>
            
              </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CreatePatient;

