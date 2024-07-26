import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChatContainer = styled.div`
  background-color: #f5f5f5;
  border-radius: 1.5vw;
  box-shadow: 1vw 1vw 1.5vw rgba(0, 0, 0, 0.3);
  display: inline-block;
  align-items: flex-start;
  padding: 2vw 3vw;
  text-align: left;
  margin: 1vw 0;
  max-width: 70%;
  width: fit-content;
`;

const ProfileImage = styled.img`
  width: 11vw;
  height: 11vw;
  border: solid 0.2vw #d9d9d9;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 2vh;
  margin-bottom: 0.5vh;
  margin-left: 1vw;
`;

const ChatText = styled.p`
  font-family: "Pretendard";
  font-size: 1rem;
  font-weight: 300;
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.2;
  color: #333;
  margin: 0;
`;

export default function LeftChat({ message, profileImage }) {
  return (
    <Container>
      {profileImage && <ProfileImage src={profileImage} alt="profile" />}
      <ChatContainer>
        <ChatText>{message}</ChatText>
      </ChatContainer>
    </Container>
  );
}
