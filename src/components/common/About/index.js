import React from 'react';
import { AboutWrapper } from './styles/AboutWrapper';

export default function About() {
  return (
    <AboutWrapper>
      <AboutWrapper.Image>
        <img src="https://luan-godoy-jams-tack-alura.vercel.app/images/about.svg" alt=""/>
      </AboutWrapper.Image>
      <AboutWrapper.Content>
        <h4>About</h4>
        <h2>Hello World</h2>
        <p>Meu nome é Luan Godoy, estou cursando Ciência da computação e descobri uma grande paixão pela área de Front End em programação.</p>
        <p>Amo aquela sensação de missão cumprida, após entregar um projeto, ver ele gerando resultados e encantando as pessoas.</p>
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}