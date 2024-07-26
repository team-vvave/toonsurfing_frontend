import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../assets/images/logo.png";
import button from "../assets/images/startButton.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: black;
`;

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

const ButtonContainer = styled(motion.img)`
  width: 40vw;
  height: auto;
  margin: 8vh;
  cursor: pointer;
`;

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/select");
  };

  return (
    <Container>
      <LogoContainer src={logo} />
      <TextContainer>어떤 장면이 궁금하세요?</TextContainer>
      <ButtonContainer
        src={button}
        onClick={handleButtonClick}
        initial={{ scale: 1 }}
        whileTap={{ scale: 0.85 }}
      />
    </Container>
  );
}

export default HomePage;
