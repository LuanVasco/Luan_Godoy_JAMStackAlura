import React from 'react';
import { FooterWrapper } from './styles/FooterWrapper';
import Link from 'next/link';

export const medias = [
  {
    alt: 'Veja meus projetos no Github',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/github.svg',
    url: 'https://github.com/LuanVasco',
  },
  {
    alt: 'Acesse o meu Linkedin',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/linkedin.svg',
    url: 'https://www.linkedin.com/in/luan-godoy-483090161/',
  },
  {
    alt: 'Me siga no Instagram',
    icon: 'https://luan-godoy-jams-tack-alura.vercel.app/images/instagram.svg',
    url: 'https://www.instagram.com/luan_god0y/',
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
