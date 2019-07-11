import React from "react";
import styles from "../styles.module.scss";

function Project({ project, setView }) {
  const { title, shortText, altText, codeName } = project;
  const image = require(`img/Projects/${codeName}.png`);
  return (
    <div className={styles.project} onClick={() => setView(codeName)}>
      {/* <div style={{ position: "relative" }} /> */}
      <div
        className={styles.fullBleed}
        style={{
          backgroundImage: `url(${image})`
        }}
      >
        <h3>{title}</h3>
        {/* <img src={require(`img/Projects/${codeName}.png`)} alt={altText} /> */}
      </div>
      <p>{shortText}</p>
    </div>
  );
}

export default Project;
