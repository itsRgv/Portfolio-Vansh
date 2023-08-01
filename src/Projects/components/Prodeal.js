import React from "react";
import styles from "./Prodeal.module.css";
import { Techs } from "./Techs";
import CloseIcon from "@mui/icons-material/Close";

const Prodeal = ({ value, handleClick }) => {
  return (
    <div className={`${value ? styles.wrapper : styles.none}`}>
      <button className={styles.closeBtn} onClick={handleClick}>
        <CloseIcon />
      </button>
      <div className={styles.header}>
        <h1>Prodeal Website</h1>
        <p>
          ProDeal is an online platform where users can browse and purchase a
          wide range of BOAT products . It offers a secure and convenient
          shopping experience with features like product search, detailed
          descriptions, and easy checkout options.
        </p>
      </div>

      <div className={styles.details}>
        <h2>Tech Stacks</h2>
        <div className={styles.techs}>
          <Techs value="HTML" />
          <Techs value="CSS" />
          <Techs value="React Js" />
          <Techs value="Stripe" />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.linkToWebsite}>
          <a href="https://github.com/itsRgv/ProDeal-FrontEnd">
            Frontend Git Repo
          </a>
        </div>
        <div className={styles.linkToWebsite}>
          <a href="https://github.com/itsRgv/ProDeal-Backend">
            Backend Git Repo
          </a>
        </div>
      </div>
    </div>
  );
};
export default Prodeal;
