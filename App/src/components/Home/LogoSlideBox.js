import React from 'react'
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LogoCard from '../Common/LogoCard';

function LogoSlideBox() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <div className="logo-slider-container">
            <div className="logo-slider">
                <div className="logo-slider-item ">
                    <Slider {...settings}>
                        <div className='img-slide'>
                            <LogoCard img='./assets/images/logo/1.png' desc='“There are many variations of passages of Lorem Ipsum available, majority have suffered alteration in some form, by injected humour,”' />
                        </div>
                        <div className='img-slide'>
                            <LogoCard img='./assets/images/logo/2.png' desc='“There are many variations of passages of Lorem Ipsum available, majority have suffered alteration in some form, by injected humour,”' />
                        </div>
                        <div className='img-slide'>
                            <LogoCard img='./assets/images/logo/1.png' desc='“There are many variations of passages of Lorem Ipsum available, majority have suffered alteration in some form, by injected humour,”' />
                        </div>
                        <div className='img-slide'>
                            <LogoCard img='./assets/images/logo/2.png' desc='“There are many variations of passages of Lorem Ipsum available, majority have suffered alteration in some form, by injected humour,”' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default LogoSlideBox;