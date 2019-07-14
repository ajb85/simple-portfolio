import React from "react";
import styles from "./styles.module.scss";

function Social(props) {
  return (
    <section id="contact" className={styles.Contact}>
      <h2>Contact Me</h2>
      <main>
        <p>Interested in knowing more?</p>
        <p>Reach out below!</p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/andrew-brush-58205b122/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin" />
            <p>LinkedIn</p>
          </a>

          <a
            href="https://github.com/ajb85"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github-square" />
            <p>GitHub</p>
          </a>

          <a href="mailto:ajbrush85@gmail.com">
            <i className="fas fa-envelope-square" />
            <p>Email</p>
          </a>
        </div>
      </main>
    </section>
  );
}

export default Social;
