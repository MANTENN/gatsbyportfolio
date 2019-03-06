import React from 'react'
import styled from 'styled-components'
import { SkillContainer, Header, Name, ConfidenceMeter, Experience } from './skill'

export default ({ schoolName, degree, startDate, endDate }) => {
    return <EducationContainer>
        <Header>
            <SchoolName>
                {schoolName}
            </SchoolName>
            <Degree>{degree}</Degree>
        </Header>
        <Term>
            {new Date(startDate).toString()}-{endDate}
        </Term>
    </EducationContainer>
}

const EducationContainer = styled(SkillContainer)`

`
const SchoolName = styled(Name)`
`
const Degree = styled(ConfidenceMeter)`
`
const Term = styled(Experience)`
`