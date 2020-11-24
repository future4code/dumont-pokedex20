import React, {useEffect} from 'react'
import Header from '../../components/Header/Header'
import {useHistory} from 'react-router-dom'
import {useRequestData} from '../../RequestData/useRequestData'
import {ItemPokemnon,TitlePokemon,ImagePokemon,ButtonsPokemon,BtnDetalhesPokemon,BtnAdcionarPokemon,ContentPokemons} from './Styled'

function HomePage (){
    const requestData = useRequestData('https://pokeapi.co/api/v2/pokemon')
	const history = useHistory()


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
            {requestData.results !== undefined ? requestData.results.map((pokemon) => {
               return (
                <ItemPokemnon key={pokemon.name}>
                    <TitlePokemon>{pokemon.name}</TitlePokemon>
                    <ImagePokemon src={pokemon.url} alt={pokemon.name}/>
                    <ButtonsPokemon>
                        <BtnDetalhesPokemon onClick={() => openDetails(pokemon.name)}> Detalhes </BtnDetalhesPokemon>
                        <BtnAdcionarPokemon> Adcionar </BtnAdcionarPokemon>
                    </ButtonsPokemon>
                </ItemPokemnon>
                )
            }) : <ItemPokemnon>teste</ItemPokemnon>}
            </ContentPokemons>
            <footer>Esse é o foooter </footer>
        </div>
    )
}
export default HomePage
