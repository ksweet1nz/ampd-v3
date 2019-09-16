import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"

/* const TitleBlock = styled.div`
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
` */

const ProjectItem = styled.article`
  height: 100%;
  position: relative;
  width: 100%;
  &:hover .title-block {
    opacity: 0.8;
  }
  .title-block {
    position: absolute;
    /* background-color: var(--main-pop-color); */
    background-color: ${props => (props.master ? "white" : "palevioletred")};
    bottom: 0;
    height: 100%;
    left: 0;
    opacity: 0;
    padding-right: 1rem;
    right: 0;
    text-align: right;
    transition: 0.5s ease;
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  color: white;
`

const ProjectCard = ({ project }) => {
  const { title, author, slug, level } = project.frontmatter
  const img = project.frontmatter.image.childImageSharp.fluid

  return (
    <ProjectItem>
      <StyledLink to={slug}>
        <Image fluid={img} />
        <div className="title-block">
          <h2>{title}</h2>
          <h6>{author}</h6>
          <h6>{level}</h6>
        </div>
      </StyledLink>
    </ProjectItem>
  )
}

export default ProjectCard
