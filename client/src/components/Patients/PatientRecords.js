import React from 'react';
import { Container, Tabs, Tab, Form, Row, Col, Button  } from 'react-bootstrap';
import RecordsGrid from './RecordsGrid';
//import PatientsGrid from './PatientsGrid';
import './PatientRecords.css';
import fotoPerfil from './data/fotoPerfil.webp'

const PatientRecords = () => {

    return (
       
            <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-4 p-lg-5 text-black">
                    {/* Patient records */}
                    <h2 className="fw-normal mb-3 pb-3" style={{ letterSpacing: "1px" }}>Medical Records</h2>
                    <div className="container">                        
                        <div className="row">
                            <div className="col-sm-4" style={{backgroundColor:"aliceblue"}}>
                            <p>Patient:</p>
                            <div className="d-flex align-items-center center" >
                                <img src={fotoPerfil} alt="Perfil" className="avatar" />                                
                            </div>
                            <div>
                                <p>Marco Antonio González Guzmán</p>
                                <p>Birthday: 11/13/1977</p>
                                <p>Bloud Group: A+</p>
                            </div>
                            </div>
                            <div className="col-sm-8" style={{backgroundColor:"lightsteelblue"}}>
                                <p>Records:</p>
                                <RecordsGrid />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4" style={{paddingTop:"15px"}}>
                                <Button size='md' variant="dark" type="submit">
                                    Add Record
                                </Button>
                            </div>
                        </div>
                    </div>
                        

                </div>
            </div>
        
    );
};

export default PatientRecords;
