import styled from "styled-components";

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

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
  padding: 15px;
`;

export const Button = styled.button`
  background-color: #d7a37b;
  padding: 20px;
  width: 150px;
  border: none;
  border-radius: 25px;
`;
