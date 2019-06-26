import React from "react";

import { techSkills, softSkills } from "./data.js";
import styles from "./styles.module.scss";

function Skills() {
  const getSkillsList = skillsList => {
    return skillsList.map(skill => {
      return (
        <li key={skill.name}>
          <div>
            <span>
              <i className={skill.icon} style={{ color: skill.color }} />
            </span>
            <span>{skill.name}</span>
          </div>
        </li>
      );
    });
  };

  return (
    <section className={styles.Skills} id="skills">
      <h2>Skills</h2>
      <main className={styles.content}>
        <div className={styles.tableContainer}>
          <ul className={styles.skillsList}>
            <h2>Technical</h2>
            {getSkillsList(techSkills)}
          </ul>
          <ul className={styles.skillsList}>
            <h2>Soft</h2>
            {getSkillsList(softSkills)}
          </ul>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.para}>
            My background in restaurant training and management may not directly
            help me write code but I did gathered numerous soft skills valuable
            in any industry. For example, I am very skilled at teaching people
            new skills and I can manage teams of people very effectively.
          </p>
          <p className={styles.para}>
            These skills have proven most valuable recently in my TA position at
            Lambda School. My feedback is detailed and catered to the student.
            This has allowed my more skilled students to ramp up faster while
            preventing struggling students from falling further behind.
          </p>
          <p className={styles.para}>
            In regards to coding, I have spent the majority of the last two
            years focused on frontend development. I particularly enjoy the UI
            components that can be created in React and have a passion for
            writing reusable code. Feel free to look over the Training Bot
            project listed below to see an example of my abilities.
          </p>
        </div>
      </main>
      <a href="#projects" className={styles.moveButton}>
        <button>Projects</button>
      </a>
    </section>
  );
}

export default Skills;
