import React from 'react'
import { Col } from 'react-bootstrap';

function LancerInfoCard(props) {
    return (
        <Col md={4} className='perfect-center'>
            <div className='lancer-info'>
                <div className='avatar-container'>
                    <img src={props.img} alt='' />
                </div>
                <div className='col-12'>
                    <h5 className='lancer-position'>{props.title}</h5>
                </div>
                <div className='col-12 perfect-center'>
                    <h6 className='lancer-desc col-10'>{props.desc}
                    </h6>
                </div>
            </div>
        </Col>
    );
}

export default LancerInfoCard;