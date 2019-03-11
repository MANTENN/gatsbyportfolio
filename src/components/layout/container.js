import React from 'react'
import styled from 'styled-components'

export default styled.div`
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 30px #00000020;
    &:after {
        content: '';
        clear: both;
        display: block;
    }
`