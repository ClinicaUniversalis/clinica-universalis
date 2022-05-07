import React from 'react';
import { Image } from 'react-bootstrap';
import './Spinner.css';
import spinner from '../../libs/images/universalis_spinner.webp';

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center spinnerContainer">
            <Image src={spinner} className="loadingIcon" />
        </div>
    );
};

export default Spinner;
