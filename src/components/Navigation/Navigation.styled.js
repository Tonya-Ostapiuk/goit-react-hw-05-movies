import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavLi = styled(NavLink)`
color: black;
text-decoration: none;
&.active{
color: tomato;
cursor: pointer;
}
`