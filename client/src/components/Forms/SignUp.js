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
    const [dob, setDob] = useState('');
    const [speciality, setSpeciality] = useState('');
    const [email, setEmail] = useState('');
    const [licenseid, setlicenseid] = useState('');
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
        } else if (inputType === 'speciality') {
            setSpeciality(inputValue);
        } else if (inputType === 'dob') {
            setDob(inputValue);
        } else if (inputType === 'licenseid') {
            setlicenseid(inputValue);
        } else {
            setEmail(inputValue);
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
            <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-4 p-lg-5 text-black">
                    {/* SignUp form section */}
                    <Form>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign up</h5>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="name"
                                    placeholder="Name"
                                    name='name'
                                    value={name}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
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
                            <Form.Group as={Col} controlId="formGridDOB">
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="date" 
                                    name="dob" 
                                    placeholder="Date of Birth"
                                    value={dob}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSpeciality">
                                <Form.Label>Speciality</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="speciality"
                                    placeholder="Speciality"
                                    name='speciality'
                                    value={speciality}
                                    onChange={handleInputChange} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridUsername">
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

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="email"
                                    placeholder="Email"
                                    name='email'
                                    value={email}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridlicenseid">
                                <Form.Label>Medical License /ID</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="licenseid"
                                    placeholder="Medical License/ID"
                                    name='licenseid'
                                    value={licenseid}
                                    onChange={handleInputChange} />
                            </Form.Group>
                        </Row>

                        <Button size='lg' variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {errorMessage && (
                        <Alert variant="info" onClose={() => setErrorMessage('')} dismissible>
                            <p>{errorMessage}</p>
                        </Alert>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SingUp;
