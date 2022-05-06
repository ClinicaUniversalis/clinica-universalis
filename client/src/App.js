import React from 'react';
import Login from './components/Forms/Login';
import SingUp from './components/Forms/SignUp';
import Dashboard from './components/Dashboard';
import ResetPassword from './components/Forms/ResetPassword';
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
            <Route path='/login/reset' element={<ResetPassword />}></Route>
            <Route path='/signup' element={<SingUp />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            {/* TODO add more routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
