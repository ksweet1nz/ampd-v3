import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'

const TitleBlock = styled.div`
  position: absolute;
  background-color: var(--main-pop-color);
  bottom: 0;
  height: 100%;
  left: 0;
  opacity: 0;
  padding-right: 1rem;
  right: 0;
  text-align: right;
  transition: .5s ease;
  width: 100%;
`

const ProjectItem = styled.article`
  height: 100%;
  position: relative;
  width: 100%;
  &:hover ${TitleBlock} {
    opacity: 1;
  }
`

const StyledLink = styled(Link)`
  color: white;
  
  }
`

const ProjectCard = ({project}) => {
  const { title, author, slug } = project.frontmatter
  const img = project.frontmatter.image.childImageSharp.fluid


  return (
    <ProjectItem> 
      <StyledLink to={slug}>
        <Image  fluid={img} />
        <TitleBlock >
          <h2>{title}</h2>
          <h6>{author}</h6>
        </TitleBlock>
      </StyledLink>
    </ProjectItem>
  )
}

export default ProjectCard
