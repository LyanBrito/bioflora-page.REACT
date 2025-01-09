// background: linear-gradient(76.77deg, #7973CE 2.23%, #A9A5E3 40.3%, #BBB8EB 95.39%);

import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 71px;
  justify-content: center;
  background: rgb(121, 115, 206);
  background: linear-gradient(
    51deg,
    rgba(121, 115, 206, 1) 0%,
    rgba(169, 165, 227, 1) 41%,
    rgba(187, 184, 235, 1) 100%
  );
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 469px;
  gap: 41px;

`;
export const HeroTitle = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 96px;
  font-weight: 300;

`;
export const HeroText = styled.p`
    font-size: 24px;
    font-weight: 600;

`;
export const HeroImage = styled.img`
  width: 820px;
  width: 872px;
`;
export const HeroLink = styled.a`
    display: flex;
    width: fit-content;
    padding: 24px 32px;
    text-decoration: none;
    font-size: 24px;
    border-radius: 8px;
    background-color: black;
    color: white;
`;
