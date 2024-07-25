import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/logo.png";
import backButton from "../assets/images/leftArrow.png";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 3vh;
`;

const ButtonContainer = styled.img`
  width: 5.5vw;
  height: auto;
  position: absolute;
  left: 3vw;
  cursor: pointer;
`;

const LogoContainer = styled.img`
  width: 35vw;
  height: auto;
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
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <ColorContainer>
      <HeaderContainer>
        <ButtonContainer src={backButton} onClick={handleBackClick} />
        <LogoContainer src={logo} />
      </HeaderContainer>
      <WhiteContainer>{children}</WhiteContainer>
    </ColorContainer>
  );
}
