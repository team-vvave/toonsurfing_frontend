import React from "react";
import styled from "styled-components";
import logo from "../assets/images/logo.png";

const LogoContainer = styled.img`
  width: 35vw;
  height: auto;
  margin-bottom: 3vh;
`;

const ColorContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  background: linear-gradient(to right, #c2e59c 0%, #64b3f4 100%);
`;

const WhiteContainer = styled.div`
  width: 100%;
  height: 90%;
  background: #fff;
  border-radius: 5vw 5vw 0 0;
  box-shadow: 0 -1.5vh 1vh rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function ChatBackground({ children }) {
  return (
    <ColorContainer>
      <LogoContainer src={logo} />
      <WhiteContainer>{children}</WhiteContainer>
    </ColorContainer>
  );
}
