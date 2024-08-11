"use client";

import React, { useState } from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface ImageSliderProps {
  images: string[];
}

const ImageSlider : React.FC<ImageSliderProps> = ({images}) =>{
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  /*
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 500,
    adaptiveHeight: true,
    adaptiveWidth: true,
    centerMode: true,
    centerPadding: "20%",
  }
  */

  

  return (
    <div>
      <h4> Slider Demo</h4>
      <Slider {...settings}>
        <div>
          <h2>slide1</h2>
        </div>
        <div>
          <h2>slide2</h2>
        </div>
        <div>
          <h2>slide3</h2>
        </div>
        <div>
          <h2>slide4</h2>
        </div>
      </Slider>
    </div>

  );

};


export default ImageSlider;
