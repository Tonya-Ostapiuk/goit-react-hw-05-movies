import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLi = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.14;
  &.active {
    color: tomato;
    cursor: pointer;
  }
`;
export const UlStyled = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  padding-bottom: 12px;
  border-bottom: 1px solid #bbb7b7;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
    0px 2px 2px rgba(0, 0, 0, 0.12);
`;
