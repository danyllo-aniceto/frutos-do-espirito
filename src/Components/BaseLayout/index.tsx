import {
  CloseButton,
  Container,
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
import logo from "../../assets/_e67ee415-41ed-419b-9e26-b13fadcbf287-removebg-preview.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import items from "./../../pages/Dashboard/items";

export function BaseLayout({ children }: IBaseLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (item: (typeof items)[0]) => {
    toggleMenu();
    navigate("/fruit-content", {
      state: {
        description: item.descricao,
        color: item.cor,
        imageUrl: item.imagemUrl,
        title: item.titulo,
      },
    });
    window.scrollTo(0, 0); // Scroll to top when navigating
  };

  const handleInicioNavigation = () => {
    toggleMenu();
    navigate("/");
    window.scrollTo(0, 0); // Scroll to top when navigating
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
          <SideMenuItem onClick={handleInicioNavigation}>Início</SideMenuItem>
          {items.map((item) => (
            <SideMenuItem
              key={item.titulo}
              onClick={() => handleNavigation(item)}
            >
              {item.titulo}
            </SideMenuItem>
          ))}
        </Menu>
      </SideMenu>
      <Main>{children}</Main>
    </Container>
  );
}
