import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: radial-gradient(ellipse at center, #c2e59c 0%, #64b3f4 80%);
`;

export default function ColorContainer({ children }) {
  return <Container>{children}</Container>;
}
