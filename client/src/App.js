import React from 'react';
import Login from './components/Forms/Login';
import SingUp from './components/Forms/SignUp'
import NewPatient from './components/Forms/NewPatient'
import NewMedicalRecord from './components/Forms/NewMedicalRecord'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="vh-100" style={{ backgroundColor: "#ADCADB" }}>
        <div className="container py-5 h-100">
          <Routes>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<SingUp />}></Route>
            <Route path='/newpatient' element={<NewPatient />}></Route>
            <Route path='/newmedicalrecord' element={<NewMedicalRecord />}></Route>
            {/* TODO add more routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
