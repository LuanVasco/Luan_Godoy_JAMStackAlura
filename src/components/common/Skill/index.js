import React from 'react';
import { SkillWrapper } from './style/SkillWrapper';
import Text from '../../foundation/Text';

const cards = [
  {
    url: 'HTML + Css',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app//images/landingpage.svg',
    title: 'HTML + Css',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'Javascript',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app//images/game.svg',
    title: 'Javascript',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'ReactJs',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app//images/quiz.svg',
    title: 'ReactJs',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'Adobe XD',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/landingpage.svg',
    title: 'Adobe XD',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'NextJs',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/quiz.svg',
    title: 'NextJs',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'Wordpress',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/landingpage.svg',
    title: 'Wordpress',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  }, 
]

export default function Project() {
  return (
    <SkillWrapper>
      <SkillWrapper.Title>
      <Text tag="h4" variant="paragraph1">Habilidades</Text>
      <Text tag="h2" variant="subTitle">Minhas skills</Text>
      </SkillWrapper.Title>
      <SkillWrapper.CardGroup>
        {cards.map((card) => (
          <SkillWrapper.Card key={card.url}>
            <span></span>
            <Text tag="a" href="#">
              <SkillWrapper.CardText>
                <div>
                  <img src={card.icon} alt=""/>
                </div>
                <header>
                  <Text tag="h3" variant="paragraph1">{card.title}</Text>
                </header>
                <Text tag="p" variant="smallestException">{card.resume}</Text>
              </SkillWrapper.CardText>
            </Text>
          </SkillWrapper.Card>
        ))}
      </SkillWrapper.CardGroup>
    </SkillWrapper>
  );
}
