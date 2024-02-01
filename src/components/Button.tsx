import styled from "styled-components";

interface Button {
    type: any,
    children:  React.ReactNode,
    disabled: boolean,

}

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #32C770;
  padding: 12px;
  border-radius: 4px;
  margin-bottom: 20px;
  color: #ffffff;
  cursor: pointer;
  min-width: 248px;
  max-width: 400px;
  width: 100%;
  transition: background, 0.4s, easy;

  @media (min-width: 1260px) {
    margin-top: 20px;
    min-width: 400px;
  }
  
  &:disabled {
    opacity: 0.5;
  }
  
  &:hover {
    background: #31C26D;
  }

  &:focus {
    background: #31C26D;
  }
  
  `


export default function Button ({type, children, disabled}:Button){
    return (
        <ButtonStyled type={type} disabled={disabled}> {children} </ButtonStyled>
    )
}
