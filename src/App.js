// Libraries
import React from "react";
import { useInView } from "react-intersection-observer";

// Styles
import "./css/reset.css";
import "./css/globalStyles.scss";
import styles from "./styles.module.scss";

// Components
import Header from "./components/Header";
import About from "./components/Sections/About";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
// import Contact from "./components/Sections/Contact";

function App() {
  let observers = createViewHooks();
  return (
    <div className="App">
      <div />
      <Header />
      <About observer={observers.About} />
      <Skills observer={observers.Skills} />
      <Projects observer={observers.Projects} />
    </div>
  );
}

const createViewHooks = () => {
  const about = useInView({ threshold: 0, triggerOnce: true });
  const skills = useInView({ threshold: 0, triggerOnce: true });
  const projects = useInView({ threshold: 0, triggerOnce: true });
  const contact = useInView({ threshold: 0, triggerOnce: true });

  return {
    About: { reference: about[0], inView: about[1] },
    Skills: { reference: skills[0], inView: skills[1] },
    Projects: { reference: projects[0], inView: projects[1] },
    Contact: { reference: contact[0], inView: contact[1] }
  };
};

export default App;
