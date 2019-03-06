import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Column from '../components/layout/column'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import SEO from "../components/seo"

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location} >
        <SEO title="Nazar Maksymchuk | Portfolio" keywords={[`portfolio`, `resume`, `react`, `rust`,`react-native`, `graphql`,`nodejs`]} />
        <Column width={25}>left</Column>
        <Column width={75}>
        <div style={{ background: '#fff' }}>
            <Helmet title={siteTitle} />
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
          </div>
        </Column>
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
`
