import React, { useState } from "react";
import styles from "./home.module.css";
import { Navbar } from "../Navbar/Navbar";
// import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
// import TelegramIcon from "@mui/icons-material/Telegram";
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
        <h1>VG</h1>
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
          <a href="https://www.linkedin.com/in/vansh-gupta-1bb543200">
            <LinkedInIcon style={{ fontSize: "1.25rem" }} />
          </a>
  
          <a href="github.com/vansh482">
            <GitHubIcon style={{ fontSize: "1.25rem" }} />
          </a>
        </div>
        <div className={styles.details}>
          <h1>
            Vansh Gupta <span>&#128075;</span>
          </h1>

          <h2>Aspiring Software Engineer</h2>

          <p>
          I am an aspiring software engineer with a strong focus on Android development. With a proven ability to lead
and collaborate on cross-functional teams, I have successfully contributed to the development, testing, deploy-
ment, and maintenance of software applications. I excel in project coordination, design, and programming.
Fluent in C++ and Android Development, I possess comprehensive project-building experience, including
code optimization and validation. My track record showcases my dedication to crafting exceptional Android
applications that deliver seamless user experiences.
          </p>
          <div className={styles.btn}>
            <a href="#about">Know Me!</a>
          </div>
        </div>
        <div className={styles.image}>
          <img src={require("../assets/WhatsApp Image 2023-10-18 at 12.10.45 AM.jpeg")} alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
