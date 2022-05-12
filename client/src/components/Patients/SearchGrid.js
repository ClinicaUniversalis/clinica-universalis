import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/dist/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'; // Optional theme CSS
import { Row, NavLink, Button, Tab, Container, Form } from 'react-bootstrap';
import { BsPersonPlusFill } from 'react-icons/bs';
import { render } from 'react-dom';
import Spinner from '../../components/Spinner/Spinner';
import CreateEditPatient from './CreateEditPatient';
//import { FilterComponent } from 'ag-grid-community/dist/lib/components/framework/componentTypes';

const SearchGrid = () => {
    const gridRef = useRef();
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
    const [showLimitedPatientInfoModal, setShowLimitedPatientInfoModal] = useState(false);
    const [patientSearchName, setPatientSearchName] = useState("");
    const [patientSearchID, setPatientSearchID] = useState("");
    const [patientSearchBD, setPatientSearchBD] = useState("");

    const handleShowLimitedPatientInfoModalOpen = () => {
        showLimitedPatientInfoModal(true);
    }

    const handleCreatePatientModalClose = () => {
        showLimitedPatientInfoModal(false);
    }
    const handleInputChange = (event) =>{
        const { target } = event;
        const inputType = target.name;
        const inputValue = target.value;

        if(inputType == "patientSearchName"){
            setPatientSearchName(inputValue);
        }

        if(inputType == "patientSearchID"){
            setPatientSearchID(inputValue);
        }

        if(inputType == "patientSearchBD"){
            setPatientSearchBD(inputValue);
        }
    }

    // Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        { field: 'full name', filter: true},
        { field: 'email', filter: true },
        { field: 'phone', filter: true },
    ]);

    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo(() => ({
        sortable: true
    }));

    // Example of consuming Grid Event
    const cellClickedListener = useCallback(event => {
        console.log('cellClicked', event);
    }, []);

    // Example load data from sever
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);

    // Example using Grid's API
    const buttonListener = useCallback(e => {
        gridRef.current.api.deselectAll();
    }, []);

    return (
        <>
        <Form>
                    <Form.Group controlId="patientSearchNameInput" style={{margin:"3em"}}>
                        <Form.Label>Search by name: </Form.Label>
                        <Form.Control 
                            size='lg'
                            type="patientSearchName"
                            placeholder="Search patient"
                            name="patientSearchName"
                            value={patientSearchName}
                            onChange={handleInputChange}/>
                    <Form.Label>Search ID: </Form.Label>
                        <Form.Control 
                            size='lg'
                            type="patientSearchID"
                            placeholder="Search ID"
                            name="patientSearchID"
                            value={patientSearchID}
                            onChange={handleInputChange}/>
                    <Form.Label>Search by Birth Date: </Form.Label>
                        <Form.Control 
                            size='lg'
                            type="patientSearchBD"
                            placeholder="Search BD"
                            name="patientSearchBD"
                            value={patientSearchBD}
                            onChange={handleInputChange}/>
                    </Form.Group>
                </Form>
            <Row>
                
            </Row>


            {rowData ? (
                <Container>
                    {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
                    <div className="ag-theme-alpine" style={{ width: 800, height: 400 }}>
                        <AgGridReact
                            ref={gridRef} // Ref for accessing Grid's API
                            rowData={rowData} // Row Data for Rows
                            columnDefs={columnDefs} // Column Defs for Columns
                            defaultColDef={defaultColDef} // Default Column Properties
                            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                            rowSelection='single' // Options - allows click selection of rows
                            onCellClicked={cellClickedListener} // Optional - registering for Grid Event
                        />
                    </div>
                </Container>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default SearchGrid;
