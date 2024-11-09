import {
  CloseButton,
  Container,
  Divider,
  Footer,
  FooterContent,
  FooterText,
  Header,
  Logo,
  LogoAndTitle,
  Main,
  Menu,
  MenuButton,
  SideMenu,
  SideMenuItem,
  SocialIcons,
  Title,
} from "./styles";
import { IBaseLayoutProps } from "./types";
import logo from "../../assets/_e67ee415-41ed-419b-9e26-b13fadcbf287-removebg-preview.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import fruits from "../../consts/fruits";
import { FaInstagram, FaTiktok, FaExternalLinkAlt } from "react-icons/fa";

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

  const handleWhatIfNavigation = () => {
    toggleMenu();
    navigate("/whatif");
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
          <SideMenuItem onClick={handleWhatIfNavigation}>
            O Que Aconteceria Se?!
          </SideMenuItem>
        </Menu>
      </SideMenu>
      <Main>{children}</Main>
      <Divider />
      <Footer>
        <FooterContent>
          <p>Conheça também:</p>
          <a
            href="https://personagens-biblicos.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adivinhe o nome dos personagens bíblicos <FaExternalLinkAlt />
          </a>
        </FooterContent>
        <FooterText>
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </FooterText>
        <SocialIcons>
          <a
            href="https://instagram.com/danylloaniceto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://tiktok.com/@_danyllo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok />
          </a>
        </SocialIcons>
      </Footer>
    </Container>
  );
}
