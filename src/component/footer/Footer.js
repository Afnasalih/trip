import React from 'react';
import './Footer.css'; 

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section text-center lg:text-start py-1">
          <p className="font-bold">Trip</p>
          <p className="font-bold">Delhi, india</p>
        </div>
        <div className="footer-section text-center py-1">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="footer-section text-center lg:text-end py-1">
          <p>abc@gmail.com</p>
          <p>+(968) 1234 5678</p>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="footer-section text-center lg:text-start py-1">
          <p>&#169; 2023 : All Rights Reserved</p>
        </div>
        <div className="footer-section text-center lg:text-end py-1">
        </div>
      </div>
    </div>
  );
}
