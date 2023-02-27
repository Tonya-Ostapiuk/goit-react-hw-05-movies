import React from 'react'
import { NavLi } from './Navigation.styled'


export const Navigation = () => {
return (
    <nav>
        <ul>
            <li>
                <NavLi to='/'>Home</NavLi>
            </li>
            <li>
                <NavLi to='movies'>Movies</NavLi>
            </li>
        </ul>
    </nav>
)
}