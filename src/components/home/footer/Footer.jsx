import React from 'react';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src="/assests/nameLogo.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A porro quasi natus asperiores, unde dolorum doloribus iste impedit magni aspernatur nam deserunt laboriosam officiis provident quas ab totam, illum minima?</p>
            <div className="footer-social-icons">
                <img src="/assests/facebook_icon" alt="" />
                <img src="/assests/twitter_icon" alt="" />
                <img src="/assests/linkedin_icon" alt="" />
            </div>
        </div>
        <div className="footer-content-center">

        </div>
        <div className="footer-content-right">

        </div>
      </div>
    </div>
  );
}

export default Footer;
