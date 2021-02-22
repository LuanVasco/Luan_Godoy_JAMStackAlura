import React from 'react';
import { AboutWrapper } from './styles/AboutWrapper';
import Text from '../../foundation/Text';

export default function About() {
  return (
    <AboutWrapper>
      <AboutWrapper.Image>
        <img src="https://luan-godoy-jams-tack-alura.vercel.app/images/about.svg" alt=""/>
      </AboutWrapper.Image>
      <AboutWrapper.Content>
        <Text tag="h4" variant="paragraph1">About</Text>
        <Text tag="h2" variant="subTitle">Hello World</Text>
        <Text tag="p" variant="paragraph1">Meu nome é Luan Godoy, estou cursando Ciência da computação e descobri uma grande paixão pela área de Front End em programação.</Text>
        <Text tag="p" variant="paragraph1">Amo aquela sensação de missão cumprida, após entregar um projeto, ver ele gerando resultados e encantando as pessoas.</Text>
      </AboutWrapper.Content>
    </AboutWrapper>
  );
}