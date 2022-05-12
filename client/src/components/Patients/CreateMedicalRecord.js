import React, { useState } from 'react';
import { Form, Button, Alert, Row, Col } from 'react-bootstrap';

// Here we import a helper function that will check if the email is valid
//import { checkPassword, validateUsername, validateEmail, validateId } from '../../utils/helpers';

function CreateMedicalRecord() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [medicalstory, setMedicalStory] = useState('');
    const [currentcondition, setCurrentCondition] = useState('');   
    const [physicalexploration, setPhysicalExploration] = useState('');
    const [diagnostic, setDiagnostic] = useState('');
    const [treatment_prescription, setTreatmentPrescription] = useState('');
    const [orderofstudies, setOrderofStudies] = useState('');    
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and medicalstory of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state 
        if (inputType === 'medicalstory') {
            setMedicalStory(inputValue);
        } else if (inputType === 'currentcondition') {
            setCurrentCondition(inputValue);
        } else if (inputType === 'physicalexploration') {
            setPhysicalExploration(inputValue);
        } else if (inputType === 'diagnostic') {
            setDiagnostic(inputValue);
        } else if (inputType === 'treatment_prescription') {
            setTreatmentPrescription(inputValue);
        } 
        else {
            setOrderofStudies(inputValue);
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


        alert(`${diagnostic} was added`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setMedicalStory('');
        setCurrentCondition('');
        setPhysicalExploration('');
        setDiagnostic('');
        setTreatmentPrescription('');
        setOrderofStudies('');        
        //setCurrentCondition('');
    };

    return (
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-4 p-lg-5 text-black">
                    {/* New Medical Record form section */}
                    <Form>
                        <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>New Medical Record</h5>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridMedicalStory">
                                <Form.Label>Medical Story/Backgrounds</Form.Label>
                                <Form.Control 
                                    as="textarea" rows={3}                                   
                                    type="medicalstory"
                                    placeholder="Medical Backgrounds"
                                    name='medicalstory'
                                    value={medicalstory}
                                    onChange={handleInputChange} />
                            </Form.Group>                            
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridCurrentCondition">
                                <Form.Label>Current Condition</Form.Label>
                                <Form.Control
                                     as="textarea" rows={3} 
                                    type="currentcondition"
                                    placeholder="Current Condition"
                                    name='currentcondition'
                                    value={currentcondition}
                                    onChange={handleInputChange} />
                            </Form.Group>
                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridPhysicalExploration">
                                <Form.Label>Physical Exploration</Form.Label>
                                <Form.Control
                                     as="textarea" rows={3} 
                                    type="physicalexploration" 
                                    name="physicalexploration" 
                                    placeholder="Physical Exploration"
                                    value={physicalexploration}
                                    onChange={handleInputChange} />
                            </Form.Group>                           
                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridDiagnostic">
                                <Form.Label>Diagnostic</Form.Label>
                                <Form.Control
                                    size='lg'
                                    type="diagnostic"
                                    placeholder="Diagnostic"
                                    name='diagnostic'
                                    value={diagnostic}
                                    onChange={handleInputChange} />
                            </Form.Group>
                        </Row>



                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridTreatementPrescription">
                                <Form.Label>Treatement-Prescription</Form.Label>
                                <Form.Control
                                     as="textarea" rows={3} 
                                    type="treatment_prescription"
                                    placeholder="Treatment or/and Prescription"
                                    name='treatment_prescription'
                                    value={treatment_prescription}
                                    onChange={handleInputChange} />
                            </Form.Group>                           
                        </Row>


                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridOrderofStudies">
                                <Form.Label>Order of Studies</Form.Label>
                                <Form.Control
                                     as="textarea" rows={3} 
                                    type="orderofstudies"
                                    placeholder="Order Of Studies"
                                    name='orderofstudies'
                                    value={orderofstudies}
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

export default CreateMedicalRecord;
