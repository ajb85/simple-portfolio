import React from "react";
import styles from "./styles.module.scss";
import me from "img/self/wall.jpg";

function About({ observer }) {
  const title = observer.inView ? observer.active : "";

  return (
    <section id="about" className={styles.About}>
      <h2 className={title}>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={me} alt="AJB leaning against a grey wall" />
        </div>
        <main>
          <p ref={observer.reference}>
            I'm a full stack web developer with several years of self-study
            under my belt. At the start of the year, I joined Lambda School to
            round out my knowledge and I'm excited to begin talking to potential
            employers about what I have to offer.
          </p>
          <p>
            I have a passion for problem solving, enormous amount of experience
            with managing and training personnel, and a focus on writing
            reusable and scalable code.
          </p>
          <a href="#skills" className={styles.moveButton}>
            <button>Skills</button>
          </a>
        </main>
      </div>
    </section>
  );
}

export default About;
