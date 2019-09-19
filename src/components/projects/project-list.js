import React from "react"
import styled from "styled-components"

import ProjectCard from "./project-card"

const Projects = styled.section`
  display: grid;
  flex-grow: 1;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin: 3rem auto;
  width: 85%;
`

const ProjectList = ({ projects }) => {
  return (
    <Projects>
      {projects.map(({ node }, index) => {
        return <ProjectCard key={index} project={node} />
      })}
    </Projects>
  )
}

export default ProjectList
