import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const MyApps = () => {

    const CardContent = (
        name,
        appImage,
        about,
    ) => {
        return (
            <Card className="myApps-card">
                <Card.Img className="myApps-image" src={appImage} />
                <Card.Body className="myApps-card-body">
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card.Text className="myApps-card-text">{about}</Card.Text>
                </Card.Body>
            </Card>
        );
    };

    return (
        <Card>
            <Row xs={1} md={2} lg={5} className="g-4">
                <Col>
                    <Card>
                        <Link to='/patients'>
                            {CardContent(
                                'Patients',
                                'https://www.creativefabrica.com/wp-content/uploads/2019/04/Patient-icon-by-hellopixelzstudio-1-580x386.jpg',
                                'Add patients or look for patients'
                            )}
                        </Link>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Link to='/mymedicalrecords'>
                            {CardContent(
                                'Medical records',
                                'https://d29fhpw069ctt2.cloudfront.net/icon/image/59462/preview.svg',
                                'See my medical records'
                            )}
                        </Link>
                    </Card>
                </Col>
            </Row>
        </Card>

    );
};

export default MyApps;
