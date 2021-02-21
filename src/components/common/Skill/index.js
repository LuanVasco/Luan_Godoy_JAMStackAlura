import React from 'react';
import { SkillWrapper } from './style/SkillWrapper';
import { Text } from '../../foundation/Text';

const cards = [
  {
    url: 'HTML + Css',
    icon: 'http://localhost:3000/images/landingpage.svg',
    title: 'HTML + Css',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'Javascript',
    icon: 'http://localhost:3000/images/game.svg',
    title: 'Javascript',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'ReactJs',
    icon: 'http://localhost:3000/images/quiz.svg',
    title: 'ReactJs',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'Adobe XD',
    icon: 'http://localhost:3000/images/landingpage.svg',
    title: 'Adobe XD',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'NextJs',
    icon: 'http://localhost:3000/images/quiz.svg',
    title: 'NextJs',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'Wordpress',
    icon: 'http://localhost:3000/images/landingpage.svg',
    title: 'Wordpress',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  }, 
]

export default function Project() {
  return (
    <SkillWrapper>
      <SkillWrapper.Title>
        <h4>Habilidades</h4>
        <h2>Minhas skills</h2>
      </SkillWrapper.Title>
      <SkillWrapper.CardGroup>
        {cards.map((card) => (
          <SkillWrapper.Card key={card.url}>
            <span></span>
            <a href={card.url} target="_blank">
              <SkillWrapper.CardText>
                <div>
                  <img src={card.icon} alt=""/>
                </div>
                <header>
                  <h3>{card.title}</h3>
                  <p>{card.resume}</p>
                </header>
              </SkillWrapper.CardText>
            </a>
          </SkillWrapper.Card>
        ))}
      </SkillWrapper.CardGroup>
    </SkillWrapper>
  );
}
