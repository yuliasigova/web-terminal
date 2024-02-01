import styled from "styled-components";
import {ChangeEvent} from "react";

export interface Input {
    textLabel?: string,
    type?: string,
    name?: string,
    placeholder?: string,
    maxLength?: number,
    max?: number,
    min?: number,
    value?: string | number,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => {} | void,
}

const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  max-width: 400px;
  min-width: 248px;
  width: 100%;
  
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }

  @media (min-width: 1260px) {
    margin-bottom: 40px;
  }
`;

const InputStyled = styled.input`
  margin-top: 24px;
  padding: 12px;
  border: 2px solid #ACACAC;
  font-size: 14px;
  border-radius: 4px;
  max-width: 400px;
  appearance: none;
  outline: none;
  transition: border-color 0.2s;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1260px) {
    font-size: 20px;
  }
  
  &:hover {
    border-color: black;
  }
  
  &:focus {
    border-color: black;
  }

`;

export default function InputContainer(
    {textLabel, type, name, placeholder, maxLength, max, min, value, onChange}: Input) {

    return (
        <>
        <LabelStyled>
            {textLabel}
            <InputStyled  type={type} maxLength={maxLength} max={max}
                          name={name} placeholder={placeholder} value={value}
                          onChange = {onChange} min={min}
            />
        </LabelStyled>
        </>
    )
}

