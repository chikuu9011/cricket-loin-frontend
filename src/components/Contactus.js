import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './CSS/Contact.css'

const Contactus = () => {
    return (
        <Container>
            <div className="C-title">
                <h4>Contact Us</h4>
            </div>
            <Container>
                <Row>
                    <Col xl={6} lg={12} md={12} sm={12} xs={12} className="mb-3">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7532.967896896324!2d72.95374713749953!3d19.261309606246414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bbba6c144557%3A0xc85de3afebe8e19f!2sHaware%20City%2C%20Thane%20West%2C%20Thane%2C%20Maharashtra%20400615!5e0!3m2!1sen!2sin!4v1719318629519!5m2!1sen!2sin"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Col>
                    <Col xl={6} lg={12} md={12} sm={12} xs={12}>
                        <Container>
                            <Row className="mb-3">
                                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <img src='./material-symbols--call.png' alt='Placeholder' className='C-icon' />
                                </Col>
                                <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                                    <p>9356601524</p>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <img src='./material-symbols--mail.png' alt='Placeholder' className='C-icon' />
                                </Col>
                                <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                                    <p>sachinparhad@gmail.com</p>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xl={3} lg={3} md={3} sm={3} xs={3}>
                                    <img src='./mdi--building.png' alt='Placeholder' className='C-icon' />
                                </Col>
                                <Col xl={9} lg={9} md={9} sm={9} xs={9}>
                                    <p>Haware-city, anand nagar, goadbandhar,thane.</p>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Contactus;
