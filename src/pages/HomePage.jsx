import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";
import button from "../assets/images/startButton.png";
import ColorContainer from "../components/ColorBackground";

const LogoContainer = styled.img`
  width: 70vw;
  height: auto;
  margin-top: 13vh;
`;

const TextContainer = styled.div`
  font-family: "Pretendard";
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
  white-space: nowrap;
  line-height: 1.2;
  text-align: center;
  margin-top: 3vh;
  margin-bottom: 2vh;
`;

const ButtonContainer = styled.img`
  width: 40vw;
  height: auto;
  margin: 8vh;
  cursor: pointer; // 마우스 커서가 포인터로 변경되도록 스타일 추가
`;

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/select");
  };

  return (
    <ColorContainer>
      <LogoContainer src={logo} />
      <TextContainer>어떤 장면이 궁금하세요?</TextContainer>
      <ButtonContainer src={button} onClick={handleButtonClick} />
    </ColorContainer>
  );
}

export default HomePage;
