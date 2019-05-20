import React from "react";
//import { Route } from "react-router-dom";
import moment from "moment";

import styles from "./styles.module.scss";

function Skills({ observer, history }) {
  const title = observer.inView
    ? `${styles.title} ${styles.active}`
    : `${styles.title}`;
  const techSkills = [
    {
      name: "HTML",
      start: moment("2017-05-01"),
      icon: "fab fa-html5",
      color: "#EA6228"
    },
    {
      name: "CSS",
      start: moment("2017-05-01"),
      icon: "fab fa-css3-alt",
      color: "#2862EA"
    },
    {
      name: "JavaScript",
      start: moment("2017-09-01"),
      icon: "fab fa-js-square",
      color: "#E19F2A"
    },
    {
      name: "React",
      start: moment("2018-04-19"),
      icon: "fab fa-react",
      color: "#51BCD8"
    }
  ];
  const softSkills = [
    {
      name: "Management",
      start: moment("2012-04-15"),
      icon: "far fa-users",
      color: "#000"
    },
    {
      name: "Training",
      start: moment("2010-01-15"),
      icon: "fas fa-user-chart",
      color: "#000"
    },
    {
      name: "Project Planning",
      start: moment("2019-01-08"),
      icon: "fas fa-tasks",
      color: "#000"
    },
    {
      name: "Communication",
      start: moment("2010-01-15"),
      icon: "far fa-envelope-square",
      color: "#000"
    }
  ];
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
    <section className={styles.Skills}>
      <h2 className={title}>Skills</h2>
      <div className={styles.skillsContainer} ref={observer.reference}>
        <ul className={styles.skillsList}>
          <h2>Technical Skills</h2>
          {getSkillsList(techSkills)}
        </ul>
        <ul className={styles.skillsList}>
          <h2>Other Skills</h2>
          {getSkillsList(softSkills)}
        </ul>
      </div>
      <div>
        <p className={styles.para}>
          Urna id volutpat lacus laoreet non curabitur gravida. Fermentum dui
          faucibus in ornare quam viverra. Porta nibh venenatis cras sed felis
          eget velit. Curabitur vitae nunc sed velit dignissim. In eu mi
          bibendum neque egestas congue quisque egestas diam. Nisi quis eleifend
          quam adipiscing vitae. Arcu ac tortor dignissim convallis aenean et.
          Nisi scelerisque eu ultrices vitae auctor eu augue. Enim sed faucibus
          turpis in eu mi. Nisi scelerisque eu ultrices vitae auctor. Cursus
          mattis molestie a iaculis at erat pellentesque. Malesuada fames ac
          turpis egestas integer. Facilisis sed odio morbi quis commodo odio
          aenean sed. Nisi est sit amet facilisis.
        </p>
        <button onClick={() => history.push("/skills")}>Learn More</button>
      </div>
    </section>
  );
}

export default Skills;
