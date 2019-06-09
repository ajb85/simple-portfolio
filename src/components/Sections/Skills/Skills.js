import React from "react";
import moment from "moment";
//import { Route } from "react-router-dom";

import { techSkills, softSkills } from "./data.js";
import styles from "./styles.module.scss";

function Skills({ observer }) {
  const title = observer.inView
    ? `${styles.title} ${styles.active}`
    : `${styles.title}`;
  const getSkillsList = skillsList => {
    const today = moment();
    return skillsList.map(skill => {
      const year = today.diff(skill.start, "years");
      const month = (today.diff(skill.start, "months") / 12).toFixed(1);
      return (
        <li key={skill.name}>
          <div>
            <span>
              <i className={skill.icon} style={{ color: skill.color }} />
            </span>
            <span>{skill.name}</span>
          </div>

          <span>
            {year}.{month.substring(month.length - 1)} years
          </span>
        </li>
      );
    });
  };
  return (
    <section className={styles.Skills} id="skills">
      <h2 className={title}>Skills</h2>
      <main className={styles.content}>
        <div className={styles.tableContainer} ref={observer.reference}>
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
            Urna id volutpat lacus laoreet non curabitur gravida. Fermentum dui
            faucibus in ornare quam viverra. Porta nibh venenatis cras sed felis
            eget velit. Curabitur vitae nunc sed velit dignissim. In eu mi
            bibendum neque egestas congue quisque egestas diam. Nisi quis
            eleifend quam adipiscing vitae. Arcu ac tortor dignissim convallis
            aenean et. Nisi scelerisque eu ultrices vitae auctor eu augue. Enim
            sed faucibus turpis in eu mi. Nisi scelerisque eu ultrices vitae
            auctor. Cursus mattis molestie a iaculis at erat pellentesque.
            Malesuada fames ac turpis egestas integer. Facilisis sed odio morbi
            quis commodo odio aenean sed. Nisi est sit amet facilisis.
          </p>
        </div>
      </main>
    </section>
  );
}

export default Skills;
