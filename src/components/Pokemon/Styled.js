import styled from 'styled-components'

export const PokemonsDetails = styled.div `
    display:flex;
    flex-direction:column;    
    align-items:center;   
    text-align:center; 
    border:7px solid #98CCFF;
    background-color:#5FA1E3;
    border-radius:10px;
    margin:10px;
    padding:10px;
    button{
        margin:2px;
        font-size:1.4vw;
    }            
`
export const ImgPokemon = styled.div`
    background-color:#fff;
    border:4px solid #98CCFF;
    border-radius:10px;
    width:100%;
    img{
        width:10vw;
        height:30vh;
    }
`
export const NamePokemon = styled.div `
    color:#FFCD00;
    border-radius:10px;
    width:100%;    
    h2{
        background-color:#fff;
        border:4px solid #98CCFF;
        border-radius:10px;
        color:#5FA1E3;
    }
`