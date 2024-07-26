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

const ComponentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContainer = styled(motion.img)`
  width: 70vw;
  height: auto;
  margin-top: 13vh;
`;

const TextContainer = styled(motion.div)`
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

const ButtonWrapper = styled(motion.div)`
  margin: 8vh;
`;

const ButtonContainer = styled.img`
  width: 40vw;
  height: auto;
  cursor: pointer;
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2, // 천천히 나타나도록 지속 시간을 늘림
      staggerChildren: 1, // 자식 요소들의 나타나는 간격을 늘림
    },
  },
};

const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } }, // 천천히 나타나도록 지속 시간을 늘림
};

function HomePage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/select");
  };

  return (
    <Container>
      <ComponentContainer
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <LogoContainer src={logo} variants={childVariants} />
        <TextContainer variants={childVariants}>
          어떤 장면이 궁금하세요?
        </TextContainer>
        <ButtonWrapper variants={childVariants}>
          <ButtonContainer
            src={button}
            onClick={handleButtonClick}
            initial={{ scale: 1 }}
            whileTap={{ scale: 0.85 }}
          />
        </ButtonWrapper>
      </ComponentContainer>
    </Container>
  );
}

export default HomePage;
