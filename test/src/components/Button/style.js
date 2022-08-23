import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background: #0054FF;
  text-transform: uppercase;
  color:#fff;
  font-weight: bold;
  cursor: pointer;
  
  width: 50%;
  height: 40px;
  padding: 15px;
  margin-top: 30px;
  margin-bottom: 30px;

  :hover{
    background: #3e74e3;
  }

  :disabled{
    background: #ccc;
  }
`