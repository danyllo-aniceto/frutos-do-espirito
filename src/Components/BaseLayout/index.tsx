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
import fruits from "../../consts/fruits";

export function BaseLayout({ children }: IBaseLayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigation = (fruitId: string) => {
    toggleMenu();
    navigate(`/fruit/${fruitId}`);
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
          {fruits.map((fruit) => (
            <SideMenuItem
              key={fruit.id}
              onClick={() => handleNavigation(fruit.id)}
            >
              {fruit.name}
            </SideMenuItem>
          ))}
        </Menu>
      </SideMenu>
      <Main>{children}</Main>
    </Container>
  );
}
