import styled from 'styled-components';

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 18px 0;
  background: #300F33;
`;

MenuWrapper.RightSide = styled.div`
  display: flex;
  list-style: none;
  a {
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    margin: 0 18px;
  }
`;