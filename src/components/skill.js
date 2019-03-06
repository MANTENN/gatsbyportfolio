import React from 'react'
import styled from 'styled-components'

export default ({ name, confidence, yearsOfExperience }) => {
    return <SkillContainer>
        <Header>
            <Name>{name}</Name>
            <ConfidenceMeter title={"Confidence Meter"}>{confidence}%</ConfidenceMeter>
        </Header>
        <Experience>
            {yearsOfExperience} years
        </Experience>
    </SkillContainer>;
}

const SkillContainer = styled.div`
    margin-bottom: 1em;
`
const Header = styled.div`
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-between;
`
const Name = styled.h2`
    font-size: 1em;
    font-weight: bold;
    margin: 0;
    align-self: flex-start;
`
const ConfidenceMeter = styled.span`
    align-self: flex-end;
`
const Experience = styled.p`
    margin: 0;
`
export { SkillContainer, Header, Name, ConfidenceMeter, Experience };