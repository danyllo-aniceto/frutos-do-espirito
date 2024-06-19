import styled from "styled-components";

interface SideMenuProps {
  isOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: linear-gradient(135deg, #d7a37b, #8b5e3c, #4d2e1a);
`;

export const TopHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const Title = styled.span`
  font-family: "Playwrite IS", cursive;
  font-weight: 400;
  font-size: 30px;
`;

export const Logo = styled.img`
  width: 150px;
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
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
