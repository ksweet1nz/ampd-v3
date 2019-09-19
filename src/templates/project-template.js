import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "image title title"
    "body body body";
  flex-grow: 1;
  margin: 2rem auto 5rem;
  width: 85%;
`

const TitleBlock = styled.div`
  background: var(--main-pop-color);
  grid-area: title;
  padding: 2rem;
  text-transform: capitalize;
`

const Body = styled.div`
  border-bottom: 1px solid var(--main-lt-pop-color);
  border-left: 1px solid var(--main-lt-pop-color);
  border-right: 1px solid var(--main-lt-pop-color);
  grid-area: body;
  padding: 2rem;
  p {
    padding-bottom: 1rem;
  }
`

const TitleImage = styled.div`
  grid-area: image;
  object-fit: cover;
`

const projectTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid

  return (
    <Layout>
      <Wrapper>
        <TitleBlock>
          <h1>{title}</h1>
          <h4>{author}</h4>
          <h4>{date}</h4>
        </TitleBlock>
        <TitleImage>
          <Image fluid={img} />
        </TitleImage>
        <Body>
          <MDXRenderer>{body}</MDXRenderer>
        </Body>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query getProject($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

export default projectTemplate
