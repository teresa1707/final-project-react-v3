import React, { Component } from 'react'
import Slider from 'react-slick'
import './Slider.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        return (
            <div>
                <Slider {...settings}>
                    <div className="slide">
                        <img src="./images/nasa.jpg" />
                    </div>
                    <div className="slide">
                        <img src="./images/nasa.jpg" />
                    </div>
                    <div className="slide">
                        <img src="./images/nasa.jpg" />
                    </div>
                    <div className="slide">
                        <img src="./images/nasa.jpg" />
                    </div>
                    <div className="slide">
                        <img src="./images/venise.jpg" />
                    </div>
                    <div className="slide">
                        <img className="img" src="./images/venise.jpg" />
                    </div>
                </Slider>
            </div>
        )
    }
}
