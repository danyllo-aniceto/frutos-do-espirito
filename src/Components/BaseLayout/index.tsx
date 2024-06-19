import {
  CloseButton,
  Container,
  Header,
  Logo,
  Menu,
  MenuButton,
  SideMenu,
  SideMenuItem,
  Title,
  TopHeader,
  Wrapper,
} from "./styles";
import { IBaseLayoutProps } from "./types";
import logo from "./../../assets/treeBook.png";
import { useState } from "react";

export function BaseLayout({ children }: IBaseLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Header>
        <TopHeader>
          <MenuButton onClick={toggleMenu}>&#9776;</MenuButton>
          <Title>Frutos do Espírito</Title>
          <Logo src={logo} alt="logo" />
        </TopHeader>
      </Header>

      <SideMenu isOpen={menuOpen}>
        <CloseButton onClick={toggleMenu}>&times;</CloseButton>
        <Menu>
          <SideMenuItem>Início</SideMenuItem>
          <SideMenuItem>Amor</SideMenuItem>
          <SideMenuItem>Alegria</SideMenuItem>
          <SideMenuItem>Paz</SideMenuItem>
          <SideMenuItem>Longanimidade</SideMenuItem>
          <SideMenuItem>Benignidade</SideMenuItem>
          <SideMenuItem>Bondade</SideMenuItem>
          <SideMenuItem>Fidelidade</SideMenuItem>
          <SideMenuItem>Mansidão</SideMenuItem>
          <SideMenuItem>Domínio Próprio</SideMenuItem>
        </Menu>
      </SideMenu>

      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
