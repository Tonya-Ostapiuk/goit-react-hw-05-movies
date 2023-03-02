import React from 'react'
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

        </UlStyled>
    </nav>
)
}