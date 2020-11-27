import React, {useState,useEffect} from 'react'
import GlobalStateContext from './GlobalStateContext'


const GlobalState = (props)=>{
    const [pokemons,setPokemons]=useState([])
    const [pokedex,setPokedex]=useState([])
    

       
    
    const states = {pokemons,pokedex}
    const setters = {setPokemons,setPokedex}
    
    const data = {states,setters}
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
