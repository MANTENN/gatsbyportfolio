import React from 'react'
import styled from 'styled-components'

export default styled.div`
    width: ${({ width }) => width || "100"}%;
    float: right;
    @media (max-width: 1000px) {
        width: 100%;
    }
`