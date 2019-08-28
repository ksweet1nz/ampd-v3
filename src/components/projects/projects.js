import React from "react"
import styled from "styled-components"

import ProjectItem from "./project-item"

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  flex: 1 1 auto;
  margin: 0 auto;
  width: 85%;
`

const Projects = () => {
  return (
    <ProjectContainer>
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
      <ProjectItem />
    </ProjectContainer>
  )
}

export default Projects
