import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validatePassword, validateUsername } from '../../utils/helpers';

const Login = () => {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // TODO validate username and password, the following code is just a test to validate the alert
    // if (userName != 'test') {
    //   setErrorMessage(
    //     `Wrong username or password!`
    //   );
    //   return;
    // }


    alert(`Welcome ${userName}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setPassword('');
  };

  return (
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{ borderRadius: "1rem" }}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://st.depositphotos.com/1017986/3055/i/950/depositphotos_30551731-stock-photo-female-doctor-with-stethoscope-and.jpg?forcejpeg=true"
                alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                {/* Login form section */}
                <Form>
                  <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign into your Universalis account</h5>
                  <Form.Group className="mb-3" controlId="username">
                    <Form.Control
                      size='lg'
                      type="username"
                      placeholder="Username"
                      name='userName'
                      value={userName}
                      onChange={handleInputChange} />
                    <Form.Label>Username</Form.Label>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="password">
                    <Form.Control
                      size='lg'
                      type="password"
                      placeholder="Password"
                      name='password'
                      value={password}
                      onChange={handleInputChange} />
                    <Form.Label>Password</Form.Label>
                  </Form.Group>

                  <div className="pt-1 mb-4">
                    <Button size='lg' variant="dark" onClick={handleFormSubmit}>
                      Login
                    </Button>
                  </div>

                  <Link className="small text-muted" to='/login/reset'>Forgot pasword?</Link>

                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>Don't have an account?
                    <Link to='/signup' style={{ color: "#393f81" }}>Register here</Link>
                  </p>

                  {/* <a href="#!" className="small text-muted">Terms of use.</a> */}
                  <Link className="small text-muted" to='/privacy'>Privacy policy</Link>
                </Form>
                {errorMessage && (
                  <Alert variant="info" onClose={() => setErrorMessage('')} dismissible>
                    <p>{errorMessage}</p>
                  </Alert>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
