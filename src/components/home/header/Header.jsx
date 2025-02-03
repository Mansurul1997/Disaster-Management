import React, { useState } from 'react'
import Slider from "react-slick";
import './header.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hdata from './Hdata';

export default function Header() {

  const [showDetails, setShowDetails] = useState(false);
  const [detailsContent, setDetailsContent] = useState("");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleViewDetails = (details) => {
    setDetailsContent(details);
    setShowDetails(true);
  };

  return (
    <>

  <Slider {...settings}>
    {Hdata.map((val, index)=>{
      const {cover,title,desc} = val;
      return(
        <div className='header' key={index}>
        <img className='header_img' src={cover} alt="" />
          <div className="header-contents">
            <h2>{title}</h2>
            <p>{desc}</p>
            <button
                  className="view-details-btn"
                  onClick={() => handleViewDetails(desc)}
                >
                  View Details
                </button>
          </div>
        </div>
      )
    })}
  </Slider>
  {showDetails && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowDetails(false)}>
              ❌
            </button>
            <h2>বিস্তারিত তথ্য</h2>
            <p>{detailsContent}</p>
          </div>
        </div>
      )}
</>

  )
}
