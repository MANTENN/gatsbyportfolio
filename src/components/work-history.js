import React from 'react'
import styled from 'styled-components'

export default ({ company, website, description, projects }) => {
    return <WorkHistoryContainer>
        <Name>{ company }</Name>
        <Description dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
        }} />
    </WorkHistoryContainer>
}

const WorkHistoryContainer = styled.div`
    margin: 0;
`

const Name = styled.h2`
    font-weight: 1em;
    font-weight: bold;
    margin: 0;
`
const Description = styled.p`
    margin: 0;
`
