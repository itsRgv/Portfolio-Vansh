import React from "react";
import styles from "./tictactoe.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { Techs } from "./Techs";

export const TicTacToe = ({ value, handleClick }) => {
  //   console.log(value);

  return (
    <div className={`${value ? styles.wrapper : styles.none}`}>
      <button className={styles.closeBtn} onClick={handleClick}>
        <CloseIcon />
      </button>
      <div className={styles.header}>
        <h1>Tic-Tac-Toe Website</h1>
        <p>
          This is a standard Tic-Tac-Toe game website in which 2 people can play
          against each other. This is a fully responsive website and very easy
          to play.
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

      <div className={styles.linkToWebsite}>
        <a href="..//">Go to website</a>
      </div>
    </div>
  );
};
