import React from 'react';
import { FooterWrapper } from './styles/FooterWrapper';
import Link from 'next/link';

export const medias = [
  {
    alt: 'Github',
    icon: 'http://localhost:3000/images/github.svg',
    url: 'https://github.com/LuanVasco',
  },
  {
    alt: 'Linkedin',
    icon: 'http://localhost:3000/images/linkedin.svg',
    url: 'https://www.linkedin.com/in/luan-godoy-483090161/',
  },
]

export default function Footer() {
  return (
    <FooterWrapper>
      <div>
        {medias.map((media) => (
          <li key={media.url}>
            <a href={media.url} target="_blank">
              <img src={media.icon} alt={media.alt} />
            </a>
          </li>
        ))}
      </div>
    </FooterWrapper>
  );
}
