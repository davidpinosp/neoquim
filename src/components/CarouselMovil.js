import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import car1 from "../assets/Carousel1movil.jpg";
import car2 from "../assets/Carousel2movil.jpg";
import car3 from "../assets/Carousel3movil.jpg";

function CarouselMovil() {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
    >
      <div>
        <img src={car1} alt="Products 1" />
      </div>
      <div>
        <img src={car2} alt="Products 2" />
      </div>
      <div>
        <img src={car3} alt="Products 3" />
      </div>
    </Carousel>
  );
}

export default CarouselMovil;
