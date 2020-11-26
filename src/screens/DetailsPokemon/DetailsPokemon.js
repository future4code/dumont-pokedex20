import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function DetailsPokemon (){
	const pathParams = useParams()
	const [pokemonData,setPokemonData]=useState([])

	useEffect(()=>{
		axios
			.get(`https://pokeapi.co/api/v2/pokemon/${pathParams.pokename}`)
			.then((res)=>{
				setPokemonData(res.data)				
			})
			.catch((err)=>{
				alert(err.message)
			})
	},[])	
	
	
	return(
		<div>
			<Header/>
			<div>
				<h1>{pathParams.pokename}</h1>
			</div>
			<div>
				<div>
					<div>
						<img src={pokemonData.sprites !== undefined ? pokemonData.sprites.front_default : 'https://picsum.photos/300/300'} />
					</div>
					<div>
						<img src={pokemonData.sprites !== undefined ? pokemonData.sprites.back_default : 'https://picsum.photos/300/300'} />
					</div>
				</div>
				<div>
					<h2>Stats</h2>
					{pokemonData.stats !== undefined ? pokemonData.stats.map((dados)=>{
						return(
							<div>				
								<p><strong>{dados.stat.name}</strong>: {dados.base_stat}</p>
							</div>
						)			
					}): <p>Carregando...</p>}
				</div>
				<div>
					<div>
						{pokemonData.types !== undefined ? pokemonData.types.map((dados)=>{
							return(
								<div>				
									<p><strong>{dados.type.name}</strong></p>
								</div>
							)			
						}): <p>Carregando...</p>}
					</div>
					<div>
						<div>
							<h2>Attacks</h2>
						</div>
						<div>						
							{pokemonData.moves !== undefined ? pokemonData.moves.map((dados,index)=>{
								if(index<5){
									return(
										<div>									
											<p><strong>{dados.move.name}</strong></p>
										</div>
									)			
								}					
							}): <p>Carregando...</p>}
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default DetailsPokemon