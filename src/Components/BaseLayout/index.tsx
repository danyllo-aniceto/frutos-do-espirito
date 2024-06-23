import {
  CloseButton,
  Container,
  ContentMain,
  Divider,
  Header,
  Logo,
  LogoAndTitle,
  Main,
  Menu,
  MenuButton,
  SideMenu,
  SideMenuItem,
  Title,
} from "./styles";
import { IBaseLayoutProps } from "./types";
import logo from "./../../assets/treeBook.png";
import paisagem from "./../../assets/paisagem.jpg";
import { useState } from "react";

export function BaseLayout({ children }: IBaseLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Header>
        <LogoAndTitle>
          <MenuButton onClick={toggleMenu}>&#9776;</MenuButton>
          <Title>Frutos do Espírito</Title>
        </LogoAndTitle>
        <Logo src={logo} alt="logo" />
      </Header>
      <Divider />
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

      <ContentMain backgroundUrl={paisagem}>
        <Main>{children}</Main>
      </ContentMain>
    </Container>
  );
}
