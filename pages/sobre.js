import React from 'react';
import GlobalStyle from '../src/components/theme/GlobalStyle';
import Intro from '../src/components/common/Intro';
import Menu from '../src/components/common/Menu';
import About from "../src/components/common/About";
import Footer from "../src/components/common/Footer";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <Intro />
      <Menu />
      <About />
      <Footer />
    </div>
  );
}
