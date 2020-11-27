import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import Pokemon from '../../components/Pokemon/Pokemon'
import {CardPokemon,ContainerHomePage} from './Styled'
import GlobalStateContext from '../../global/GlobalStateContext'
function Pokedex (){
    const {states,setters,requests}=useContext(GlobalStateContext)
    console.log('Pokedex: ',states.pokedex)
    return(
        <ContainerHomePage>
        <Header/>
            <CardPokemon>
                {(states.pokedex!==[]) ? states.pokedex.map((pokemon,index)=>{
                    return(
                        <Pokemon key={pokemon.id}
                            name={pokemon.name}
                            url={pokemon.url}
                            index={index}
                            pokemon={pokemon}                            
                        />
                    )
                }):<h1>Pokedex Vazia</h1>}
            </CardPokemon> 
        </ContainerHomePage>
    )
}
export default Pokedex