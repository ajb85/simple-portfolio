import React from "react";

import Project from "./Project/";
import projectData from "./projectData.js";

import styles from "./styles.module.scss";

function Projects({ observer }) {
  const title = observer.inView
    ? `${styles.title} ${styles.active}`
    : `${styles.title}`;
  const projectList = projectData.map((project, i) => (
    <Project project={project} />
  ));
  const projectDIVs = [];
  for (let i = 0; i <= projectList.length; i += 2) {
    projectDIVs.push(
      <div className={styles.row}>
        {projectList[i]}
        {projectList[i + 1] ? projectList[i + 1] : null}
      </div>
    );
  }

  return (
    <section id="projects" className={styles.Projects}>
      <h2 className={title}>Projects</h2>
      <div ref={observer.reference} className={styles.projectContainer}>
        {projectDIVs}
      </div>
    </section>
  );
}

export default Projects;
