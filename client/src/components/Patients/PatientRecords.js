import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import RecordsGrid from './RecordsGrid';
import CreateMedicalRecord from './CreateMedicalRecord';
import './PatientRecords.css';
import patientAvatar from '../../libs/images/patient_avatar.jpg'

const PatientRecords = () => {
    const [showCreateMedicalRecordModal, setShowCreateMedicalRecordModal] = useState(false);
    //TODO: CREATE LOGIC TO SHOW CREATE MEDICAL RECORD MODAL, SEE PATIENTS GRID AS EXAMPLE

    return (
        <>
            {showCreateMedicalRecordModal ? (
                <CreateMedicalRecord
                // show={showCreateRecordModal}
                // handleClose={handleCreateRecordModalClose}
                />
            ) : null}

            <Card className="card" style={{ borderRadius: "1rem" }}>
                <Card.Body className="p-4 p-lg-5 text-black">
                    {/* Patient records */}
                    <Card.Title>Medical Records</Card.Title>
                    {/* <h2 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Medical Records</h2> */}
                    <Container>
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img className='circle' variant="top" src={patientAvatar} />
                                    <Card.Body>
                                        <Card.Text>
                                            Marco Antonio Gonzalez Guzman
                                        </Card.Text>
                                        <Card.Text>
                                            Birthday: 11/13/1977
                                        </Card.Text>
                                        <Card.Text>
                                            Bloud Group: A+
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={8} style={{ backgroundColor: "aliceblue" }}>
                                <h5>Records:</h5>
                                <RecordsGrid />
                            </Col>
                        </Row>
                        <Row>
                            <div className="col-sm-4" style={{ paddingTop: "15px" }}>
                                <Button size='md' variant="dark" type="submit">
                                    Add Record
                                </Button>
                            </div>
                        </Row>
                    </Container>

                </Card.Body>
            </Card>
        </>
    );
};

export default PatientRecords;
