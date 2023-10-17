import React from "react";
import styles from "./skills.module.css";
import { Techskill } from "../components/Techskill";

export const Skills = () => {
  return (
    <div className={styles.wrapper} id="skills">
      <div className={styles.header}>
        <h1>Skills</h1>
        <h2>My technical level</h2>
      </div>

      <div className={styles.skill_box}>
        <div className={styles.frontend}>
          <Techskill type="HTML" level="Basic" />
          <Techskill type="CSS" level="Intermediate" />
          <Techskill type="JavaScript" level="Intermediate" />
          <Techskill type="Git" level="Intermediate" />
          <Techskill type="React" level="Intermediate" />
          <Techskill type="Android Dev" level="Intermediate" />
          <Techskill type="Artificial Intelligence" level="Intermediate" />
          <Techskill type="Deep Learning" level="Intermediate" />
          <Techskill type="MySQL" level="Intermediate" />
          <Techskill type="Firebase" level="Intermediate" />
          {/* <Techskill type="Mongoose" level="Intermediate" /> */}
          {/* <Techskill type="Stripe" level="Basic" /> */}
        </div>
      </div>
    </div>
  );
};
