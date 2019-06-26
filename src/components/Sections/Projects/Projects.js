import React, { useState } from "react";

import Project from "./Project/";
import ShadowMask from "../../ShadowMaskCard/";
import projectData from "./projectData.js";

import styles from "./styles.module.scss";

function Projects({ observer }) {
  const [view, setView] = useState(null);
  const title = observer.inView
    ? `${styles.title} ${styles.active}`
    : `${styles.title}`;

  const views = {};
  projectData.forEach(
    project =>
      (views[project.codeName] = (
        <ShadowMask home={setView}>
          <div className={styles.fullCard}>
            <h2>{project.title}</h2>
            <div className={styles.projectInfo}>
              <img
                src={require(`img/Projects/${project.codeName}.png`)}
                alt={project.altText}
              />
              <div className={styles.tech}>
                <h3>Featured Tech</h3>
                <ul>
                  {project.tech.map(tech => (
                    <li>
                      <i className={tech.icon} style={{ color: tech.color }} />
                      <span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <h3>View:</h3>
                  <span>Live Demo</span>
                  <span>GitHub</span>
                </div>
              </div>
            </div>
            <p>{project.longText}</p>
          </div>
        </ShadowMask>
      ))
  );

  const projectList = projectData.map((project, i) => (
    <Project project={project} setView={setView} />
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
  console.log("CURRENT VIEW: ", view);
  return (
    <section id="projects" className={styles.Projects}>
      <h2 className={title}>Projects</h2>
      <div ref={observer.reference} />
      {projectDIVs}
      {views[view] ? views[view] : null}
    </section>
  );
}

export default Projects;
