import Carousel from 'react-bootstrap/Carousel'
import React, {Component} from "react";
import matras from '../image/Matras-650x476.jpg'
import slide from '../image/Ragnar_slider-650x476.jpg'
import slides from '../image/TREVI_Golf-650x476.jpg';
import CarouselItem from "react-bootstrap/CarouselItem";



export default class Slider extends Component {
    render() {
        return (

            // <Carousel fade>
            //     <Carousel.Item>
            //         <img
            //             className="d-block w-100"
            //             src={matras}
            //             alt="First slide"
            //         />
            //     </Carousel.Item>
            //     <Carousel.Item>
            //         <img
            //             className="d-block w-100"
            //             src={slide}
            //             alt="Second slide"
            //         />
            //     </Carousel.Item>
            //     <Carousel.Item>
            //         <img
            //             className="d-block w-100"
            //             src={slides}
            //             alt="Third slide"
            //         />
            //     </Carousel.Item>
            // </Carousel>

        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100 anim"
                    src={matras}
                    alt="First slide"
                    data-holder-rendered="true"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 anim"
                    src={slide}
                    alt="Second slide"
                    data-holder-rendered="true"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 anim"
                    src={slides}
                    alt="Third slide"
                    data-holder-rendered="true"
                />
            </Carousel.Item>
        </Carousel>

        )
    }
}
