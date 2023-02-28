import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  font-weight: 500;
  font-size: 13px;
  line-height: 1.14;
  color: navy;
  display: block;
  letter-spacing: 0.02em;
  position: relative;
`;

export const InputStyled = styled.input `
    width: 200px;
    height: 20px;
  
    margin-left: 20px;
    margin-bottom: 10px;
    margin-top: 4px;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
   
    border-color: rgba(70, 70, 84, 0.227);
    &:focus{
        box-shadow: 6px 6px 6px rgba(0.05, 0.05, 0.1, 0.05);
        border: 1px solid #a9d1de;
        outline: none;
    
  }
    
`
export const BtnStyled = styled.button `
  font-weight: 400;
  font-size: 13px;
  line-height: 1.71;
  color: #0b544a;
  justify-content: center;
  width: 60px;
  height: 25px;
  margin-left: 5px;
  margin-top: 4px;
  border-style: solid;
  border-width: 1px;
  border-radius: 4px;
  border-color: rgba(70, 70, 84, 0.227);
  &:hover{
    border-color: #5e8591;
    background-color: #a9d1de;
    box-shadow: 6px 6px 6px rgba(0.05, 0.05, 0.1, 0.05);
    cursor: pointer;
  }
`