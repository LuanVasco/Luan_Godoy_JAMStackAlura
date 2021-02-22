import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../../foundation/Text';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 60px auto;
`;

AboutWrapper.Image = styled.div`
  ${breakpointsMedia({
    xs: css`
      width: 100%;
    `,
    md: css`
      width: 50%;
    `,
  })}
`;
AboutWrapper.Content = styled.div`
  ${breakpointsMedia({
    xs: css`
      width: 100%;
    `,
    md: css`
      width: 45%;
    `,
  })}
  h2 { color: ${({ theme }) => theme.colors.primary.main.contrastText}; }
  h2::after {
    content: url('https://luan-godoy-jams-tack-alura.vercel.app/images/line.svg');
    display: block;
    text-align: left;
    margin-top: -15px;
  }
  h4 { margin: 0;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
  }
  p {
    ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
  }
`;