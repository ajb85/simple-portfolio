import React from "react";
import styles from "../styles.module.scss";

function Project({ project, setView }) {
  const { title, shortText, altText, codeName } = project;
  return (
    <div className={styles.project} onClick={() => setView(codeName)}>
      <h2>{title}</h2>
      <img src={require(`img/Projects/${codeName}.png`)} alt={altText} />
      <p>{shortText}</p>
    </div>
  );
}

export default Project;
