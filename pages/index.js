import React from 'react';
import GlobalStyle from '../src/components/theme/GlobalStyle';
import Intro from '../src/components/common/Intro';
import Menu from '../src/components/common/Menu';
import Project from '../src/components/common/Project';
import Footer from "../src/components/common/Footer";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Intro />
      <Menu />
      <Project />
      <Footer />
    </div>
  );
}
