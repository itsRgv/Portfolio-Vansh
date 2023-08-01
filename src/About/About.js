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
            I am well-versed in a wide array of technologies, including
            front-end languages such as HTML, CSS, and JavaScript, and modern
            frameworks like React. On the back-end, I excel in server-side
            languages like Node.js, and I am proficient in working with
            databases such as MySQL, MongoDB.
            <br></br>
            On my portfolio, you will find a collection of diverse projects that
            demonstrate my abilities as a full-stack developer. From creating
            responsive e-commerce platforms to building RESTful APIs and
            integrating third-party services, each project showcases my
            commitment to clean code, scalability, and optimized performance.
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
