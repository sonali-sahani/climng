//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import CreatePatient from './components/CreatePatient';
import ShowPatientList from './components/ShowPatientList';
import ShowPatientDetails from './components/ShowPatientDetails';
import UpdatePatientInfo from './components/UpdatePatientInfo';
// import PatientCard from './components/PatientCard';
import Home from './components/Home';
import AllRoutes from './components/Routes';  
const App = () =>{
  return (
    <Router>
     <div>
       <Routes>
        <Route exact path= '/' element={<Home />}/>
        <Route path='/all-patient' element={<ShowPatientList />} />
        <Route path='/create-patient' element={<CreatePatient />} />
        <Route path="/show-patientDetails/:id" element={<ShowPatientDetails/>} />
        <Route path="/edit-patient/:id" element={<UpdatePatientInfo />} />
        <Route path="/Routes" element={<AllRoutes />} />
       </Routes>
     </div>
   </Router> 
  );
}

export default App;
