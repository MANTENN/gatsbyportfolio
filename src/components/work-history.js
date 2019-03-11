import React from 'react'
import styled from 'styled-components'

export default ({ company, website, description, projects, position }) => {
    return <WorkHistoryContainer>
        <a href={website}>
            <Name>{ company }</Name>
        </a>
        <Tags>
            <Tag>
                {position.name}
            </Tag>
        </Tags>
        <Description dangerouslySetInnerHTML={{
            __html: description.childMarkdownRemark.html,
        }} />
    </WorkHistoryContainer>
}

const WorkHistoryContainer = styled.div`
    margin: 0;
`

const Type = styled.div`

`

const TimeFrame = styled.div`

`

const Tags = styled.div`
    display: flex;
    flex-wrap: wrap; 
    flex-direction: row;
`

const Tag = styled.div`
    color: #fff;
    font-size: .625em;
    font-weight: bold;
    background-color: #606A71;
    padding: .25em 1em;
    border-radius: 1em;
`

const Name = styled.h2`
    color: #1BAEF1;
    font-size: 1em;
    font-weight: bold;
    margin: 0;
`
const Description = styled.p`
    margin: 0;
`
