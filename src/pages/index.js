import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import ProjectList from "../components/projects/project-list"

const getProjects = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            level
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const Index = () => {
  const response = useStaticQuery(getProjects)
  const projects = response.allMdx.edges
  return (
    <Layout>
      <ProjectList projects={projects} />
    </Layout>
  )
}

export default Index
