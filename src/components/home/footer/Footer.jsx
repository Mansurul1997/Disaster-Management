import React from 'react';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='footer-logo' src="/assests/nameLogo.jpg" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A porro quasi natus asperiores, unde dolorum doloribus iste impedit magni aspernatur nam deserunt laboriosam officiis provident quas ab totam, illum minima?</p>
            <div className="footer-social-icons">
                <img src="/assests/facebook_icon.png" alt="" />
                <img src="/assests/twitter_icon.png" alt="" />
                <img src="/assests/linkedin_icon.png" alt="" />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+8801521565084</li>
            <li>mansurul.haque1997@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 @ Tomato.com - All Right Reserved</p>
    </div>
  );
}

export default Footer;
