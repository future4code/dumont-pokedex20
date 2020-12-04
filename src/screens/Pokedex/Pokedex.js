import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import Pokemon from '../../components/Pokemon/Pokemon'
import {CardPokemon,ContainerHomePage} from './Styled'
import GlobalStateContext from '../../global/GlobalStateContext'

function Pokedex (){
    const {states,setters}=useContext(GlobalStateContext)
            
    const onClickRemover=(pokemon,index)=>{                
        let newPokemon=[...states.pokemons,pokemon]
        states.pokedex.splice(index,1)
        setters.setPokemons(newPokemon)
        alert(`${pokemon.name} foi removido da pokedex`)        
    }

    return(
        <ContainerHomePage>
        <Header/>
            <CardPokemon>
                {states.pokedex.length >0 ? states.pokedex.map((pokemon,index)=>{
                    return(
                        <Pokemon 
                            key={pokemon.id}
                            name={pokemon.name}
                            url={pokemon.url}
                            index={index}
                            pokemon={pokemon}  
                            onClickRemover={onClickRemover}
                            pokedex={true}                          
                        />
                    )
                }):<h1>Pokedex Vazia</h1>}
            </CardPokemon> 
        </ContainerHomePage>
    )
}
export default Pokedex