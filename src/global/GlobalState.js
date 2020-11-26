import React, {useState} from 'react'
import axios from 'axios'
import GlobalStateContext from './GlobalStateContext'
import {BaseUrl} from '../constants/BaseUrl'

const GlobalState = (props)=>{
    const [pokemons,setPokemons]=useState([])
    const [pokedex,setPokedex]=useState([])
    
    const getPokemons = ()=>{
        axios
            .get(BaseUrl)
            .then((res)=>{
                setPokemons(res.data.results)              
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
    
    const states = {pokemons,pokedex}
    const setters = {setPokemons,setPokedex}
    const requests = {getPokemons}
    
    const data = {states,setters,requests}
    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
export default GlobalState
