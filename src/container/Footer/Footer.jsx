import React from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Get In Touch</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:babalwambolekwa93@gmail.com" className="p-text">
            babalwambolekwa93@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +27 (000) 000 0000" className="p-text">
            +27 (000) 000 0000
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__primarybg"
);
