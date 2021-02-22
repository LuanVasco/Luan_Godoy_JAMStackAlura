import React from 'react';
import { IntroWrapper } from './style/IntroWrapper';
import Text from '../../foundation/Text';
import { Button } from '../Button'

export default function Intro() {
  return (
    <IntroWrapper>
      <IntroWrapper.LeftSide>
        <header>
          <Text tag="h1" variant="title"><span>Hello,</span> I'm<br/> Luan Godoy</Text>
        </header>
        <Text tag="p" variant="paragraph1">I'm a Front End Developer</Text>
        <Button>See more</Button>
      </IntroWrapper.LeftSide>
      <IntroWrapper.RightSide>
        <img src="https://luan-godoy-jams-tack-alura.vercel.app/images/person.svg" alt="Pessoa usando notebook"/>
      </IntroWrapper.RightSide>
    </IntroWrapper>
  );
}