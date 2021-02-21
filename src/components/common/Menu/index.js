import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../theme/Logo';
import Link from 'next/link';

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
              <Link href={link.url}>
              <a>{link.text}</a>
              </Link>
            </li>
          )
        })}
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}