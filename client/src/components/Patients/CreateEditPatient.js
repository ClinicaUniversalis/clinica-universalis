import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col, Modal } from 'react-bootstrap';

// Here we import a helper function that will check if the email is valid
//import { checkPassword, validateUsername, validateEmail, validateId } from '../../utils/helpers';

function CreateEditPatient({
    show = false,
    handleClose,
}) {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [numberid, setNumberid] = useState('');
    const [email, setEmail] = useState('');
    const [bloodgroup, setBloodGroup] = useState('');
    const [phone, setPhone] = useState('');
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
        } else if (inputType === 'dob') {
            setDob(inputValue);
        } else if (inputType === 'numberid') {
            setNumberid(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'bloodgroup') {
            setBloodGroup(inputValue);
        } else {
            setPhone(inputValue);
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



        alert(`HELLO!`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setLastName('');
        setDob('');
        setNumberid('');
        setEmail('');
        setBloodGroup('');
        setPhone('');
        //setLastName('');
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>New Patient</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {/* New Patient form section */}
                <Form onSubmit={handleFormSubmit}>
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

                        <Form.Group as={Col} controlId="formGridNumberid">
                            <Form.Label>Number Id</Form.Label>
                            <Form.Control
                                size='lg'
                                type="numberid"
                                placeholder="Number ID"
                                name='numberid'
                                value={numberid}
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

                        <Form.Group as={Col} controlId="formGridBloodGroup">
                            <Form.Label>Blood Group</Form.Label>
                            <Form.Control
                                size='lg'
                                type="bloodgroup"
                                placeholder="Blood Group"
                                name='bloodgroup'
                                value={bloodgroup}
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                size='lg'
                                type="phone"
                                placeholder="Phone"
                                name='phone'
                                value={phone}
                                onChange={handleInputChange} />
                        </Form.Group>

                    </Row>
                    <Button size='lg' variant="dark" type="submit">
                        Submit
                    </Button>
                </Form>
            </Modal.Body>

            {errorMessage && (
                <Alert variant="info" onClose={() => setErrorMessage('')} dismissible>
                    <p>{errorMessage}</p>
                </Alert>
            )}
        </Modal>
    );
}

export default CreateEditPatient;
