import styled from 'styled-components'

export const Button = styled.button `
    border:4px solid #356ABC;
    background-color:#FFCD00;
    border-radius:10px;
    color:#356ABC;
    width:10vw;
    height:5vh;
    font-weight:bolder;
    font-size:1.4vw;
    &:hover{
        cursor:pointer;
        color:#FFCD00;
        background-color:#356ABC;
        border:4px solid #98CCFF;
    }
`