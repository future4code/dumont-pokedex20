import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import { AttacksNames, AttacksPokemons, ContainerDetailsPokemons, DivContainerDataPokemons, ImgFrontBackPokemon, PokemonTitle, StatsPokemon, StatsValues, TypesAttacks, TypesPokemons } from './Styled'

function DetailsPokemon (){
	const pathParams = useParams()
	const [pokemonData,setPokemonData]=useState([])

	useEffect(()=>{
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pathParams.pokename}`)
			.then((res)=>{
				setPokemonData(res.data)			
				console.log(res.data)
			})
			.catch((err)=>{
				alert(err.message)
			})
	},[])	
	
	console.log('Path: ',pathParams)
	return(
		<ContainerDetailsPokemons>
			<Header/>
			<div>
				<h1>{pathParams.pokename}</h1>
			</div>
			<DivContainerDataPokemons>
				<div>
					<ImgFrontBackPokemon>
						<img src={pokemonData.sprites !== undefined ? pokemonData.sprites.front_default: 'https://picsum.photos/300/300'} />
					</ImgFrontBackPokemon>
					<ImgFrontBackPokemon>
						<img src={pokemonData.sprites !== undefined ? pokemonData.sprites.back_default : 'https://picsum.photos/300/300'} />
					</ImgFrontBackPokemon>
				</div>
				<StatsPokemon>
					<div>
						<h2>Stats</h2>
					</div>					
					<StatsValues>
						{pokemonData.stats !== undefined ? pokemonData.stats.map((dados)=>{
							return(
								<div key={dados.id}>				
									<p><strong>{dados.stat.name}</strong>: {dados.base_stat}</p>
								</div>
							)			
						}): <p>Carregando...</p>}
					</StatsValues>					
				</StatsPokemon>
				<TypesAttacks>
					<TypesPokemons>
						{pokemonData.types !== undefined ? pokemonData.types.map((dados)=>{
							return(
								<div key={dados.id}>				
									<p><strong>{dados.type.name}</strong></p>
								</div>
							)			
						}): <p>Carregando...</p>}
					</TypesPokemons>
					<AttacksPokemons>
						<div>
							<h2>Attacks</h2>
						</div>
						<AttacksNames>						
							{pokemonData.moves !== undefined ? pokemonData.moves.map((dados,index)=>{
								if(index<5){
									return(
										<div key={dados.id}>									
											<p><strong>{dados.move.name}</strong></p>
										</div>
									)			
								}					
							}): <p>Carregando...</p>}
						</AttacksNames>
					</AttacksPokemons>
				</TypesAttacks>
				
			</DivContainerDataPokemons>
		</ContainerDetailsPokemons>
	)
}

export default DetailsPokemon