import React from "react";
import styles from "./techs.module.css";

export const Techs = ({ value }) => {
  return <div className={styles.wrapper}>{value}</div>;
};
