import React, { useState } from 'react';
import { Form, Button, Alert, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

const Login = () => {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [show, setShow] = useState(false);
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);
  const [errorDisplay, setErrorDisplay] = useState('Unidentified server error');
  const [loadingDisplay, setLoadingMessage] = useState('Loading');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setShow(true);
    try {

      // Attempting login
      setLoadingMessage('Checking user data');
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
      setShow(false);
    } catch (e) {
      
      //Login failed
      setErrorDisplay(e.message);
      console.error(e.message);
    } finally {

      // Catch 500 error as to not display verbose
      let error500 = false;
      if(error) {
        setErrorDisplay(error.message);
        error500 = error.message.includes('JSON');
        if (error500){
          console.error("Internal server error: ", error);
          setErrorDisplay('Internal server error; unable to process login at the moment.');
          setShow(true);
        }
      };
    }
    

    // clear form values
    setFormState({
      username: '',
      password: '',
    });
  };

  const closeAlert = async () => {
    setShow(false);
  }

  return (
    <Row className="d-flex justify-content-center align-items-center h-100">
      <Col xl={10}>
        <Card style={{ borderRadius: "1rem" }}>
          <Row className="g-0">
            <Col md={6} lg={5} className="d-none d-md-block">
              <img src="https://st.depositphotos.com/1017986/3055/i/950/depositphotos_30551731-stock-photo-female-doctor-with-stethoscope-and.jpg?forcejpeg=true"
                alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
            </Col>
            <Col md={6} lg={7} className="d-flex align-items-center">
              <Card.Body className="card-body p-4 p-lg-5 text-black">
                {/* Login form section */}
                <Form onSubmit={handleFormSubmit}>
                  <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your Universalis account</h5>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Control
                      size='lg'
                      type="username"
                      placeholder="Email"
                      name='username'
                      value={formState.username}
                      onChange={handleInputChange} />
                    <Form.Label>Email</Form.Label>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      size='lg'
                      type="password"
                      placeholder="Password"
                      name='password'
                      value={formState.password}
                      onChange={handleInputChange} />
                    <Form.Label>Password</Form.Label>
                  </Form.Group>

                  <div className="pt-1 mb-4">
                    <Button type='submit' size='lg' variant="dark">
                      Login
                    </Button>
                  </div>

                  <Link className="small text-muted" to='/login/reset'>Forgot pasword?</Link>

                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account?
                    <Link to='/signup' style={{ color: "#393f81" }}>Register here</Link>
                  </p>

                  <Link className="small text-muted" to='/privacy'>Privacy policy</Link>
                </Form>
                {error ? (
                  <Alert show={show} variant="info" onClose={() => closeAlert()} dismissible>
                    <p>{errorDisplay}</p>
                  </Alert>
                ) : <Alert show={show} variant="info" onClose={() => closeAlert()} dismissible>
                <p>{loadingDisplay}</p>
              </Alert>}
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Login;
