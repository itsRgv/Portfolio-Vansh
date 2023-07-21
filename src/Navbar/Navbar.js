import React from "react";
import styles from "./navbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SmsIcon from "@mui/icons-material/Sms";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

export const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#home">
            <HomeIcon className={styles.icon} style={{ fontSize: "2.5rem" }} />
          </a>
          <span className={styles.linkText}>Home</span>
        </li>
        <li className={styles.navItem}>
          <a href="#about">
            <PersonIcon
              className={styles.icon}
              style={{ fontSize: "2.5rem" }}
            />
          </a>
          <span className={styles.linkText}>About Me</span>
        </li>
        <li className={styles.navItem}>
          <a href="#skills">
            <SchoolIcon
              className={styles.icon}
              style={{ fontSize: "2.5rem" }}
            />
          </a>
          <span className={styles.linkText}>Skills</span>
        </li>
        <li className={styles.navItem}>
          <a href="#portfolio">
            <WorkIcon className={styles.icon} style={{ fontSize: "2.5rem" }} />
          </a>
          <span className={styles.linkText}>Projects</span>
        </li>
        <li className={styles.navItem}>
          <a href="#contact">
            <SmsIcon className={styles.icon} style={{ fontSize: "2.5rem" }} />
          </a>
          <span className={styles.linkText}>Contact</span>
        </li>
      </ul>
    </div>
  );
};
