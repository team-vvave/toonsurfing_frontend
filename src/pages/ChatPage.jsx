import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { StageSpinner } from "react-spinners-kit";
import { motion } from "framer-motion";

import InitialChat from "../components/InitialChat";
import LeftChat from "../components/LeftChat";
import RightChat from "../components/RightChat";
import profile from "../assets/images/thumnails/소녀재판.PNG";
import backButton from "../assets/images/leftArrow.png";
import header from "../assets/images/header.png";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const pageTransition = {
  duration: 0.5,
};

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 20vh;
  background-image: url(${header});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

const BackButton = styled.img`
  position: absolute;
  left: 2vw;
  top: 2vh;
  width: 5vw;
  cursor: pointer;
  z-index: 2;
`;

const WhiteContainer = styled.div`
  width: 100%;
  height: calc(100vh - 20vh);
  background: #fff;
  border-radius: 5vw 5vw 0 0;
  box-shadow: 0 -1.5vh 1vh rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  margin-top: -5vh;
  padding-top: 2vh;
  z-index: 2;
`;

const ChatContentContainer = styled.div`
  width: 100%;
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 0 2vw 1vh 2vw;
  box-sizing: border-box;
  z-index: 3;
  position: relative;

  .chat-bubble.left + .chat-bubble.right,
  .chat-bubble.right + .chat-bubble.left {
    margin-top: 2rem;
  }

  -ms-overflow-style: none; /* IE 및 Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari 및 Opera */
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 1vh 0 0 0;
  display: flex;
  justify-content: center;
  background: #fff;
  z-index: 3;
`;

const Input = styled.input`
  width: 72%;
  padding: 2vw;
  border-radius: 1.5vw;
  border: 1px solid #ccc;
  outline: none;
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 200;
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.3;
  color: #333;
`;

const Button = styled.button`
  width: 15%;
  margin-left: 1vw;
  margin-right: 2vw;
  padding: 2vw;
  border: none;
  border-radius: 1.5vw;
  background: ${(props) => (props.disabled ? "#d9d9d9" : "black")};
  color: white;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 500;

  &:disabled {
    cursor: default;
  }
`;

const LoadingOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.5);
`;

export default function ChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { type: "left", text: "This is a test message from the left side." },
    { type: "left", text: "This is a test message from the left side." },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  const chatEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputFocus = () => {
    inputRef.current.placeholder = "";
  };

  const handleInputBlur = () => {
    if (inputValue.trim() === "") {
      inputRef.current.placeholder = "메시지를 입력하세요";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      handleSendMessage();
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { type: "right", text: inputValue }]);
      setInputValue("");
      // fetchApiResponse(inputValue);
    }
  };

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={pageTransition}
    >
      <HeaderContainer>
        <BackButton src={backButton} onClick={handleBackClick} />
      </HeaderContainer>
      <WhiteContainer>
        {loading && (
          <LoadingOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <StageSpinner size={50} color="#fff" />
          </LoadingOverlay>
        )}

        <ChatContentContainer>
          <InitialChat />
          {messages.map((message, index) =>
            message.type === "left" ? (
              <LeftChat
                key={index}
                message={message.text}
                profileImage={index === 0 ? profile : null}
                className="chat-bubble left"
              />
            ) : (
              <RightChat
                key={index}
                message={message.text}
                className="chat-bubble right"
              />
            )
          )}
          <div ref={chatEndRef} />
        </ChatContentContainer>

        <InputContainer>
          <Input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyPress={handleKeyPress}
            placeholder="메시지를 입력하세요"
            ref={inputRef}
          />
          <Button
            onClick={handleSendMessage}
            disabled={inputValue.trim() === ""}
          >
            전송
          </Button>
        </InputContainer>
      </WhiteContainer>
    </Container>
  );
}
