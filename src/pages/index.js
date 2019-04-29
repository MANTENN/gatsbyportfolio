import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import {
  Section,
  SectionLabel,
  Skill,
  Education,
  WorkHistory,
} from '../components'
import Layout, { Column, Container } from '../components/layout'
import ArticlePreview from '../components/article-preview'
import SEO from '../components/seo'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const workHistory = get(this, 'props.data.allContentfulWorkHistory.edges')
    const hustles = get(this, 'props.data.allContentfulHustles.edges')
    const skills = get(this, 'props.data.allContentfulSkill.edges')
    const tools = get(this, 'props.data.allContentfulTool.edges')
    const education = get(this, 'props.data.allContentfulEducation.edges')

    return (
      <Layout location={this.props.location}>
        <SEO
          title={siteTitle}
          keywords={[
            `portfolio`,
            `resume`,
            `react`,
            `rust`,
            `react-native`,
            `graphql`,
            `nodejs`,
          ]}
        />
        <Container>
          <Column width={75}>
            <Section>
              <SectionLabel>Experience</SectionLabel>
              {workHistory.map(({ node }) => {
                return <WorkHistory key={node.id} {...node} />
              })}
              <SectionLabel>Hustle</SectionLabel>
              {hustles.map(({ node }) => {
                return <WorkHistory key={node.id} {...node} />
              })}
            </Section>
          </Column>
          <Column width={25}>
            <Section>
              <SectionLabel>Skills</SectionLabel>
              {skills.map(({ node }) => (
                <Skill key={node.id} {...node} />
              ))}
            </Section>
            <Section>
              <SectionLabel>Tools</SectionLabel>
              {tools.map(({ node }) => (
                <Skill key={node.id} {...node} />
              ))}
            </Section>
            <Section>
              <SectionLabel>Education</SectionLabel>
              {education.map(({ node }) => (
                <Education key={node.id} {...node} />
              ))}
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
    allContentfulSkill(sort: { fields: [createdAt], order: DESC }) {
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
    allContentfulWorkHistory(
      sort: { fields: [startDate], order: DESC }
      filter: { type: { eq: "Professional" } }
    ) {
      edges {
        node {
          id
          company
          website
          startDate
          endDate
          position {
            name
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          projects {
            id
            name
            heroImage {
              fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
    allContentfulHustles: allContentfulWorkHistory(
      sort: { fields: [startDate], order: DESC }
      filter: { type: { eq: "Hustle" } }
    ) {
      edges {
        node {
          id
          company
          website
          startDate
          endDate
          position {
            name
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          projects {
            id
            name
            heroImage {
              fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            description {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      }
    }
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 4
    ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulTool(sort: { fields: [id], order: DESC }) {
      edges {
        node {
          id
          name
          confidence
          yearsOfExperience
        }
      }
    }
  }
`
