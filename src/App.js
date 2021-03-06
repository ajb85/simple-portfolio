// Libraries
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

// Styles
import 'css/reset.css';
import 'css/globalStyles.scss';
import styles from 'styles.module.scss';

// Components
import Navigation from 'components/Navigation/';
import Header from 'components/Sections/Header/';
import About from 'components/Sections/About/';
import Skills from 'components/Sections/Skills/';
import Projects from 'components/Sections/Projects/';
import Contact from 'components/Sections/Contact/';

function App() {
  const projectView = useState(null);
  let observers = useViewHooks();
  return (
    <div className={styles.App}>
      <Navigation observer={observers.Header} projectView={projectView[0]} />
      <Header observer={observers.Header} />
      <About observer={observers.About} />
      <Skills observer={observers.Skills} />
      <Projects observer={observers.Projects} projectView={projectView} />
      <Contact />
    </div>
  );
}

const useViewHooks = () => {
  const header = useInView({ threshold: 0 });
  const about = useInView({ threshold: 0, triggerOnce: true });
  const skills = useInView({ threshold: 0, triggerOnce: true });
  const projects = useInView({ threshold: 0, triggerOnce: true });
  const contact = useInView({ threshold: 0, triggerOnce: true });

  return {
    Header: { reference: header[0], inView: header[1] },
    About: { reference: about[0], inView: about[1], active: styles.active },
    Skills: { reference: skills[0], inView: skills[1], active: styles.active },
    Projects: {
      reference: projects[0],
      inView: projects[1],
      active: styles.active
    },
    Contact: {
      reference: contact[0],
      inView: contact[1],
      active: styles.active
    }
  };
};

export default App;
