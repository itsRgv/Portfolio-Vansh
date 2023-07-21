import React from "react";
import styles from "./app.module.css";
import { About } from "./About/About";
import Home from "./Home/Home";
import { Skills } from "./Skills/Skills";
import { Education } from "./Education/Education";
import { Projects } from "./Projects/Projects";
import { Contact } from "./Contact/Contact";
import { Footer } from "./Footer/Footer";

const App = () => {
  return (
    <div>
      <div className={styles.container}>
        <Home />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default App;
