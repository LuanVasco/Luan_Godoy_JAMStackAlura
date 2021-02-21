import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  margin-top: 40px;
  background-color: #300F33;
  height: 60px;
  div {
    margin: 0 auto;
    background: ${({ theme }) => theme.colors.quintenary.main.color};
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
  }
  a{
    margin: 0 8px;
    line-height: 0;
  }
`;

