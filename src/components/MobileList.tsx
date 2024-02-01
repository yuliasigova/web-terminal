'use client'
import MobileCard from "@/components/MobileCard";
import styled from "styled-components";

const MobileListStyled = styled.ul`
  margin-top: auto;
  margin-bottom: auto;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 30px;
  width: 100%;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (min-width: 1260px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
  }
`;
export default function MobileList() {
    const mobileData = [
        { logo: "Beeline.svg", alt: "Билайн" },
        { logo: "MTS.svg", alt: "МТС" },
        { logo: "MegaFon.svg", alt: "Мегафон" },
        { logo: "plus.svg", alt: "Добавьте оператора" }
    ]

    return (
        <MobileListStyled>
            {mobileData.map((mobile)=> (

                <MobileCard logo={mobile.logo} alt={mobile.alt} key={mobile.alt}/>

                ))
             }
        </MobileListStyled>
    )
}
