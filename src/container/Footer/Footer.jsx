import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">Get In Touch</h2>
      <div className="app__footer-cards">
        <div className="social-media">
          <div>
            <a
              href="https://twitter.com/_Babalwa"
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/babalwa-mbolekwa-a16a94147/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/Babalwa01"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub />
            </a>
          </div>
        </div>
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:babalwambolekwa93@gmail.com" className="p-text">
            babalwambolekwa93@gmail.com
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
