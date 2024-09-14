import Logo from "../assets/imgs/Frame 14.svg"
import { HeaderContainer, NavBar, NavLinks } from "./styles";

export default function PageHeader() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo" />
      <NavBar>
        <NavLinks href="#">Home</NavLinks>
        <NavLinks href="#">Blog</NavLinks>
        <NavLinks href="#">Contact Us</NavLinks>
        <NavLinks href="#">Products</NavLinks>
      </NavBar>
    </HeaderContainer>
  );
}
