import React from 'react';
import { ProjectWrapper } from './style/ProjectWrapper';
import { Text } from '../../foundation/Text';

const cards = [
  {
    url: 'https://instalura-base.luanvasco.vercel.app/',
    img: 'https://luan-godoy-jams-tack-alura.vercel.app/images/instalura.png',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/landingpage.svg',
    title: 'Instalura',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'https://pokedex.luanvasco.vercel.app/',
    img: 'https://img.rankedboost.com/wp-content/uploads/2016/07/Pokemon-Go-Pok%C3%A9dex-300x229.png',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/game.svg',
    title: 'Pokedéx',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'https://aluraquiz-base.luanvasco.vercel.app/',
    img: 'https://luan-godoy-jams-tack-alura.vercel.app/images/quizalura.png',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/quiz.svg',
    title: 'Quiz Alura',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
  {
    url: 'http://www.dbdois.com.br/clientes/logicalis/governance/',
    img: 'https://luan-godoy-jams-tack-alura.vercel.app/images/logicalis.jfif',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/landingpage.svg',
    title: 'Landing Page',
    resume: 'Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ipsum Lorem ipsum Lorem ipsum lorem ',
  },  
]

export default function Project() {
  return (
    <ProjectWrapper>
      <ProjectWrapper.Title>
        <h4>Portfólio</h4>
        <h2>Meus Projetos</h2>
      </ProjectWrapper.Title>
      <ProjectWrapper.CardGroup>
        {cards.map((card) => (
          <ProjectWrapper.Card key={card.url}>
            <a href={card.url} target="_blank">
              <img src={card.img} alt="Imagem do projeto"/>
              <ProjectWrapper.CardText>
                <div>
                  <img src={card.icon} alt=""/>
                </div>
                <header>
                  <h3>{card.title}</h3>
                  <p>{card.resume}</p>
                </header>
              </ProjectWrapper.CardText>
            </a>
          </ProjectWrapper.Card>
        ))}
        
      </ProjectWrapper.CardGroup>
    </ProjectWrapper>
  );
}
