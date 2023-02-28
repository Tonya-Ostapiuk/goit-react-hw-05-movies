import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLi, UlStyled } from './Navigation.styled'


export const Navigation = () => {
return (
    <nav>
        <UlStyled>
            <li>
                <NavLi to='/'>Home</NavLi>
            </li>
            <li>
                <NavLi to='movies'>Movies</NavLi>
            </li>
            {/* <li>
                <NavLi to='search'>Search</NavLi>
            </li> */}

        </UlStyled>
    </nav>
)
}