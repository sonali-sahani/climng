import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../App.css';
import navbar from './navbar';
import footer from './footer';

function UpdatePatientInfo(props) {
  const [patient, setPatient] = useState({
    patient_id: '',
    name: '',
    address: '',
    phone_no: '',
    gender: '',
    age: '',
    join_date: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/api/patients/${id}`)
      .then((res) => {
        setPatient({
          patient_id: res.data.patient_id,
          name: res.data.name,
          address:res.data.address,
          phone_no: res.data.phone_no,
          gender: res.data. gender,
          age: res.data.age,
          join_date: res.data.join_date,
        });
      })
      .catch((err) => {
        console.log('Error from UpdatePatientInfo GET request');
        console.log(err)
      });
  }, [id]);

  const onChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
      patient_id: patient.patient_id,
      name:  patient.name,
      address: patient.address,
      phone_no:  patient.phone_no,
      gender:  patient. gender,
      age:  patient.age,
      join_date:  patient.join_date,
    };

    axios
      .put(`/api/patients/${id}`, data)
      .then((res) => {
        navigate(`/show-patient/${id}`);
      })
      .catch((err) => {
        console.log('Error in UpdatePatientInfo PUT request ->');
        console.log(err)
      });
  };

  return (
    <div className='UpdatePatientInfo'>
      <navbar />
      
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show Patient List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit Patient</h1>
            <p className='lead text-center'>Update Patient's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={onSubmit}>
            <div className='form-group'>
              <label htmlFor='patient_id'>Patient_id</label>
              <input
                type='Number'
                placeholder='Enter Your ID'
                name='patient_id'
                className='form-control'
                value={patient.patient_id}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='name'>Name</label>
              <input
               type='text'
               placeholder='Enter Your Name'
               name='name'
               className='form-control'
               value={patient.name}
               onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='address'>Address</label>
              <input
                 type='text'
                 placeholder='Enter Your Address'
                 name='address'
                 className='form-control'
                 value={patient.address}
                 onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='phone_no'>Phone_no</label>
              <textarea
               type='Number'
               placeholder='Enter Your Phone.no'
               name='phone_no'
               className='form-control'
               value={patient.phone_no}
               onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='gender'>Gender</label>
              <input
                type='text'
                placeholder='Enter Your Gender'
                name='gender'
                className='form-control'
                value={patient.gender}
                onChange={onChange}
              />
            </div>
            <br />

            <div className='form-group'>
              <label htmlFor='age'>Age</label>
              <input
               type='Number'
               placeholder='Enter Your Age'
               name='age'
               className='form-control'
               value={patient.age}
               onChange={onChange}
              />
            </div>
            <br />
            <div className='form-group'>
              <label htmlFor='join_date'>Join_date</label>
              <input
               type='Date'
               placeholder='Enter Your Join-Date'
               name='join_date'
               className='form-control'
               value={patient.join_date}
               onChange={onChange}
              />
            </div>
            <br />

            <button
              type='submit'
              className='btn btn-outline-info btn-lg btn-block'
            >
              Update Patient
            </button>
            <br /> <br />
          </form>
        </div>
      </div>

      <footer />
    </div>
  );
}

export default UpdatePatientInfo;