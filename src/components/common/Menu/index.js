import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../theme/Logo';
import Text from '../../foundation/Text';

const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Sobre',
    url: '/sobre',
  },
  {
    text: 'Habilidades',
    url: '/habilidades',
  },
  {
    text: 'Contato',
    url: '/contato',
  },
]

export default function Menu() {
  return (
    <MenuWrapper>
      <Logo />
      <MenuWrapper.RightSide>
        {links.map((link) => {
          return (
            <li key={link.url}>
              <Text 
                href={link.url}
                tag="a" 
                variant="paragraph1" 
              >
                {link.text}
              </Text>
            </li>
        )})}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}