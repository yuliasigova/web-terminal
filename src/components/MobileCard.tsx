import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import {useContext} from "react";
import {MobileContext} from "@/app/MobileContext";

export interface MobileCard {
    logo: string,
    alt: string,
}

const MobileItemStyled = styled.li`
  display: flex;
  position: relative;
  background: #BDDDDD;
  box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  min-height: 150px;
  min-width: 200px;
  
  @media (min-width: 768px) {
    min-height: 200px;
    min-width: 280px;
  }

  @media (min-width: 1260px) {
    min-height: 255px;
    min-width: 255px;
  }
`;

const LinkStyled = styled.a`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: inherit;
  padding: 20px;
  border-radius: 20px;
  transition: background, 0.4s, easy;
  
  @media (min-width: 1260px) {
    padding: 30px;
  }

  &:hover {
    background: #DBEEEE;
  }
  
  &:focus {
    background: #DBEEEE;
  }
`

const ImageStyled = styled.img`
    width: 70px;
    height: 70px;
    object-fit: contain;
  
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
  
  @media (min-width: 1260px) {
    width: 120px;
    height: 120px;
  }
`
const TextStyled = styled.p`
    margin: 0;
    text-align: center;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 1260px) {
    font-size: 24px;
  }
`

export default function MobileCard({logo, alt}:MobileCard) {
    const context = useContext(MobileContext)

    return (
        <MobileItemStyled onClick={() => context?.setMobileTitle(alt)}>

            <LinkStyled href={'payment'} as={Link}>
                <ImageStyled src={logo} alt={alt} width={120} height={120} as={Image}></ImageStyled>
                <TextStyled>{alt}</TextStyled>
            </LinkStyled>
        </MobileItemStyled>

        )
}
