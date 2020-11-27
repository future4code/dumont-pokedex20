import React, {useContext, useEffect, useState} from 'react'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import Pokemon from '../../components/Pokemon/Pokemon'
import { CardPokemon, ContainerHomePage } from './Styled'
import {BaseUrl} from '../../constants/BaseUrl'
import axios from 'axios'



function HomePage (){
    const {states, setters} = useContext(GlobalStateContext) 
    const [listaPokemons,setListaPokemons] = useState(states.pokemons)
    


    let lista = []
        useEffect(() => {
         axios
            .get(BaseUrl)
            .then((res)=>{
                setListaPokemons(res.data.results)              
            })
            .catch((err)=>{
                alert(err.message)
            })
         },[])

        const pokeList = listaPokemons.filter(pokemonFromDB => {
        return !states.pokedex.find(pokemonFromGlobalState => {
                return pokemonFromDB.name === pokemonFromGlobalState.name
            })
        })


    const onClickAdicionar =(pokemon,index)=>{        
        lista.push(pokemon)        
        console.log('lista:',lista)
        setters.setPokedex(lista)
        console.log('Pokedex:', states.pokedex)
        listaPokemons.splice(index,1)
        console.log('estado',listaPokemons)
    }
    
    return(
        <ContainerHomePage>
            <Header/>
            <CardPokemon>
                {pokeList.map((pokemon,index)=>{
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