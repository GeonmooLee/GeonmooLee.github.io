import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://github.com/GeonmooLee"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/geonmoo-lee-648a7734a"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by{" "}
        <a
          href="https://github.com/GeonmooLee/GeonmooLee.github.io"
          target="_blank"
          rel="noreferrer"
        >
          Geonmoo Lee
        </a>
        , referenced from{" "}
        <a
          href="https://github.com/yujisatojr/react-portfolio-template"
          target="_blank"
          rel="noreferrer"
        >
          Yuji Sato
        </a>
      </p>
    </footer>
  );
}

export default Footer;
