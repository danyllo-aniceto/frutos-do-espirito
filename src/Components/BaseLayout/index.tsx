import {
  Button,
  Container,
  Header,
  Logo,
  Menu,
  Title,
  TopHeader,
  Wrapper,
} from "./styles";
import { IBaseLayoutProps } from "./types";
import logo from "./../../assets/treeBook.png";

export function BaseLayout({ children }: IBaseLayoutProps) {
  return (
    <Container>
      <Header>
        <TopHeader>
          <Title>Frutos do Espírito</Title>
          <Logo src={logo} alt="logo" />
        </TopHeader>
        <Menu>
          <Button>teste</Button>
          <Button>teste</Button>
          <Button>teste</Button>
          <Button>teste</Button>
          <Button>teste</Button>
        </Menu>
      </Header>

      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
