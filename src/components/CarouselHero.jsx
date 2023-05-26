import React from "react";
import ImageOne from "../assets/Image1.jpg";
import ImageTwo from "../assets/Image2.jpg";
import ImageThree from "../assets/Image3.jpg";
import ImageFour from "../assets/Image4.jpg";
import ImageFive from "../assets/Image5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselHero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    pauseOnHover: false,
    arrows: false,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <img
            src={ImageOne}
            className="lg:h-[400px] lg:w-screen"
            alt="Image 1"
          />
        </div>
        <div>
          <img
            src={ImageTwo}
            className="lg:h-[400px] lg:w-screen"
            alt="Image 2"
          />
        </div>
        <div>
          <img
            src={ImageThree}
            className="lg:h-[400px] lg:w-screen"
            alt="Image 3"
          />
        </div>
        <div>
          <img
            src={ImageFour}
            className="lg:h-[400px] lg:w-screen"
            alt="Image 4"
          />
        </div>
        <div>
          <img
            src={ImageFive}
            className="lg:h-[400px] lg:w-screen"
            alt="Image 5"
          />
        </div>
      </Slider>
    </>
  );
};

export default CarouselHero;
