import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import { Row, NavLink, Container } from 'react-bootstrap';
import { BsPersonPlusFill } from 'react-icons/bs';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Spinner from '../../components/Spinner/Spinner';
import CreateEditPatient from './CreateEditPatient';

const PatientsGrid = () => {
    const gridRef = useRef();
    const [showCreateEditPatientModal, setShowCreateEditPatientModal] = useState(false);
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row

    const handleCreatePatientModalOpen = () => {
        setShowCreateEditPatientModal(true);
    };

    const handleEditPatientModalClose = () => {
        setShowCreateEditPatientModal(false);
    };

    // Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
        { field: 'delete', filter: true},
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
            {showCreateEditPatientModal ? (
                <CreateEditPatient
                    show={showCreateEditPatientModal}
                    handleClose={handleEditPatientModalClose}
                />
            ) : null}

            <Row>
                <NavLink>
                    <BsPersonPlusFill
                        data-testid="addPatientButton"
                        size={60}
                        style={{ padding: '15px' }}
                        className={'text-primary'}
                        onClick={() => handleCreatePatientModalOpen()}
                    />
                </NavLink>
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
                            rowSelection='multiple' // Options - allows click selection of rows
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

export default PatientsGrid;
