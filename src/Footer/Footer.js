import React from "react";
import styles from "./footer.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Vansh</h1>
      </div>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#portfolio">Projects</a>
        <a href="#skills">Skills</a>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.linkedin.com/in/vansh-gupta-1bb543200">
          <LinkedInIcon className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/vg_vansh/?hl=en">
          <InstagramIcon className={styles.icon} />
        </a>
        
      </div>
      <div className={styles.rights}>
        <p>&#169;VanshGupta. All rights reserved</p>
      </div>

      <div className={styles.navigator}>
        <a href="#home">
          <ArrowUpwardIcon className={styles.arrow} />
        </a>
      </div>
    </div>
  );
};
