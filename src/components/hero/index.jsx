import HeroImg from "../assets/imgs/Group 504.png"
import { HeroContainer, HeroImage, HeroLink, HeroText, HeroTitle, TextWrapper } from "./styles";

export default function PageHero() {
  return (
    <HeroContainer>
      <TextWrapper>
        <HeroTitle>Sobre Nós</HeroTitle>
        <HeroText>It is a long established fact that a reader will be distracted by the readable content of a page when. </HeroText>
        <HeroLink href="">Fazer Pedido</HeroLink>
      </TextWrapper>
      <HeroImage src={HeroImg} alt="hero-img" />
    </HeroContainer>
  );
}
