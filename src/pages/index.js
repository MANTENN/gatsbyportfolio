import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Section, SectionLabel, Skill, Education } from '../components'
import Layout, { Column, Container } from '../components/layout'
import ArticlePreview from '../components/article-preview'
import SEO from "../components/seo"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const skills = get(this, 'props.data.allContentfulSkill.edges')
    const education = get(this, 'props.data.allContentfulEducation.edges')

    return (
      <Layout location={this.props.location} >
        <SEO title={siteTitle} keywords={[`portfolio`, `resume`, `react`, `rust`,`react-native`, `graphql`,`nodejs`]} />
        <Container>
          <Column width={75}>
          <Section>
            <SectionLabel>Experience</SectionLabel>
          </Section>
            <div className="wrapper">
              <h2 className="section-headline">Recent articles</h2>
              <ul className="article-list">
                {posts.map(({ node }) => {
                  return (
                    <li key={node.slug}>
                      <ArticlePreview article={node} />
                    </li>
                  )
                })}
              </ul>
            </div>
          </Column>
          <Column width={25}>
            <Section>
              <SectionLabel>Skills</SectionLabel>
              {
                skills.map(({ node }) => <Skill key={node.id} {...node} />)
              }
            </Section>
            <Section>
              <SectionLabel>Education</SectionLabel>
              {
                education.map(({ node }) => <Education key={node.id} {...node} />)
              }
            </Section>
          </Column>
        </Container>
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulSkill(sort: { fields: [createdAt], order: DESC } ) {
    	edges {
        node {
          id
          name
          confidence
          yearsOfExperience
        }
      }
    }
    allContentfulEducation(sort: { fields: [createdAt], order: DESC }) {
    	edges {
        node {
          id
          schoolName
          degree
          startDate
          endDate
        }
      }
  	}
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          # heroImage {
          #   fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
          #   ...GatsbyContentfulFluid_tracedSVG
          #   }
          # }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
