import React, {useContext, useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import Pokemon from '../../components/Pokemon/Pokemon'
import { CardPokemon, ContainerHomePage } from './Styled'

function HomePage (){
    const {states, setters} = useContext(GlobalStateContext)    
          
    const onClickAdicionar =(pokemon,index)=>{      
        let newPokedex = [...states.pokedex,pokemon]          
        states.pokemons.splice(index,1)
        setters.setPokedex(newPokedex)    
        alert(`${pokemon.name} foi adicionado a sua pokedex`)        
    } 
    
    return(
        <ContainerHomePage>
            <Header/>
            <CardPokemon>
                {states.pokemons.map((pokemon,index)=>{
                    return(
                        <Pokemon key={pokemon.id}
                            name={pokemon.name}
                            url={pokemon.url}
                            index={index}
                            pokemon={pokemon}   
                            onClickAdicionar={onClickAdicionar}                            
                            pokedex={false}
                        />
                    )
                })}            
            </CardPokemon>            
        </ContainerHomePage>
    )
}
export default HomePage