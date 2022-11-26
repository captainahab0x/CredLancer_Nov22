import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='container footer-container '>
                <div className='footer'>
                    <Row>
                        <Col md={4}>
                            <p className='footer-btn'>Lorem ipsum dolor sit amet, consectetur adipiscing
                                sed do eiusmod tempor incididunt labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis
                                nostrud exercitation ullamco laboris nisi ut aliquip
                                ea commodo consequat.</p>
                        </Col>
                        <Col md={2}>
                            <div className='d-block'>
                                <div><Link className='footer-btn active-footer-btn'>Home</Link></div>
                                <div><Link className='footer-btn'>About Us</Link></div>
                                <div><Link className='footer-btn'>Services</Link></div>
                                <div><Link className='footer-btn'>Team</Link></div>
                                <div><Link className='footer-btn'>Blog</Link></div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='d-block'>
                                <div><Link className='footer-btn'>About Company</Link></div>
                                <div><Link className='footer-btn'>Our Testimonials</Link></div>
                                <div><Link className='footer-btn'>Latest News</Link></div>
                                <div><Link className='footer-btn'>Our misson</Link></div>
                                <div><Link className='footer-btn'>Get a free Quot</Link></div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className='d-block'>
                                <div><Link className='footer-btn'>App Development</Link></div>
                                <div><Link className='footer-btn'>Web Development</Link></div>
                                <div><Link className='footer-btn'>Graphic Design</Link></div>
                                <div><Link className='footer-btn'>Web Solution</Link></div>
                                <div><Link className='footer-btn'>App Design</Link></div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Footer;