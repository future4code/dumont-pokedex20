import React, {useEffect,useState} from 'react'
import Header from '../../components/Header/Header'
import {useHistory} from 'react-router-dom'
import {useRequestData} from '../../RequestData/useRequestData'
import GetImagemPokemon from '../../components/GetImagemPokemon/GetImagemPokemon'
import axios from 'axios'
import {ItemPokemnon,TitlePokemon,ButtonsPokemon,BtnDetalhesPokemon,BtnAdcionarPokemon,ContentPokemons} from './Styled'

function HomePage (){
    const history = useHistory()
    const pokemonList = useRequestData('https://pokeapi.co/api/v2/pokemon')
    
	const openPokedex = () => {
		history.push('/Pokedex')
	}
    const openDetails = (name) => {
        history.push(`/DetailsPokemon/${name}`)
    }

    return(
        <div>
        	<Header
        		textbutton={'Minha Pokedex'}
        		functionBtn={openPokedex}
        	/>
            <ContentPokemons>
               {pokemonList.results !== undefined ? pokemonList.results.map((pokemon,ind) => {
                    return(
                            <ItemPokemnon key={pokemon.name}>
                                <TitlePokemon>{pokemon.name}</TitlePokemon>
                                <GetImagemPokemon namePokemon={pokemon.url}/>
                                <ButtonsPokemon>
                                    <BtnDetalhesPokemon onClick={() => openDetails(pokemon.name)}>Detalhes</BtnDetalhesPokemon>
                                    <BtnAdcionarPokemon>Adcionar</BtnAdcionarPokemon>
                                </ButtonsPokemon>
                            </ItemPokemnon>
                        )

               }) : <ItemPokemnon>Carregando...</ItemPokemnon> }
            </ContentPokemons>
            <footer>Esse é o foooter </footer>
        </div>
    )
}
export default HomePage
