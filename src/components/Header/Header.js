import React from "react";
import styles from "./styles.module.scss";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        <div className={styles.headerIMG} />
        <h1>AJ Brush</h1>
        <h2>Full Stack Web</h2>
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
