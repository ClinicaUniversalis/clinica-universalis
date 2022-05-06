import React, { useState } from 'react';
import { Form, Button, Alert, InputGroup, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateUsername, validateEmail, validateId } from '../../utils/helpers';

function SingUp() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmaPassword] = useState('');
    const [license, setLicense] = useState('');
    const [id, setId] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state 
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'lastName') {
            setLastName(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'password') {
            setPassword(inputValue);
        } else if (inputType === 'confirmPassword') {
            setConfirmaPassword(inputValue);
        } else if (inputType === 'license') {
            setLicense(inputValue);
        } else {
            setId(inputValue);
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
            {/* <div className="col col-xl-10"> */}
            <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                    {/* <div className="col-md-6 col-lg-5 d-none d-md-block">
                            <img src="https://st.depositphotos.com/1017986/3055/i/950/depositphotos_30551731-stock-photo-female-doctor-with-stethoscope-and.jpg?forcejpeg=true"
                                alt="login form" className="img-fluid" style={{ borderRadius: "1rem 0 0 1rem" }} />
                        </div> */}
                    {/* <div className="col-md-6 col-lg-7 d-flex align-items-center"> */}
                    <div className="card-body p-4 p-lg-5 text-black">
                        {/* SignUp form section */}
                        <Form>
                            <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign up</h5>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        size='lg'
                                        type="name"
                                        placeholder="Name"
                                        name='name'
                                        value={name}
                                        onChange={handleInputChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        size='lg'
                                        type="lastname"
                                        placeholder="Last Name"
                                        name='lastName'
                                        value={lastName}
                                        onChange={handleInputChange} />
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control
                                        size='lg'
                                        type="userName"
                                        placeholder="Username"
                                        name='userName'
                                        value={userName}
                                        onChange={handleInputChange} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        size='lg'
                                        type="password"
                                        placeholder="Password"
                                        name='password'
                                        value={password}
                                        onChange={handleInputChange} />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>State</Form.Label>
                                    <Form.Select defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>

                            <Button size='lg' variant="dark" type="submit">
                                Submit
                            </Button>
                            {/* COMMENTS */}
                        </Form>
                        {errorMessage && (
                            <Alert variant="info" onClose={() => setErrorMessage('')} dismissible>
                                <p>{errorMessage}</p>
                            </Alert>
                        )}
                    </div>
                    {/* </div> */}
                </div>
            </div>
            {/* </div> */}
        </div>
    );
}

export default SingUp;
