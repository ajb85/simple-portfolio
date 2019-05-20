import React from "react";
import { Route } from "react-router-dom";

import FullCard from "components/FullCard/";
import fullAbout from "./fullJSX/";
import styles from "./styles.module.scss";

function About({ observer, history }) {
  const title = observer.inView
    ? `${styles.title} ${styles.active}`
    : `${styles.title}`;
  return (
    <section className={styles.About}>
      <h2 className={title}>About Me</h2>
      <div className="container">
        <p className={styles.para} ref={observer.reference}>
          My background is in restaurant management where I ran QSRs myself,
          trained management teams, and eventually oversaw up to 30 units and
          was responsible for their direction and health of operations. The
          repetitive tasks that come with overseeing so many similar units is
          where I first got my first real taste of solving problems with code.
        </p>
        <div className={styles.img} />
        <div>
          <p className={styles.para}>
            A critical aspect of my job was breaking down food cost numbers for
            managers, assessing where they were weak, and implementing a plan to
            improve. I enjoyed digging deep into the numbers to spot trends,
            identify issues, and troubleshoot with the management team to get
            results; however, the detailed analysis required for each store
            meant dedicating an enormous amount of time to repetitive tasks that
            I really wanted to spend with the team.
          </p>
          <button onClick={() => history.push("/about")}>Learn More</button>
        </div>
      </div>
      <Route
        path="/about"
        render={props => (
          <FullCard {...props}>{fullAbout({ height: "95vh" })}</FullCard>
        )}
      />
    </section>
  );
}

export default About;
