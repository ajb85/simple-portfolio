import React from "react";
//import { Route } from "react-router-dom";
import moment from "moment";

import styles from "./styles.module.scss";

function Skills({ observer, history }) {
  const title = observer.inView
    ? `${styles.title} ${styles.active}`
    : `${styles.title}`;

  return (
    <section className={styles.Projects}>
      <h2 className={title}>Projects</h2>

      <p className={styles.para}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dolor purus non enim
        praesent. Vestibulum morbi blandit cursus risus at ultrices mi tempus
        imperdiet. Elementum eu facilisis sed odio. Viverra mauris in aliquam
        sem fringilla. Ipsum suspendisse ultrices gravida dictum fusce ut
        placerat. Ut diam quam nulla porttitor massa id neque. Aenean et tortor
        at risus viverra adipiscing at in tellus. Suspendisse faucibus interdum
        posuere lorem ipsum. Elementum sagittis vitae et leo duis ut. Augue
        mauris augue neque gravida in fermentum. Eget dolor morbi non arcu risus
        quis varius quam. Habitant morbi tristique senectus et netus et
        malesuada fames. Leo in vitae turpis massa sed elementum. Vel risus
        commodo viverra maecenas accumsan lacus vel facilisis volutpat. Rutrum
        quisque non tellus orci ac auctor augue mauris augue. Et malesuada fames
        ac turpis egestas maecenas pharetra convallis posuere. Scelerisque felis
        imperdiet proin fermentum leo vel orci porta. Ultrices tincidunt arcu
        non sodales neque sodales ut etiam.
      </p>
      <button onClick={() => history.push("/about")}>Learn More</button>
    </section>
  );
}

export default Skills;
