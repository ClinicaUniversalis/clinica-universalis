import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import PatientsGrid from './PatientsGrid';


const Patients = () => {

    return (
        <Container fluid style={{ backgroundColor: "#fffafa" }}>
            <Tabs className="mb-3">
                <Tab eventKey="patients" title="Patients">
                    <PatientsGrid />
                </Tab>
                <Tab eventKey="search" title="Search">
                    {/* <SearchGrid /> */}
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Patients;
