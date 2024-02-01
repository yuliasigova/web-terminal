import styled from 'styled-components'
import {roboto} from "@/app/font";

const StyledTitle = styled.h1`
    font-size: 32px;
    color: #007686;
    text-align: center;
    margin-bottom: 20px;
    font-family: ${roboto.style.fontFamily};
    font-weight: ${roboto.style.fontWeight};

  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }

  @media (min-width: 1260px) {
    font-size: 48px;
    margin-bottom: 60px;
  }
`;

export default function Title ({children}: { children: React.ReactNode }) {
    return (
        <StyledTitle>
            {children}
        </StyledTitle>
    );
}


