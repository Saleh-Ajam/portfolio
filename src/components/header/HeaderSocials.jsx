import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/muhammad-saleh-ajam-1487b8145/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Saleh-Ajam" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/Saleh_ref" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials;
