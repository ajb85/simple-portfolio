import React from "react";

import Project from "./Project/";
import ShadowMask from "../../ShadowMaskCard/";
import projectData from "./projectData.js";

import styles from "./styles.module.scss";

function Projects({ observer, projectView }) {
  const [view, setView] = projectView;
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
                className={styles.projectPreview}
                src={require(`img/Projects/${project.codeName}.png`)}
                alt={project.altText}
              />
              <div className={styles.tech}>
                <h3>Featured Tech</h3>
                <ul>
                  {project.tech.map(tech => (
                    <li key={`${project.codeName} ${tech.name}`}>
                      <div className={styles.techLogo}>
                        {tech.icon ? (
                          <i
                            className={tech.icon}
                            style={{ color: tech.color }}
                          />
                        ) : (
                          <img
                            src={require(`img/logos/${tech.logo}`)}
                            alt="Tech Logo"
                          />
                        )}
                      </div>
                      <span>{tech.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p>{project.longText}</p>
            <div className={styles.demos}>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <i className="fal fa-heart-rate" />
                Live Demo
              </a>
              <a href={project.code} target="_blank" rel="noopener noreferrer">
                <i className="fal fa-code" /> Code
              </a>
            </div>
          </div>
        </ShadowMask>
      ))
  );

  const projectList = projectData.map(project => (
    <Project key={project.codeName} project={project} setView={setView} />
  ));

  return (
    <section id="projects" className={styles.Projects}>
      <h2 className={title}>Projects</h2>
      {projectList}
      {views[view] ? views[view] : null}
    </section>
  );
}

export default Projects;
