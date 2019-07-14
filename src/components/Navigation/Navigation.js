import React from "react";

import styles from "./styles.module.scss";

function Navigation({ observer }) {
  return (
    <nav className={`${styles.Nav} ${observer.inView ? styles.inactive : ""}`}>
      <a href="#home" className={styles.text}>
        Home
      </a>
      <a href="#about" className={styles.text}>
        About Me
      </a>
      <a href="#skills" className={styles.text}>
        Skills
      </a>
      <a href="#projects" className={styles.text}>
        Projects
      </a>
      <a href="#contact" className={styles.text}>
        Contact
      </a>

      <a href="#home" className={styles.icon}>
        <i className="fal fa-home" />
      </a>
      <a href="#about" className={styles.icon}>
        <i className="fal fa-address-card" />
      </a>
      <a href="#skills" className={styles.icon}>
        <i className="fal fa-clipboard-list-check" />
      </a>
      <a href="#projects" className={styles.icon}>
        <i className="fal fa-code-merge" />
      </a>
      <a href="#contact" className={styles.icon}>
        <i className="fal fa-envelope-square" />
      </a>
    </nav>
  );
}

export default Navigation;
