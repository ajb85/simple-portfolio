import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import styles from "components/FullCard/styles.module.scss";

const now = moment();
const studyDate = moment("2018-11-15");
const studyTime = now.diff(studyDate, "months");

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
        My background is in restaurant management where I ran QSRs myself,
        trained management teams, and eventually oversaw up to 30 units and was
        responsible for their direction and health of operations. The repetitive
        tasks that come with overseeing so many similar units is where I first
        got my first real taste of solving problems with code. A critical aspect
        of my job was breaking down food cost numbers for managers, assessing
        where they were weak, and implementing a plan to improve. I enjoyed
        digging deep into the numbers to spot trends, identify issues, and
        troubleshoot with the management team to get results; however, the
        detailed analysis required for each store meant dedicating an enormous
        amount of time to repetitive tasks that I really wanted to spend with
        the team. I researched some basics of VBA in my spare time and found I
        could use it to quickly crunch an enormous amount of data in just a few
        seconds! Suddenly I could give more detailed analysis than before and
        yet it took a fraction of the time to do! I had further success by
        developing it further and breaking down costs through the management
        bonus structure. I could download a few spreadsheets, click a button,
        and seconds later could tell each manager how much they personally lost
        via bonuses due to the loss of their top lost products. Results came
        quick!
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
    <p className={styles.para} ref={observer.reference}>
      My background is in restaurant management where I ran QSRs myself, trained
      management teams, and eventually oversaw up to 30 units and was
      responsible for their direction and health of operations. The repetitive
      tasks that come with overseeing so many similar units is where I first got
      my first real taste of solving problems with code.
    </p>
    <div className={styles.img} alt="wide shot of me" />
    <div>
      <p className={styles.para}>
        After realizing I really enjoy writing code, I focused my free time on
        primarily learning frontend technologies while still rounding myself out
        on the backend. Approximately {studyTime} months ago I decided after a
        couple years of self study, I knew this is what I wanted to do and felt
        I had a strong enough background to just pull the trigger. I joined
        Lambda Schools so I could fill in more gaps in my knowledge and make
        more contacts that would help me begin work with website development.
      </p>

      <p className={styles.para}>
        Lately my passion project has been pushing myself to write cleaner,
        DRY-er code and to utilize a separation of concerns to abstract code
        away where necessary. My goal is to continue pushing myself to write
        code that is easier to read, understand, and debug. I have seen how
        disorganized code can exponentially increase development times and
        experienced the frustration that can come from repetitive, nigh
        unreadable code.
      </p>

      <p className={styles.para}>
        If you'd like to evaluate how I'm doing on the above goals, I would
        direct you to the Training Bot project listed below and specify the
        SearchCard and NotificationsCard components as examples of my best work
        in this area.
      </p>
    </div>
  </div>
);

/*
<div className={styles.sectionTitle} ref={observer.reference}>
          <div className={styles.titleBG} />
          <div className={styles.titleFiller} />
          <h3>Professional History</h3>
          <ul className={styles.cardList}>
            <li>From restaurant management, oversaw upwards of 30 stores</li>
            <li>Collaborated with management teams daily</li>
            <li>Set goals with team leaders, helped them execute</li>
            <li>Maintained regular contact to verify goals are on track</li>
            <li>Extensive background in training and personnel development</li>
            <li>Personally trained over 250 managers from the ground up</li>
            <li>
              Helped multi-store owner restructure manager bonus compensation
            </li>
            <li>
              Reduced costs of a four store organization by around $50,000 per
              year per store
            </li>
          </ul>
        </div>

        <div className={styles.sectionTitle} ref={observer.reference}>
          <div className={styles.titleBG} />
          <div className={styles.titleFiller} />
          <h3>Hobbies</h3>
          <ul className={styles.cardList}>
            <li>From restaurant management, oversaw upwards of 30 stores</li>
            <li>Extensive background in training and developing people</li>
            <li>Full Stack Web student in Lambda School, Web17</li>
            <li>Capable on the backend, most comfortable on the frontend</li>
            <li>From restaurant management, oversaw upwards of 30 stores</li>
            <li>Extensive background in training and developing people</li>
            <li>Full Stack Web student in Lambda School, Web17</li>
            <li>Capable on the backend, most comfortable on the frontend</li>
          </ul>
        </div>

        div.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    position: relative;
  }

  img.imageBanner {
    $width: 1500px;
    object-fit: cover;
    max-width: $width;
    width: 100%;
    max-height: 20vh;
    position: absolute;
    top: 40%;
    min-width: $minSize;
  }

  div.banner {
    width: 110%;
    min-height: 30vh;
    background-image: url("img/self/wide.jpg");
    background-size: 1500px calc(1500px / 1.5);
    background-position: 50%;
    position: absolute;
    top: 40%;
    // transform: rotate(5deg);
  }

  div.sectionTitle {
    @include skewedBox($mainColorLight);
    ul {
      // list-style-type: circle;
      border-radius: 7px;
      margin: auto;
      // box-shadow: 3px 3px rgba($black, 0.3);

      li {
        margin: 5px 0;
        padding: 7px;
        font-family: $font;
        line-height: 1.4;
      }
    }
  }

  div.sectionTitle:nth-child(odd) {
    @include skewedBox($mainColor);
  }
  div.img {
    background-repeat: no-repeat;

    width: 100%;
    min-height: 200px;
    overflow: hidden;
    background-image: url("../../../img/self/wide.jpg");
    background-position: 59% 78%;
    background-size: 100%;
    margin-bottom: 20px;
    box-shadow: 2px 4px rgba(0, 0, 0, 0.2);

    border-radius: 20px;
  }

        */
