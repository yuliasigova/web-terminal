"use client"
import styled from 'styled-components';

const MainStyled = styled.main`
  margin-right: auto;
  margin-left: auto;
  min-width: 100%;
  max-width: 380px;
  min-height: 100vh;
  padding: 2rem 16px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 2rem 46px;
  }
  
  @media (min-width: 1260px) {
    min-width: 1260px;
    max-width: 1260px;
    padding: 80px 60px;
  }
  
  @media (min-width: 1440px) {
    min-width: 1440px;
    max-width: 1440px;
    padding: 90px 70px;
  }
`;
export default function MainContainer({children}:{ children: React.ReactNode }) {
    return (
        <MainStyled>
            {children}
        </MainStyled>
    )
}

