import React from 'react';
import { ProjectWrapper } from './style/ProjectWrapper';
import Text from '../../foundation/Text';

const cards = [
  {
    url: 'https://instalura-base.luanvasco.vercel.app/',
    img: 'https://luan-godoy-jams-tack-alura.vercel.app/images/instalura.png',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/landingpage.svg',
    title: 'Instalura',
    resume: 'Página home desenvolvida utilizando as tecnologias NextJs, React Native, Styled Components e ESLint.',
  },  
  {
    url: 'https://pokedex.luanvasco.vercel.app/',
    img: 'https://img.rankedboost.com/wp-content/uploads/2016/07/Pokemon-Go-Pok%C3%A9dex-300x229.png',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/game.svg',
    title: 'Pokedéx',
    resume: 'Desenvolvimento de uma pokedéx que traz imagens e nomes dos pokemons através de uma API.',
  },  
  {
    url: 'https://aluraquiz-base.luanvasco.vercel.app/',
    img: 'https://luan-godoy-jams-tack-alura.vercel.app/images/quizalura.png',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/quiz.svg',
    title: 'Quiz Alura',
    resume: 'Esse quiz foi criado durante a imersão React da Alura, utilizando NextJs e outras ferramentas.',
  },  
  {
    url: 'http://www.dbdois.com.br/clientes/logicalis/page-ebook/',
    img: 'https://luan-godoy-jams-tack-alura.vercel.app/images/lp.svg',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/landingpage.svg',
    title: 'Landing Page',
    resume: 'Uma Landing Page desenvolvida com HTML, CSS e Bootstrap, com algumas animações',
  },  
]

export default function Project() {
  return (
    <ProjectWrapper>
      <ProjectWrapper.Title>
        <Text tag="h4" variant="paragraph1">Portfólio</Text>
        <Text tag="h2" variant="subTitle">Meus Projetos</Text>
      </ProjectWrapper.Title>
      <ProjectWrapper.CardGroup>
        {cards.map((card) => (
          <ProjectWrapper.Card key={card.url}>
            <Text tag="a" href={card.url} target="_blank">
              <img src={card.img} alt="Imagem do projeto"/>
              <ProjectWrapper.CardText>
                <div>
                  <img src={card.icon} alt=""/>
                </div>
                <header>
                  <Text tag="h3" variant="paragraph1">{card.title}</Text>
                  <Text tag="p" variant="smallestException">{card.resume}</Text>
                </header>
              </ProjectWrapper.CardText>
            </Text>
          </ProjectWrapper.Card>
        ))}
        
      </ProjectWrapper.CardGroup>
    </ProjectWrapper>
  );
}
