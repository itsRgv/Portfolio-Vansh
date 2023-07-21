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
          <img src={require("../assets/myImage.jpeg")} alt=""></img>
        </div>
        <div className={styles.content}>
          <p>
            Frontend developer, I create web pages with UI/UX user interface, I
            have years of experience and many clients are happy with the
            projects carried out.
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
