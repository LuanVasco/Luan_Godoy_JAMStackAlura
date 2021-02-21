import styled from 'styled-components';

export const ProjectWrapper = styled.section`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
`;

ProjectWrapper.Title = styled.header`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 32px;
    font-weight: 700;
  }
  h2::after {
    content: url('http://localhost:3000/images/line.svg');
    display: block;
    text-align: center;
    margin-top: -15px;
  }
  h4 {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
  }
`;

ProjectWrapper.CardGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

ProjectWrapper.Card = styled.div`
  position: relative;
  margin: 18px;
  width: 100%;
  max-width: 495px;
  max-height: 330px;
  background-image: linear-gradient(-90deg, #17001A, #300F33);
  transition: ease-in .3s;
  border-radius: ${({ theme }) => theme.borderRadius};
  img{
    max-width: 100%;
    border-radius: ${({ theme }) => theme.borderRadius};
    bottom: 0;
  }
`;

ProjectWrapper.CardText = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  background: rgba(48, 15, 51, .8);
  padding: 8px 12px;
  border-radius: 0  0 15px 15px;
  div {
    background: ${({ theme }) => theme.colors.quintenary.main.color};
    min-width: 60px;
    min-height: 60px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 18px;
  }
  img{
    border-radius: 0;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.quintenary.main.contrastText};
  }
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.quintenary.main.contrastText};
  }
`;