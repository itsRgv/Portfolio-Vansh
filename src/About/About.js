import React from "react";
import styles from "./about.module.css";
import ResumePdf from "../assets/Resume.pdf";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";

export const About = () => {
  return (
    <div className={styles.wrapper} id="about">
      <div className={styles.header}>
        <h1>About Me</h1>
        <h2>My introduction</h2>
      </div>
      <div className={styles.details}>
        <div className={styles.image}>
          <img src={require("../assets/WhatsApp Image 2023-10-18 at 12.10.45 AM.jpeg")} alt=""></img>
        </div>
        <div className={styles.content}>
          <p>
          I excel in project coordination, design, and programming.
Fluent in C++ and Android Development, I possess comprehensive project-building experience, including
code optimization and validation. My track record showcases my dedication to crafting exceptional Android
applications that deliver seamless user experiences.
            <br></br>
            On my portfolio, you will find a collection of diverse projects that
            demonstrate my abilities as a software engineer. From creating responsive Android Application to building Deep Learning models and integrating AI model with android apps, each project showcases my commitment to clean code, scalability, and optimized performance.
          </p>
          <a
            href={ResumePdf}
            className={styles.download}
            download="Resume-document"
            target="_blank"
            rel="noreferrer"
          >
            Download CV <TextSnippetIcon />
          </a>
        </div>
      </div>
      <div className={styles.eduction}></div>
    </div>
  );
};
