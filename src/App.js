import React, { useEffect } from "react";
import { CSS } from 'css.gg';
import Page_1 from "./components/Page_1";
import MyNav from "./components/MyNav";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <MyNav />
      <Page_1 />
      <Skills />
      <Projects />
    </>
  );
};

export default App;
