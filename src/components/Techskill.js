import React from "react";
import styles from "./techskill.module.css";

export const Techskill = ({ type, level }) => {
  return (
    <div className={`${styles.container}`}>
      <h1 className={styles.title}>{type}</h1>
      <p className={styles.difficulty}>{level}</p>
    </div>
  );
};
