import React from "react";
import styles from "../styles.module.scss";

function Project({ project }) {
  const { title, shortText, altText } = project;
  return (
    <div className={styles.project}>
      <h2>{title}</h2>
      <img
        src={require(`img/Projects/${title
          .toLowerCase()
          .split(" ")
          .join("_")}.png`)}
        alt={altText}
      />
      <p>{shortText}</p>
    </div>
  );
}

export default Project;
