import React, { useState } from "react";
import styled from "styled-components";
import ChatBackground from "../components/ChatBackground";
import InitialChat from "../components/InitialChat";
import LeftChat from "../components/LeftChat";
import RightChat from "../components/RightChat";

const ChatContentContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 2.5vh 2vw 2vw;
  box-sizing: border-box;

  -ms-overflow-style: none; /* IE 및 Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari 및 Opera */
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2vh;
`;

const Input = styled.input`
  width: 75%;
  padding: 2vw;
  border-radius: 1vw;
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
  border: none;
  border-radius: 1vw;
  background: ${(props) =>
    props.disabled
      ? "#d9d9d9"
      : "radial-gradient(ellipse at center, #c2e59c 0%, #64b3f4 70%)"};
  color: white;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 500;

  &:disabled {
    cursor: default;
  }
`;

export default function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { type: "right", text: inputValue }]);
      setInputValue("");
      // 여기에 API 호출 후 응답 메시지를 추가하는 코드를 작성할 수 있습니다.
      // fetchApiResponse(inputValue);
    }
  };

  return (
    <ChatBackground>
      <ChatContentContainer>
        <InitialChat />
        {messages.map((message, index) =>
          message.type === "left" ? (
            <LeftChat key={index} message={message.text} />
          ) : (
            <RightChat key={index} message={message.text} />
          )
        )}
      </ChatContentContainer>

      <InputContainer>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="메시지를 입력하세요"
        />
        <Button onClick={handleSendMessage} disabled={inputValue.trim() === ""}>
          전송
        </Button>
      </InputContainer>
    </ChatBackground>
  );
}
