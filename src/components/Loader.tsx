import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const Spinner = styled.div`
    width: 60px;
    height: 60px;
    border: 10px solid #BDDDDD;
    border-top: 10px solid #DBEEEE;
    border-radius: 50%;
    animation: ${spin} 2s linear infinite;
  
  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export default function Loader () {
    return (<Spinner />)
}

