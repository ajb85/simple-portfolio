import React from "react";
import styles from "./styles.module.scss";
import headerIMG from "img/backgrounds/rainier_bright.jpg";

function Header({ observer }) {
  return (
    <header id="home">
      <div ref={observer.reference} style={{ position: "absolute", top: 0 }} />
      <div className={styles.headerIMG}>
        <img src={headerIMG} alt="Mt. Rainier in June 2014" />
        <div className={styles.quote}>
          <p>
            ‘You can, you should, and if you’re brave enough to start, you will’
          </p>
          <p>-Stephen King</p>
        </div>
      </div>
      <div className={styles.profile}>
        <div className={styles.title}>
          <h1>AJ Brush</h1>
          <h2>Full Stack Engineer</h2>
          <p>
            A passionate problem solver with an extensive background in training
            and managing people.
          </p>
        </div>
        <a href="#about" className={styles.button}>
          About Me
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
    </header>
  );
}

export default Header;
