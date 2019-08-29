import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/layout'

const Wrapper = styled.section`
  border: 1px solid var(--main-lt-pop-color);
  margin: 2rem auto 5rem;
  width: 85%;
`

const TitleBlock = styled.div`
  margin: 2rem;
`

const Body = styled.div`
  margin: 2rem;
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
        <Image fluid={img} />
        <Body>
          <MDXRenderer>{body}</MDXRenderer>
        </Body>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
query getProject($slug:String!){
  mdx (frontmatter:{slug:{eq:$slug}}){
    frontmatter {
      title
      slug
      date(formatString: "MMM do, YYYY")
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
