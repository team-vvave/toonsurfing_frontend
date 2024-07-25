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
  width: 70%;
  padding: 1vw;
  font-size: 1rem;
  border-radius: 1vw;
  border: 1px solid #ccc;
  outline: none;
`;

const Button = styled.button`
  padding: 1vw 2vw;
  margin-left: 1vw;
  font-size: 1rem;
  border: none;
  border-radius: 1vw;
  background-color: #64b3f4;
  color: white;
  cursor: pointer;
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
        <Button onClick={handleSendMessage}>전송</Button>
      </InputContainer>
    </ChatBackground>
  );
}
