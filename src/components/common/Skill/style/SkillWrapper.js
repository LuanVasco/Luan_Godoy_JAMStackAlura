import styled from 'styled-components';

export const SkillWrapper = styled.section`
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.primary.main.contrastText};
`;

SkillWrapper.Title = styled.header`
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
    content: url('https://luan-godoy-jams-tack-alura.vercel.app/images/line.svg');
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

SkillWrapper.CardGroup = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

SkillWrapper.Card = styled.div`
  position: relative;
  margin: 18px;

  transition: ease-in .3s;
  border-radius: ${({ theme }) => theme.borderRadius};
  z-index: 20;
  
  &:hover span{
    display: block;
    animation: in .5s forwards;
    animation-delay: .15s;
  }
  span {
    position: absolute;
    border-radius: 15px;
    max-width: 220px;
    max-height: 290px;
    height: 100%;
    width: 100%;
    display: none;
    background: ${({ theme }) => theme.colors.quintenary.main.color};
    z-index: -1;
  }
  @keyframes in {
    0% {
      transform: rotateZ(180deg);
    }
    100% {
      transform: rotateZ(170deg);
      animation: out .5s;
    }
  }

`;

SkillWrapper.CardText = styled.div`
  width: 100%;
  height: 290px;
  max-width: 220px;
  max-height: 290px;
  background-image: linear-gradient(135deg, #17001A, #300F33);
  box-shadow: 12px 12px 20px rgba(0, 0, 0, 0.16);

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.borderRadius};
  

  div {
    background: ${({ theme }) => theme.colors.quintenary.main.color};
    min-width: 60px;
    min-height: 60px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 18px 0;
   
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 18px;
    color: ${({ theme }) => theme.colors.quintenary.main.contrastText};
  }
  p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.quintenary.main.contrastText};
  }
`;