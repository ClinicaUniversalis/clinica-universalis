import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import './Patients.css';
import PatientsGrid from '../components/Patients/PatientsGrid';
import SearchGrid from '../components/Patients/SearchGrid';

const Patients = () => {

    return (
        <Container fluid style={{ backgroundColor: "#fffafa" }} className="patients-main">
            <Tabs className="mb-3" style={{display:"flex"}}>
                <Tab eventKey="patients" title="Patients">
                    <PatientsGrid />
                </Tab>
                <Tab eventKey="search" title="Search">
                    <SearchGrid style={{flex: "wrap"}}/>
                </Tab>
            </Tabs>
        </Container>
    );
};

export default Patients;
