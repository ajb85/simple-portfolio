import React from "react";
import styles from "./styles.module.scss";
import me from "img/self/wall.jpg";

function About() {
  return (
    <section id="about" className={styles.About}>
      <h2>About Me</h2>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <img src={me} alt="Me leaning against a wall" />
        </div>
        <main>
          <p>
            In the summer of 2017, I decided to study website development in my
            free time to see if it would be something I would enjoy. After
            getting comfortable with JavaScript, I found I really love solving
            problems with code and started spending more of my off time
            learning. I recently decided it was time to commit and joined Lambda
            School to gain a more formal understanding of code.
            {/*             
            I'm a full stack web developer with several years of
            self-study under my belt. At the start of the year, I joined Lambda
            School to round out my knowledge and I'm excited to begin talking
            with potential employers about what I have to offer. */}
          </p>
          <p>
            Along with a passion for problem solving and writing scalable,
            reusable code, I bring almost 10 years of experience with managing
            and training personnel. I'm very eager to speak with potential
            employers to discuss what I can bring to a company.
          </p>
        </main>
      </div>
    </section>
  );
}

export default About;
