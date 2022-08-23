import styled from "styled-components";

export const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  height: 3em;
  z-index: 1;

  text-transform: uppercase;
  font-weight: bold;
`;

export const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;

  margin-right: 0.1em;
  font-size: ${props => (props.active ? "18px" : "1em")};
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "white" : "#e9ebe1")};
  height: ${props => (props.active ? "3em" : "3.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;
  padding-bottom: 20px;
  padding-top: 10px;

  :hover {
    background-color: white;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  ${props => (props.active ? "" : "display:none")}
`