import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
    background-color: var(--main-pop-color);
    height: 100%;
    position: relative;
`

const ProjectItem = () => {
    return (
        <Item>
            <h1>Project One</h1>
        </Item>
    )
}

export default ProjectItem
