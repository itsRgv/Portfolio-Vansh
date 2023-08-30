import React from "react";
import styles from "./tictactoe.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Techs } from "./Techs";

export const FOW = ({ value, handleClick }) => {
  //   console.log(value);

  return (
    <div className={`${value ? styles.wrapper : styles.none}`}>
      <button className={styles.closeBtn} onClick={handleClick}>
        <CloseIcon />
      </button>
      <div className={styles.header}>
        <h1>Food Ordering Website</h1>
        <p>
          This is a food ordering website which provides the functionalities of
          login, logout. Users can create there account and create a bucket of
          the food they like to order.
        </p>
      </div>

      <div className={styles.details}>
        <h2>Tech Stacks</h2>
        <div className={styles.techs}>
          <Techs value="HTML" />
          <Techs value="CSS" />
          <Techs value="React Js" />
          <Techs value="Node Js" />
        </div>
      </div>

      <div className={styles.links}>
        <div className={styles.linkToWebsite}>
          <a href="https://food-ordering-website-omega.vercel.app/">
            Go to website
          </a>
        </div>
        <div className={styles.linkToWebsite}>
          <a href="https://github.com/itsRgv/Food-ordering-website">
            Go to Git Repo
          </a>
        </div>
      </div>
    </div>
  );
};
