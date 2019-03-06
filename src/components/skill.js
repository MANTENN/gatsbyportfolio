import React from 'react'
import styled from 'styled-components'

const Skill = styled.div`
    padding: 1em;
`

export default ({ skill: { name, confidence, yearsOfExperience} }) => {
    return <Skill>
        <b>{name}</b>
        <p alt={"Confidence Meter"}>{confidence}%</p>
        <p>
            {yearsOfExperience} years
        </p>
    </Skill>;
} 