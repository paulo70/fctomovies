import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;

  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid #ccc;
  border-right: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  border-left: 4px solid #a90000;

  background: transparent;

  width: 30px;
  height: 30px;
  border-radius: 50%;
`;