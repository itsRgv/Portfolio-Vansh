import React from "react";
import styles from "./education.module.css";
// import Timeline from "../components/Timeline/Timeline";

export const Education = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1>Qualification</h1>
        <h2>My personal journey</h2>
      </div>

      <div className={styles.timeline}>
        <div className={`${styles.timeline_component} ${styles.odd}`}>
          <h2 className={styles.timeline_title}>B-Tech</h2>
          <p className={styles.timeline_para}>
            Currently persuing B-tech at LNMIIT in CSE branch. Current CGPA -
            7.56
          </p>
        </div>
        <div className={styles.timeline_middle}>
          <div className={styles.timeline_point}></div>
        </div>
        <div className={styles.timeline_date} style={{ textAlign: "left" }}>
          August 2020
        </div>

        <div className={styles.timeline_date}>March 2020</div>
        <div className={styles.timeline_middle}>
          <div className={styles.timeline_point}></div>
        </div>
        <div className={`${styles.timeline_component}`}>
          <h2 className={styles.timeline_title}>
            12<sup>th</sup> Grade
          </h2>
          <p className={styles.timeline_para}>
            I did my 12<sup>th</sup> grade from Shiksha High School Bikaner. There I secured 93.2%
            in 12<sup>th</sup> board.
          </p>
        </div>

        <div className={`${styles.timeline_component} ${styles.odd}`}>
          <h2 className={styles.timeline_title}>
            10<sup>th</sup> Grade
          </h2>
          <p className={styles.timeline_para}>
            I did my 10<sup>th</sup> grade from RNRSV Bikaner. There I secured 89%
            in 10<sup>th</sup> board.
          </p>
        </div>
        <div className={styles.timeline_middle}>
          <div className={styles.timeline_point}></div>
        </div>
        <div className={styles.timeline_date} style={{ textAlign: "left" }}>
          March 2018
        </div>
      </div>
    </div>
  );
};
