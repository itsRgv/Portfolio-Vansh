import React from "react";
import styles from "./InstaChat.module.css";
import { Techs } from "./Techs";
import CloseIcon from "@mui/icons-material/Close";

const InstaChat = ({ value, handleClick }) => {
  return (
    <div className={`${value ? styles.wrapper : styles.none}`}>
      <button className={styles.closeBtn} onClick={handleClick}>
        <CloseIcon />
      </button>
      <div className={styles.header}>
        <h1>InstaChat</h1>
        <p>
          This is a real-time chat app with login logout functionalities. After
          logging in, user will be taken to the user area page where he/she can
          chat with other users if available online, in real time. It also
          displays the online status of a user to other users.
        </p>
      </div>

      <div className={styles.details}>
        <h2>Tech Stacks</h2>
        <div className={styles.techs}>
          <Techs value="HTML" />
          <Techs value="CSS" />
          <Techs value="Javascript" />
          <Techs value="PHP" />
          <Techs value="SQL" />
        </div>
      </div>
      {/* <div className={styles.links}>
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
      </div> */}
    </div>
  );
};
export default InstaChat;
