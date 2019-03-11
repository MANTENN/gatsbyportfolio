import React from 'react'
import styled from 'styled-components'

export default ({ name, confidence, yearsOfExperience }) => {
    return (
        <SkillContainer>
            <Header>
                <Name>{name}</Name>
                <ConfidenceMeter title={"Confidence Meter"}>{confidence}%</ConfidenceMeter>
            </Header>
            <Experience>
                {yearsOfExperience} year{yearsOfExperience > 1 && "s"}
            </Experience>
        </SkillContainer>
    );
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
    color: #222222;
    font-size: 1em;
    font-weight: bold;
    margin: 0;
    align-self: flex-start;
`
const ConfidenceMeter = styled.span`
    color: #707070;
    font-size: 0.625em;
    font-weight: bold;
    align-self: flex-end;
`
const Experience = styled.p`
    color: #707070;
    font-size: 0.625em;
    font-weight: bold;
    margin: 0;
`
export { SkillContainer, Header, Name, ConfidenceMeter, Experience };