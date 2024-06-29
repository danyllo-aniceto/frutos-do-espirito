import styled from "styled-components";

interface SideMenuProps {
  isOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  //background: linear-gradient(135deg, #b77f55, #704328, #3a190d);,

  background: linear-gradient(
    -60deg,
    #1c1c1c 10%,
    #2c3e50 30%,
    #34495e 50%,
    #4c6b82 70%,
    #5d6d7e 90%
  );
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-inline: 30px;
  margin-block: 10px;
  color: #fcfcfe;
  //background-color: white;
  //border-radius: 5px;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 650px) {
    margin-inline: 10px;
  }
  @media (max-width: 550px) {
    margin-block: 2px;
    padding: 10px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-inline: 20px;

  @media (max-width: 415px) {
    margin-inline: 5px;
  }
`;

export const LogoAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  @media (max-width: 550px) {
    gap: 15px;
  }
  @media (max-width: 380px) {
    gap: 5px;
  }
`;

export const Title = styled.span`
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-size: 55px;
  color: #fcfcfe;

  @media (max-width: 650px) {
    font-size: 35px;
  }
  @media (max-width: 550px) {
    font-size: 25px;
  }
  @media (max-width: 380px) {
    font-size: 18px;
  }
`;

export const Logo = styled.img`
  width: 200px;
  color: #fcfcfe;

  @media (max-width: 650px) {
    width: 150px;
  }

  @media (max-width: 550px) {
    width: 120px;
  }
  @media (max-width: 380px) {
    width: 80px;
  }
`;

export const MenuButton = styled.button`
  color: #fcfcfe;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 30px;
  @media (max-width: 550px) {
    font-size: 20px;
  }
  @media (max-width: 380px) {
    font-size: 12px;
  }
`;

export const SideMenu = styled.div<SideMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease;
  z-index: 1000;
`;

export const SideMenuItem = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 14px;
  text-align: left;
  padding: 10px 0;
  cursor: pointer;
  width: 100%;
  position: relative;
  transition: color 0.3s, background-color 0.3s, border-color 0.3s,
    transform 0.3s;

  &:hover {
    border-color: #fff;
    transform: scale(1.05);
  }

  &:hover:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid #fff;
    transform: scale(1.1);
    opacity: 0.5;
    transition: transform 0.3s, opacity 0.3s;
  }
`;

export const Menu = styled.div`
  margin-top: 25px;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Divider = styled.div`
  border-bottom: 2.5px solid #fcfcfe;
  width: 100%;
`;
