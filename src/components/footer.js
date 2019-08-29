import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    background-color: var(--main-bg-color);
    border-top: 1px solid var(--main-lt-pop-color);
    font-weight: 100;
    font-size: .75em;
    height: 3rem;
    p {
        opacity: .6;
        padding: 1rem 2rem;
    }
`

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <StyledFooter>
            <p>&copy; {year} Advanced Manufacturing and Prototyping for Design</p>
        </StyledFooter>
    )
}

export default Footer
