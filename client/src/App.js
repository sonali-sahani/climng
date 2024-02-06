//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import CreatePatient from './components/CreatePatient';
import ShowPatientList from './components/ShowPatientList';
import ShowPatientDetails from './components/ShowPatientDetails';
import UpdatePatientInfo from './components/UpdatePatientInfo';
import PatientCard from './components/PatientCard';

const App = () =>{
  return (
    <Router>
     <div>
       <Routes>
        <Route exact path= '/' element={<PatientCard/>}/>
        <Route path='/create-patient' element={<CreatePatient />} />
        <Route path='/all-patient' element={<ShowPatientList />} />
        <Route path="/show-patient/:id" element={<ShowPatientDetails/>} />
        <Route path="/edit-patient/:id" element={<UpdatePatientInfo />} />
       </Routes>
     </div>
   </Router> 
  );
}

export default App;
