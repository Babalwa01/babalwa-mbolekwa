import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/_Babalwa" target="_blank" rel="noreferrer">
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
        <a href="https://github.com/Babalwa01" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
