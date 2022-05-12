import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col, Modal, Card } from 'react-bootstrap';

function LimitedPatientInfo({
    show = false,
    handleClose,
}) {
    const [userID, setUserID] = useState('');

    const handleInputChange = (event) => {
        const { target } = event;
        const inputValue = target.value;

        setUserID(inputValue)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();

        //Show patient's full info card

        alert(`Rendering patient's info`);
    }

    return (
        <Modal>
            <Modal.Header closeButton>
                <Modal.Title>Patient Info Preview</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Card as={Col}>
                        
                    </Card>
                    <Form as={Col} onSubmit={handleFormSubmit}>
                        <Form.Group controlId="userIDInput">
                            <Form.Label>Input the user's ID or date of birth: </Form.Label>
                            <Form.Control
                                size='lg'
                                type="userID"
                                placeholder="UserID"
                                name='userID'
                                value={userID}
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Row>
            </Modal.Body>
        </Modal>
    );
}