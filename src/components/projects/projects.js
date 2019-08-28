import React from 'react'
import styled from 'styled-components'

import ProjectItem from './project-item'

const ProjectContainer = styled.div`
    display: grid;
    grid-template-column: repeat(auto-fit, minmax(280px, 1fr));
    margin: 0 auto;
    width: 85%;
`

const Projects = () => {
    return (
        <ProjectContainer>
           <ProjectItem /> 
        </ProjectContainer>
    )
}

export default Projects
