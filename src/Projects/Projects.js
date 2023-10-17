import React, { useState } from "react";
import styles from "./projects.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FOW } from "./components/TicTacToe";
import { Portfolio } from "./components/Portfolio";
import Prodeal from "./components/Prodeal";
import InstaChat from "./components/InstaChat";

export const Projects = () => {
  const [displayFOW, setDisplayFOW] = useState(false);
  // const [displayPortfolio, setDisplayPortfolio] = useState(false);
  const [displayProdeal, setDisplayProdeal] = useState(false);
  const [displayInstaChat, setDisplayInstaChat] = useState(false);
  const handleViewMoreFOW = () => {
    // console.log(backgroundBlur);
    setDisplayFOW(!displayFOW);
  };
  // const handleViewMorePortfolio = () => {
  //   setDisplayPortfolio(!displayPortfolio);
  // };
  const handleViewMoreProdeal = () => {
    setDisplayProdeal(!displayProdeal);
  };

  const handleViewMoreInstaChat = () => {
    setDisplayInstaChat(!displayInstaChat);
  };

  return (
    <div
      className={`${
        displayFOW || displayProdeal || displayInstaChat
          ? styles.displayBlur
          : styles.wrapper
      }`}
      id="portfolio"
    >
      <FOW value={displayFOW} handleClick={handleViewMoreFOW} />
      {/* <Portfolio
        value={displayPortfolio}
        handleClick={handleViewMorePortfolio}
      /> */}
      <Prodeal value={displayProdeal} handleClick={handleViewMoreProdeal} />
      <InstaChat
        value={displayInstaChat}
        handleClick={handleViewMoreInstaChat}
      />
      <div className={styles.header}>
        <h1 className={styles.headerTitle}>Portfolio</h1>
        <h2 className={styles.headerText}>My Projects</h2>
      </div>

      <div className={styles.container}>
        <div className={styles.projectTile}>
          <h1>Padh.le</h1>
          <p>This is a personal to-do list app with AI driven analysis of task and efficient response to queries</p>
          <button onClick={handleViewMoreInstaChat}>
            View More
            <ArrowForwardIcon
              style={{ fontSize: "1rem" }}
              className={styles.arrow}
            />
          </button>
        </div>

        <div className={styles.projectTile}>
          <h1>Amul Parlour App</h1>
          <p>
            This is a food ordering app where users can log in and order
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

        {/* <div className={styles.projectTile}>
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
        </div> */}

        <div className={styles.projectTile}>
          <h1>Sales Prediction</h1>
          <p>
          This is a Sales prediction Deep Learning Model which use LSTM model.
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
