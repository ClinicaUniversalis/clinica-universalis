import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Login from './components/Singin/Login';
import SingUp from './components/Singin/SignUp';
import Dashboard from './components/Dashboard';
import Patients from './components/Patients/Patients';
import ResetPassword from './components/Singin/ResetPassword';
import CreateEditPatient from './components/Patients/CreateEditPatient';
import NewMedicalRecord from './components/Patients/NewMedicalRecord';


// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  console.log(client);
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
              <Nav.Link className='btn dark' href="/home">Logout</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="vh-100" style={{ backgroundColor: "#ADCADB" }}>
          <Container className="py-5 h-100">
            <Routes>
              <Route
                path='/login'
                element={<Login />}
              />
              <Route
                path='/login/reset'
                element={<ResetPassword />}
              />
              <Route
                path='/signup'
                element={<SingUp />}
              />
              <Route
                path='/dashboard'
                element={<Dashboard />}
              />
              <Route
                path='/patients'
                element={<Patients />}
              />
              <Route
                path='/newpatient'
                element={<CreateEditPatient />}
              />
              <Route
                path='/newmedicalrecord'
                element={<NewMedicalRecord />}
              />
              {/* TODO add more routes */}
            </Routes>
          </Container>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
