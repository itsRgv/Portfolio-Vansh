import React, { useState } from "react";
import styles from "./projects.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FOW } from "./components/TicTacToe";
import { Portfolio } from "./components/Portfolio";
import Prodeal from "./components/Prodeal";

export const Projects = () => {
  const [displayFOW, setDisplayFOW] = useState(false);
  const [displayPortfolio, setDisplayPortfolio] = useState(false);
  const [displayProdeal, setDisplayProdeal] = useState(false);
  const handleViewMoreFOW = () => {
    // console.log(backgroundBlur);
    setDisplayFOW(!displayFOW);
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
        displayFOW || displayPortfolio || displayProdeal
          ? styles.displayBlur
          : styles.wrapper
      }`}
      id="portfolio"
    >
      <FOW value={displayFOW} handleClick={handleViewMoreFOW} />
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
          <h1>Food Ordering Website</h1>
          <p>
            This is a food ordering website where users can log in and order
            food.
          </p>
          <button onClick={handleViewMoreFOW}>
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
