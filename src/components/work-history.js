import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'

export default ({
  company,
  website,
  description,
  projects,
  position,
  startDate,
  endDate,
}) => {
  return (
    <WorkHistoryContainer>
      <a href={website} style={{ textDecoration: 'none' }}>
        <Name>{company}</Name>
      </a>
      <Tags>
        <Tag>{position.name}</Tag>
        <Tag>
          <Moment format={'MM/DD/YYYY'}>{startDate}</Moment> &nbsp;-&nbsp;
          {endDate ? (
            <Moment format={'MM/DD/YYYY'}>{endDate}</Moment>
          ) : (
            'Present'
          )}
        </Tag>
      </Tags>
      <Description
        dangerouslySetInnerHTML={{
          __html: description.childMarkdownRemark.html,
        }}
      />
    </WorkHistoryContainer>
  )
}

const WorkHistoryContainer = styled.div`
  margin: 0;
  margin-bottom: 2em;
`

const Type = styled.div``

const TimeFrame = styled.div``

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`

const Tag = styled.div`
  color: #666;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.15em 0;
  border-radius: 0.5em;
  margin-left: 1em;
  :first-child {
    margin-left: 0;
  }
`

const Name = styled.h2`
  color: #1baef1;
  font-size: 1.25em;
  font-weight: bold;
  text-decoration: none;
  margin: 0;
`
const Description = styled.div`
  p {
    margin: 0;
  }
`
