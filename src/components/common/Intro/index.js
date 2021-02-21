import React from 'react';
import { IntroWrapper } from './style/IntroWrapper';
import { Text } from '../../foundation/Text';
import { Button } from '../Button'

export default function Intro() {
  return (
    <IntroWrapper>
      <IntroWrapper.LeftSide>
        <header>
          <Text><span>Hello,</span> I'm<br/> Luan Godoy</Text>
        </header>
        <p>I'm Front End Developer</p>
        <Button>See more</Button>
      </IntroWrapper.LeftSide>
      <IntroWrapper.RightSide>
        <img src="http://localhost:3000/images/person.svg" alt="Pessoa usando notebook"/>
      </IntroWrapper.RightSide>
    </IntroWrapper>
  );
}