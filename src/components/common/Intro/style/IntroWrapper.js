import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../../foundation/Text';

export const IntroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-repeat: no-repeat;
  ${breakpointsMedia({
    xs: css`
      background-image: url('http://luan-godoy-jams-tack-alura.vercel.app/images/intro-mobile.svg');
      background-position: bottom;
    `,
    md: css`
      background-image: url('https://luan-godoy-jams-tack-alura.vercel.app/images/intro-desktop.svg');
      background-position: right;
    `,
  })}
`;

IntroWrapper.LeftSide = styled.div`
  margin-top: 20px;
  padding: 0;
  order: 1;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
  h1 {
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.titleXS}
      `,
      md: css`
        ${TextStyleVariantsMap.title}
      `,
    })}
  }
  span {
    color: ${({ theme }) => theme.colors.tertiary.main.color};
  }
  p {
    ${breakpointsMedia({
      xs: css`
        ${TextStyleVariantsMap.paragraph2}
      `,
      md: css`
        ${TextStyleVariantsMap.paragraph1}
      `,
    })}
    color: ${({ theme }) => theme.colors.primary.main.contrastText };
    margin-bottom: 18px;
  }
`;
IntroWrapper.RightSide = styled.div`
  margin: 0;
  padding: 0;
  order: 2;
  text-align: center;
  img {
    
    ${breakpointsMedia({
      xs: css`
        width: 80%;
      `,
      md: css`
        width: 100%;
      `,
    })}
  }
`;