import React from 'react'
import styled from 'styled-components'
import Moment from 'react-moment'
import momment from 'moment'
import {
  SkillContainer,
  Header,
  Name,
  ConfidenceMeter,
  Experience,
} from './skill'

export default ({ schoolName, degree, startDate, endDate }) => {
  const momentStartDate = momment(startDate)
  const momentEndDate = momment(endDate)
  const years = momentEndDate.diff(momentStartDate, 'years')
  return (
    <EducationContainer>
      <Header>
        <SchoolName>{schoolName}</SchoolName>
        <Degree>{degree}</Degree>
      </Header>
      <Term>
        <Moment format="MM/DD/YYYY">{startDate}</Moment>
        &nbsp;-&nbsp;
        <Moment format="MM/DD/YYYY">{endDate}</Moment>
      </Term>
      <Term>{years < 2 ? `${years} year` : `${years} years`}</Term>
    </EducationContainer>
  )
}

const EducationContainer = styled(SkillContainer)``
const SchoolName = styled(Name)``
const Degree = styled(ConfidenceMeter)``
const Term = styled(Experience)``
