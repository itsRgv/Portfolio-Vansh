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
        <h1>Raghav</h1>
      </div>
      <div className={styles.links}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
      </div>
      <div className={styles.socialMedia}>
        <a href="https://www.linkedin.com/in/raghav-maheshwari-3a6946225/">
          <LinkedInIcon className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/_raghav_289/">
          <InstagramIcon className={styles.icon} />
        </a>
        <a href="https://twitter.com/BrijRaghav">
          <TwitterIcon className={styles.icon} />
        </a>
      </div>
      <div className={styles.rights}>
        <p>&#169;itsRgv. All rights reserved</p>
      </div>

      <div className={styles.navigator}>
        <a href="#home">
          <ArrowUpwardIcon className={styles.arrow} />
        </a>
      </div>
    </div>
  );
};
