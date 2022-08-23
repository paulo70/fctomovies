import styled from 'styled-components'

export const Search = styled.input`
  font-size: 12px;
  line-height: 1;
  border: none;
  border-radius: 10px;
  text-align: left;
  text-transform: uppercase;
  padding: 10px;
  
  width: 50%;
  height: 40px;
  margin-left: 30px;
  

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #A39C9D;
  }

  @media (max-width: 768px) {
    margin-right: 10px;
    width: 100%;
  } 
`