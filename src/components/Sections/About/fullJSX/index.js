import React from "react";
import { Link } from "react-router-dom";

import styles from "components/FullCard/styles.module.scss";

export default props => (
  <div style={{ height: props.height }} className={styles.fullCard}>
    <Link className={styles.close} to="/">
      x
    </Link>
    <h2>...continued</h2>
    <div className={styles.headerIMG} alt="Scuba diving in Kentucky" />
    <section>
      <h3>Starting to Code</h3>
      <p>
        I researched some basics of VBA in my spare time and found I could use
        it to quickly crunch an enormous amount of data in just a few seconds!
        Suddenly I could give more detailed analysis than before and yet it took
        a fraction of the time to do! I had further success by developing it
        further and breaking down costs through the management bonus structure.
        I could download a few spreadsheets, click a button, and seconds later
        could tell each manager how much they personally lost via bonuses due to
        the loss of their top lost products. Results came quick!
      </p>
      <p>
        However, my passion was not in restaurants. I really enjoyed the
        intellectual challenges that came with writing my code and after the
        suggestion of a friend working in the industry, I started studying Ruby.
        I quickly shifted to frontend development and focused on HTML/CSS and a
        heavy emphasis on JavaScript. After mastering some basics and writing a
        plugin for a Discord chat bot, I found my absolutely favorite framework:
        React.
      </p>
      <p>
        Learning React was a significant turning point for me and marks the
        point I knew I found my new career and not just a fun hobby. Wanting to
        round out the gaps from years of self-study, I enrolled at Lambda
        Schools and am finishing up my education there now. Thus, it's time to
        begin the next chapter: employment!
      </p>
    </section>
    <section>
      <div className={styles.hobbiesIMG} />
      <h3>Hobbies</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </section>
  </div>
);
