import React from 'react'
import { Col } from 'react-bootstrap';

function LogoCard(props) {
    return (
        <Col md={12} className='perfect-center'>
            <div className='logo-info'>
                <div className='logo-avatar perfect-center'>
                    <img src={props.img} alt='' />
                </div>
                <p className='logo-desc'>{props.desc}</p>
                <div className='perfect-center'>
                    <a href='#/' className='logo-see-btn'>See their results</a>
                </div>
            </div>
        </Col>
    );
}

export default LogoCard;