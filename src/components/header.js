import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const NavHeader = styled.header`
    background-color: var(--main-bg-color);
    height: 100px;
`

const Menu = styled.ul`
    margin-left: 7.5%;
    margin-top: 3%;
    li {
            background-color: var(--main-pop-color);
            display: inline;
            padding: .5rem 2rem;
        :hover {
            background-color: black;
        }
`

const MenuItem = styled(Link)`
    color: var(--main-txt-color);
    text-decoration: none;   
    :hover {
        text-decoration: underline;
    }
`

const Header = () => {
    return (
        <NavHeader>
            <Menu>
                <MenuItem to="/"><li>Home</li></MenuItem>
                <MenuItem to="#"><li>News</li></MenuItem>
                <MenuItem to="#"><li>Projects</li></MenuItem>
                <MenuItem to="#"><li>People</li></MenuItem>
                <MenuItem to="#"><li>About</li></MenuItem>
            </Menu>
        </NavHeader>
    )
}

export default Header
