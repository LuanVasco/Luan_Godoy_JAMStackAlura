import styled from 'styled-components';

export const Button = styled.button`
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.tertiary.main.color};
  border: 4px solid ${({ theme }) => theme.colors.tertiary.main.color};
  color: ${({ theme }) => theme.colors.tertiary.main.contrastText };
  padding: 6px 14px;
  border-radius: 2px;
  cursor: pointer;
  opacity: 1;
  &:hover,
  &:focus {
    opacity: .5;
  }
`;