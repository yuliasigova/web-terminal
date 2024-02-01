"use client"

import FormContainer from "@/components/FormContainer";
import Title from "@/components/Title";
import {useContext} from "react";
import {MobileContext} from "@/app/MobileContext";
import styled from "styled-components";

const StyledTitle = styled.p`
    font-size: 22px;
    color: #007686;
    display: flex;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
  
  
  @media (min-width: 768px) {
    font-size: 30px;
    margin-top: 50px;
  }

  @media (min-width: 1260px) {
    font-size: 40px;
    margin-top: 60px;
  }
`;

export default function Payment() {
    const context = useContext(MobileContext)

    return (

            <>
                <Title>Форма оплаты</Title>
                {context?.mobileTitle !== "Добавьте оператора" ?
                    <StyledTitle> {context?.mobileTitle}</StyledTitle> : <></>}

                <FormContainer/>
            </>

    )
}

