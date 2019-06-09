import React from "react";
import styles from "./styles.module.scss";
import headerIMG from "img/backgrounds/rainier_bright.jpg";

function Header() {
  return (
    <header>
      <div className={styles.headerIMG}>
        <img src={headerIMG} alt="Mt. Rainier in June 2014" />
        <div className={styles.quote}>
          <p>
            ‘You can, you should, and if you’re brave enough to start, you will’
          </p>
          <p>-Stephen King</p>
        </div>
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.title}>
            <h1>AJ Brush</h1>
            <h2>Full Stack Web</h2>
          </div>
          <a href="#about" className={styles.button}>
            <button>About Me</button>
          </a>
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/andrew-brush-58205b122/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href="https://github.com/ajb85"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-square" />
            </a>
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
