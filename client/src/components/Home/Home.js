import React from 'react';
import './Home.css';
import { Link, Navigate } from 'react-router-dom';
import Auth from '../../utils/auth';
import universalisLogo from '../../libs/images/universalis_logo.png';
import { Container } from 'react-bootstrap';

const Home = () => {
    const renderLander = () => {
        return (
            <Container className="lander">
                <img
                    src={universalisLogo}
                    alt="Logo"
                    style={{ height: '80%', width: '80%' }}
                />
                <div>
                    <Link to="/login" className="authLinks btn btn-info btn-lg text-white">
                        Login
                    </Link>
                </div>
            </Container>
        );
    };

    const redirect = () => {
        return <Navigate to="/dashboard" />;
    };

    return (
        <div className="Home">
            {Auth.loggedIn() ? redirect() : renderLander()}
        </div>
    );
};

export default Home;