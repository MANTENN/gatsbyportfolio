import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './article-preview.module.css'

export default ({ heroImage, slug, title, publishDate, description, tags }) => (
  <div className={styles.preview}>
    <Img alt="" fluid={heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/blog/${slug}`}>{title}</Link>
    </h3>
    <small>{publishDate}</small>
    <p
      dangerouslySetInnerHTML={{
        __html: description.childMarkdownRemark.html,
      }}
    />
  </div>
)
