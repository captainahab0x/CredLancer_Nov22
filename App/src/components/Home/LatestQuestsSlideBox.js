import React from 'react'
import Slider from "react-slick";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgCard from '../Common/ImgCard';

function LatestQuestsSlideBox() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <div className="quests-slider-container">
            <div className="quests-slider">
                <div className="quests-slider-item ">
                    <Slider {...settings}>
                        <div className='img-slide'>
                            <ImgCard img='./assets/images/slide/1.png' />
                            <ImgCard img='./assets/images/slide/2.png' />
                        </div>
                        <div className='img-slide'>
                            <ImgCard img='./assets/images/slide/3.png' />
                            <ImgCard img='./assets/images/slide/4.png' />
                        </div>
                        <div className='img-slide'>
                            <ImgCard img='./assets/images/slide/5.png' />
                            <ImgCard img='./assets/images/slide/6.png' />
                        </div>
                        <div className='img-slide'>
                            <ImgCard img='./assets/images/slide/7.png' />
                            <ImgCard img='./assets/images/slide/8.png' />
                        </div>
                        <div className='img-slide'>
                            <ImgCard img='./assets/images/slide/1.png' />
                            <ImgCard img='./assets/images/slide/2.png' />
                        </div>
                        <div className='img-slide'>
                            <ImgCard img='./assets/images/slide/3.png' />
                            <ImgCard img='./assets/images/slide/4.png' />
                        </div>
                        <div className='img-slide'>
                            <ImgCard img='./assets/images/slide/5.png' />
                            <ImgCard img='./assets/images/slide/6.png' />
                        </div>
                        <div className='img-slide'>
                            <ImgCard img='./assets/images/slide/7.png' />
                            <ImgCard img='./assets/images/slide/8.png' />
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default LatestQuestsSlideBox;