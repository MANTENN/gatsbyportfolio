import React from 'react'
import styled from 'styled-components'

export default styled.div`
    width: 100%;
    background-color: #fff;
    &:after {
        content: '';
        clear: both;
        display: block;
    }
`