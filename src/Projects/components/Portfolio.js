import React from "react";
import styles from "./portfolio.module.css";
import { Techs } from "./Techs";
import CloseIcon from "@mui/icons-material/Close";

export const Portfolio = ({ value, handleClick }) => {
  return (
    <div className={`${value ? styles.wrapper : styles.none}`}>
      <button className={styles.closeBtn} onClick={handleClick}>
        <CloseIcon />
      </button>
      <div className={styles.header}>
        <h1>Portfolio Website</h1>
        <p>
          Welcome to my portfolio website! I'm a passionate web developer with a
          flair for creating modern and responsive websites that leave a lasting
          impression. With a strong foundation in HTML, CSS, and JavaScript, I
          specialize in crafting intuitive user interfaces and seamless user
          experiences.
        </p>
      </div>

      <div className={styles.details}>
        <h2>Tech Stacks</h2>
        <div className={styles.techs}>
          <Techs value="HTML" />
          <Techs value="CSS" />
          <Techs value="React Js" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.linkToWebsite}>
          <a href="..//">Go to website</a>
        </div>
        <div className={styles.linkToWebsite}>
          <a href=".,.,.">Go to Git Repo</a>
        </div>
      </div>
    </div>
  );
};
