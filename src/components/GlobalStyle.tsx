'use client'
import {createGlobalStyle} from "styled-components";
import {ptMono} from "@/app/font";

console.log(ptMono)

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;
  }
    html,
    body {
      max-width: 100vw;
      min-height: 100%;
      overflow-x: hidden;
      margin: 0 auto;
      font-family: ${ptMono.style.fontFamily};
      font-weight: ${ptMono.style.fontWeight};
      font-style: ${ptMono.style.fontStyle};
      font-size: 16px;
      color: #000000;
      background: #EFF0F1;
      
      @media (min-width: 1260px) {
        font-size: 24px;
      }
    }
    
  button,
  input,
  select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }
`;

export default GlobalStyle
