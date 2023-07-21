import React, { useState } from "react";
import styles from "./home.module.css";
import { Navbar } from "../Navbar/Navbar";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SmsIcon from "@mui/icons-material/Sms";
import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Home = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const changeNavDisplay = () => {
    setDisplayNav(!displayNav);
  };
  return (
    <div className={styles.container} id="home">
      <div className={styles.logo}>
        <h1>RM</h1>
      </div>
      <div className={`${styles.menuIcon}`} onClick={changeNavDisplay}>
        <MenuIcon style={{ fontSize: "2rem" }} />
      </div>
      <div className={`${displayNav ? styles.menu : styles.hide}`}>
        <button
          className={`${displayNav ? styles.closeNav : styles.hide} ${
            styles.closeBtn
          }`}
          onClick={changeNavDisplay}
        >
          <CloseIcon style={{ fontSize: "1.75rem" }} />
        </button>

        <div className={styles.navWrapper}>
          <div className={styles.navComponent}>
            <HomeIcon className={styles.icon} style={{ fontSize: "2rem" }} />
            <a href="#home" onClick={changeNavDisplay}>
              Home
            </a>
          </div>
          <div className={styles.navComponent}>
            <PersonIcon className={styles.icon} style={{ fontSize: "2rem" }} />
            <a href="#about" onClick={changeNavDisplay}>
              About
            </a>
          </div>
          <div className={styles.navComponent}>
            <SchoolIcon className={styles.icon} style={{ fontSize: "2rem" }} />
            <a href="#skills" onClick={changeNavDisplay}>
              Skills
            </a>
          </div>
          <div className={styles.navComponent}>
            <WorkIcon className={styles.icon} style={{ fontSize: "2rem" }} />
            <a href="#portfolio" onClick={changeNavDisplay}>
              Projects
            </a>
          </div>
          <div className={styles.navComponent}>
            <SmsIcon className={styles.icon} style={{ fontSize: "2rem" }} />
            <a href="#contact" onClick={changeNavDisplay}>
              Contact
            </a>
          </div>
        </div>
      </div>
      <Navbar />
      <div className={styles.bodyContent}>
        <div className={styles.socialMedia}>
          <a href="https://www.instagram.com/_raghav_289/">
            <InstagramIcon style={{ fontSize: "1.25rem" }} />
          </a>
          <a href="https://twitter.com/BrijRaghav">
            <TwitterIcon style={{ fontSize: "1.25rem" }} />
          </a>
          <a href="https://github.com/itsRgv">
            <GitHubIcon style={{ fontSize: "1.25rem" }} />
          </a>
        </div>
        <div className={styles.details}>
          <h1>
            Raghav Maheshwari <span>&#128075;</span>
          </h1>

          <h2>Front end developer</h2>

          <p>
            I'm very creative developer based in India, and I'm very passionate
            and dedicated to my work.
          </p>
          <button type="button">
            Say Hello <TelegramIcon style={{ fontSize: "1.75rem" }} />
          </button>
        </div>
        <div className={styles.image}>
          <img src={require("../assets/myImage.jpeg")} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
