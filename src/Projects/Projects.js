import React, { useState } from "react";
import styles from "./projects.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { TicTacToe } from "./components/TicTacToe";
import { Portfolio } from "./components/Portfolio";
import Prodeal from "./components/Prodeal";

export const Projects = () => {
  const [displayTTT, setDisplayTTT] = useState(false);
  const [displayPortfolio, setDisplayPortfolio] = useState(false);
  const [displayProdeal, setDisplayProdeal] = useState(false);
  const handleViewMoreTTT = () => {
    // console.log(backgroundBlur);
    setDisplayTTT(!displayTTT);
  };
  const handleViewMorePortfolio = () => {
    setDisplayPortfolio(!displayPortfolio);
  };
  const handleViewMoreProdeal = () => {
    setDisplayProdeal(!displayProdeal);
  };

  return (
    <div
      className={`${
        displayTTT || displayPortfolio || displayProdeal
          ? styles.displayBlur
          : styles.wrapper
      }`}
      id="portfolio"
    >
      <TicTacToe value={displayTTT} handleClick={handleViewMoreTTT} />
      <Portfolio
        value={displayPortfolio}
        handleClick={handleViewMorePortfolio}
      />
      <Prodeal value={displayProdeal} handleClick={handleViewMoreProdeal} />
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Portfolio</h1>
        <h2 className={styles.headerText}>My Projects</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.projectTile}>
          <h1>Tic-Tac-Toe Website</h1>
          <p>
            This is a tic-tac-toe game website where you can play tic-tac-toe
            with your friend.
          </p>
          <button onClick={handleViewMoreTTT}>
            View More
            <ArrowForwardIcon
              style={{ fontSize: "1rem" }}
              className={styles.arrow}
            />
          </button>
        </div>

        <div className={styles.projectTile}>
          <h1>Portfolio Website</h1>
          <p>
            This is my portfolio website which will tell you everything you need
            to know about me
          </p>
          <button onClick={handleViewMorePortfolio}>
            View More
            <ArrowForwardIcon
              style={{ fontSize: "1rem" }}
              className={styles.arrow}
            />
          </button>
        </div>

        <div className={styles.projectTile}>
          <h1>Prodeal Website</h1>
          <p>
            This is a Ecom website where users can browse various products with
            their price and description. Users can checkout their products too.
          </p>
          <button onClick={handleViewMoreProdeal}>
            View More
            <ArrowForwardIcon
              style={{ fontSize: "1rem" }}
              className={styles.arrow}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
