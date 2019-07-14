import React from "react";
import styles from "../styles.module.scss";

function Project({ project, setView }) {
  const { title, shortText, codeName } = project;
  const image = require(`img/Projects/${codeName}.png`);
  return (
    <div className={styles.project} onClick={() => setView(codeName)}>
      <div
        className={styles.fullBleed}
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <h3>{title}</h3>
      </div>
      <p>{shortText}</p>
    </div>
  );
}

export default Project;
