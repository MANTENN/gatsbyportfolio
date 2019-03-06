import React from 'react'
import { Link } from 'gatsby'
import base from '../base.css'
import Container from '../container'
import Navigation from '../navigation'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation />
        {children}
        <p>
          Built with <a href={"https://www.gatsbyjs.org/"}>Gatsby</a>, Content Provided by <a href={"https://www.contentful.com/"}>Contentful</a>, and Hosted by <a href={"https://www.netlify.com/"}>Netlify</a>.
        </p>
      </Container>
    )
  }
}

export default Template
export { default as Column } from './column'
export { default as Container } from './container'