import React, {useContext, useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import Pokemon from '../../components/Pokemon/Pokemon'
import { CardPokemon, ContainerHomePage } from './Styled'

const lista =[]

function HomePage (){
    const {states, setters,requests} = useContext(GlobalStateContext)    

    useEffect(()=>{
        requests.getPokemons()        
    },[])
    
    useEffect(()=>{
        setters.setPokedex(lista)
        setters.setPokemons(states.pokemons)
    },[lista])

    const onClickAdicionar =(pokemon,index)=>{        
        lista.push(pokemon)        
        console.log('lista:',lista)
        console.log('Pokedex:', states.pokedex)
        states.pokemons.splice(index,1)
        console.log('estado',states.pokemons)
    }
    
    return(
        <ContainerHomePage>
            <Header/>
            <CardPokemon>
                {states.pokemons.map((pokemon,index)=>{
                    return(
                        <Pokemon
                            name={pokemon.name}
                            url={pokemon.url}
                            index={index}
                            pokemon={pokemon}   
                            onClickAdicionar={onClickAdicionar}                         
                        />
                    )
                })}            
            </CardPokemon>
            
        </ContainerHomePage>
    )
}
export default HomePage