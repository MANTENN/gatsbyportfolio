import React from 'react'
import styled from 'styled-components'

export default styled.div`
    width: {({width}) => width + "%"};
    float: left;
`