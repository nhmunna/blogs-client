import React from 'react';
import banner1 from '../../images/graphics design.jpg';
import banner2 from '../../images/web development.jpg';
import banner3 from '../../images/artificial intelligence.jpg';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block "
            src={banner1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={banner2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={banner3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;