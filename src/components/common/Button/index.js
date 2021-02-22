import styled, { css } from 'styled-components';
import { TextStyleVariantsMap } from '../../foundation/Text';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.tertiary.main.color};
  border: 4px solid ${({ theme }) => theme.colors.tertiary.main.color};
  color: ${({ theme }) => theme.colors.tertiary.main.contrastText };
  padding: 6px 14px;
  margin-top: 18px;
  border-radius: 2px;
  cursor: pointer;
  opacity: 1;
  &:hover,
  &:focus {
    opacity: .5;
  }
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.paragraph2}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })}
`;