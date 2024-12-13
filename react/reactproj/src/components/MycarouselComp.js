import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../assets/teamlogo.jpg';
import img2 from '../assets/B3.jpg';
import img3 from '../assets/B4.jpg';


const MycarouselComp = () => {
    return (
        <div>
            <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
         <img src={img1} alt='cricket' style={{width:"100%" , height:"400px"}}></img>
        <Carousel.Caption>
          <h3>IPL TEAM LOGO</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={img2} alt='' style={{width:"100%" , height:"400px"}}></img>
        <Carousel.Caption>
          <h3>IPL TROPHY</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={img3} style={{width:"100%" , height:"400px"}}></img>
        <Carousel.Caption>
          <h3>IPL WINNERS</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default MycarouselComp
