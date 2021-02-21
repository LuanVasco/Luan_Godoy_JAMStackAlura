import styled from 'styled-components';

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  margin: 40px auto;
`;

AboutWrapper.Image = styled.div`
  
`;
AboutWrapper.Content = styled.div`
  h2 {
    font-size: 32px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
  }
  h2::after {
    content: url('http://localhost:3000/images/line.svg');
    display: block;
    text-align: left;
    margin-top: -15px;
  }
  h4 {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary.main.contrastText};
  }
`;