import React from "react";
import styles from "./styles.module.scss";
import headerIMG from "img/backgrounds/rainier_bright.jpg";

function Header(props) {
  return (
    <header>
      <img
        src={headerIMG}
        alt="Mt. Rainier in June 2014"
        className={styles.headerIMG}
      />
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.title}>
            <h1>AJ Brush</h1>
            <h2>Full Stack Web</h2>
          </div>
          <a href="#about" className={styles.button}>
            <button>About Me</button>
          </a>
          <div className={styles.quote}>
            <p>
              ‘You can, you should, and if you’re brave enough to start, you
              will’
            </p>
            <p>-Stephen King</p>
          </div>
        </div>
      </div>
      {/*
        <nav className={styles.navigation}>
          <div style={{ position: "absolute" }}>
            <div className={styles.navBG} />
          </div>
          <a href="#">About</a>
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Social</a>
        </nav>
      */}
    </header>
  );
}

export default Header;
