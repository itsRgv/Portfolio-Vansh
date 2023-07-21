import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
// import TelegramIcon from "@mui/icons-material/Telegram";
// import TextField from "@mui/material/TextField";
// import { Input } from "@mui/material";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_avrmmmv",
        "template_0fhcqev",
        form.current,
        "DdwQqc7Nwn52NlDjV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // e.target.name.value = "";
    // e.target.email.value = "";
    // e.target.message.value = "";
    e.target.reset();
  };

  return (
    <div className={styles.wrapper} id="contact">
      <div className={styles.left}>
        <h1>Talk to me</h1>
        <div className={styles.emailBox}>
          <EmailIcon />
          <h2>Email</h2>
          <p>raghav4u03@gmail.com</p>
          <button className={styles.leftButton}>
            <a href="mailto:raghav4u03@gmail.com?subject=SendMail&body=Description">
              Write me
            </a>
            <ArrowForwardIcon
              style={{ fontSize: "1rem" }}
              className={styles.arrow}
            />
          </button>
        </div>
        <div className={styles.whatsappBox}>
          <WhatsAppIcon />
          <h2>Whatsapp</h2>
          <p>9123456789</p>
          <button className={styles.leftButton}>
            <a href="//api.whatsapp.com/send?phone=919123456789&text=Hey there, more information!">
              Write me
            </a>
            <ArrowForwardIcon
              style={{ fontSize: "1rem" }}
              className={styles.arrow}
            />
          </button>
        </div>
        <div className={styles.instagramBox}>
          <InstagramIcon />

          <h2>Instagram</h2>
          <p>_raghav_289</p>
          <button className={styles.leftButton}>
            <a href="https://api.instagram.com/oauth/authorize/?client_id=_raghav_289&redirect_uri=https://www.instagram.com/&response_type=token">
              Write me
            </a>
            <ArrowForwardIcon
              style={{ fontSize: "1rem" }}
              className={styles.arrow}
            />
          </button>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className={styles.right}>
          <h1>Write me your project</h1>

          <div className={styles.name}>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Insert your name"
            ></input>
          </div>
          <div className={styles.email}>
            <label for="mail">Mail</label>
            <input
              type="email"
              id="mail"
              name="email"
              placeholder="Insert your email"
            ></input>
          </div>
          <div className={styles.message}>
            <label for="message">Message</label>
            <textarea
              name="message"
              type="text"
              id="message"
              placeholder="Type your message here..."
              rows="10"
              cols="52"
            ></textarea>
          </div>

          <button type="submit">
            Send Message <SendIcon className={styles.sendIcon} />
          </button>
        </div>
      </form>
    </div>
  );
};
