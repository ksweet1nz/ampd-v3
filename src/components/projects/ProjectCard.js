import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ProjectItem = styled.article`
  height: 100%;
  position: relative;
  width: 100%;
`

const TitleBlock = styled.div`
  position: absolute;
  background: var(--main-pop-color);
  bottom: 0;
  padding-right: 1rem;
  right: 0;
  text-align: right;
  width: 100%;
  z-index: 10;
`

const StyledLink = styled(Link)`
  color: white;
`

const ProjectCard = ({project}) => {
  const { title, author, slug } = project.frontmatter
  const img = project.frontmatter.image.childImageSharp.fluid
  return (
    <ProjectItem> 
      <StyledLink to={slug}>
        <Image fluid={img} />
        <TitleBlock>
          <h2>{title}</h2>
          <h6>{author}</h6>
        </TitleBlock>
      </StyledLink>
    </ProjectItem>
  )
}

export default ProjectCard
