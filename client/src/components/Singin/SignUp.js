import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col, Card } from 'react-bootstrap';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../../utils/mutations';

const SingUp = () => {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [show, setShow] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        lastname: '',
        username: '',
        password: '',
        dob: '',
        specialty: '',
        email: '',
        licenseid: ''
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        try {
            if(error) setShow(true);
            const { data } = await addUser({
                variables: { ...formState }
            });
            console.log(data);
            Auth.login(data.addUser.token);
            alert(`Welcome ${data.addUser.username}`);
        } catch (e) {
            console.log(e);
        }
    };

    const closeAlert = async () => {
        setShow(false);
    }

    return (
        <Row className="d-flex justify-content-center align-items-center h-100">
            <Card style={{ borderRadius: "1rem" }}>
                <Card.Body className="p-4 p-lg-5 text-black">
                    {/* SignUp form section */}
                    <Form onSubmit={handleFormSubmit}>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Sign up</h5>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="name"
                                    placeholder="Name"
                                    name='name'
                                    value={formState.name}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="lastname"
                                    placeholder="Last Name"
                                    name='lastname'
                                    value={formState.lastname}
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
                                    value={formState.dob}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridSpeciality">
                                <Form.Label>Specialty</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="specialty"
                                    placeholder="Specialty"
                                    name='specialty'
                                    value={formState.specialty}
                                    onChange={handleInputChange} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="username"
                                    placeholder="Username"
                                    name='username'
                                    value={formState.username}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="password"
                                    placeholder="Password"
                                    name='password'
                                    value={formState.password}
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
                                    value={formState.email}
                                    onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridlicenseid">
                                <Form.Label>Medical License /ID</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="licenseid"
                                    placeholder="Medical License/ID"
                                    name='licenseid'
                                    value={formState.licenseid}
                                    onChange={handleInputChange} />
                            </Form.Group>
                        </Row>

                        <Button size='lg' variant="dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                    {error && (
                        <Alert show={show} variant="info" onClose={() => closeAlert()} dismissible>
                            <p>{error.message}</p>
                        </Alert>
                    )}
                </Card.Body>
            </Card>
        </Row>
    );
}

export default SingUp;
