import styled from 'styled-components'

export const ContainerDetailsPokemons = styled.div`
    text-align:center;
    background-color:#5FA1E3;    
    width:100vw;
    h1{
        font-size:3em;                
        color:#FFF;
    }
`
export const DivContainerDataPokemons = styled.div `
    display:flex;
    justify-content:space-around;
    align-items:flex-start;
`
export const ImgFrontBackPokemon = styled.div `
    background-color:#fff;
    border:7px solid #98CCFF;
    border-radius:10px;
    width:100%;
    margin:10px;
    img{
        width:15vw;
        height:30vh;
    }
`
export const StatsPokemon = styled.div `    
    background-color:#5FA1E3;
    border:7px solid #98CCFF;
    border-radius:10px;
    width:35%;    
    h2{
        font-size:2em;
        background-color:#fff;
        border-radius:10px;
        border:4px solid #98CCFF;        
        color:#5FA1E3;
        margin:10px 30px;
    }
`
export const StatsValues = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:10px 30px;
    padding-left:10px;
    border:4px solid #98CCFF;
    border-radius:10px;
    background-color:#fff;
    color:#5fa1e3;    
    strong{
        font-size:1.5em;
    }
    p{
        font-weight:bolder;
        font-size:1.1em;
    }
`
export const TypesAttacks = styled.div `
    background-color:#5FA1E3;
    border:7px solid #98CCFF;
    border-radius:10px;
    padding:10px 30px;
    width:20%;
`
export const TypesPokemons = styled.div `
    display:flex;    
    justify-content:space-around;    
    background-color:#fff;
    border:4px solid #98CCFF;
    border-radius:10px;
    color:#5fa1e3;
`
export const AttacksPokemons = styled.div`    
    border:4px solid #98CCFF;
    border-radius:10px;
    margin:10px 0;
    background-color:#fff;
    color:#5fa1e3;    
`
export const AttacksNames = styled.div`
    display:flex;
    flex-direction:column;    
    align-items:flex-start;
    margin-left:10px;
`

