import styled from 'styled-components';

export const Text = styled.h1`
  font-size: ${({ theme }) => theme.typographyVariants.title.fontSize};
  font-weight: ${({ theme }) => theme.typographyVariants.title.fontWeight};
  line-height: ${({ theme }) => theme.typographyVariants.title.lineHeight};
  color: ${({ theme }) => theme.colors.tertiary.main.contrastText};;
  span {
    color: ${({ theme }) => theme.colors.tertiary.main.color};
  }
`;