import React from 'react'
import Slider from "react-slick";
import './header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hdata from './Hdata';

export default function Header() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
  <Slider {...settings}>
    {Hdata.map((val)=>{
      const {cover,title,desc} = val
      return(
        <>
        <div className='header'>
        <img className='header_img' src={cover} alt="" />
          <div className="header-contents">
            <h2>{title}</h2>
            <p>{desc}</p>
            <button>View Details</button>
          </div>
        </div>
        </>
      )
    })}
  </Slider>
  )
}
