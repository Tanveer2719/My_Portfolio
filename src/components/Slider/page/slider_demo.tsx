"use client";

import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const ImageSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "500px",
  };

  return (
    <div className="slick-container">
      <Slider {...settings}>
        <div>
            <h1> hello </h1>
        </div>
        <div>
            <h2>hi</h2>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;