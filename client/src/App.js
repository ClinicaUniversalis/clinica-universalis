import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Login from './components/Singin/Login';
import SingUp from './components/Singin/SignUp';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients/Patients';
import ResetPassword from './components/Singin/ResetPassword';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  const isLoggedIn = () => {
    return false;
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href={isLoggedIn ? '/dashboard' : '/login'}>Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/login">Home</Nav.Link>
              <Nav.Link href="/dashboard">Dashboard</Nav.Link>
              <Nav.Link className='btn dark' href="/lo">Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="vh-100" style={{ backgroundColor: "#ADCADB" }}>
          <Container className="py-5 h-100">
            <Routes>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/login/reset' element={<ResetPassword />}></Route>
              <Route path='/signup' element={<SingUp />}></Route>
              <Route path='/dashboard' element={<Dashboard />}></Route>
              <Route path='/patients' element={<Patients />}></Route>
              {/* TODO add more routes */}
            </Routes>
          </Container>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
