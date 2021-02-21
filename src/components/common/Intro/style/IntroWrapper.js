import styled from 'styled-components';

export const IntroWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-image: url('http://localhost:3000/images/intro-desktop.svg');
  background-repeat: no-repeat;
  background-position: right;
`;

IntroWrapper.LeftSide = styled.div`
  margin-top: 20px;
  padding: 0;
  order: 1;
  p {
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
    width: 80%;
  }
`;