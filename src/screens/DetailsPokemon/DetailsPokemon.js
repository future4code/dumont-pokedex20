import React from 'react'
import Header from '../../components/Header/Header'
import {ContainerDetailsPokemons, ImagePokemon,DivContainerDataPokemons} from './Styled'
import {useHistory,useParams} from 'react-router-dom'
import {useRequestData} from '../../RequestData/useRequestData'

function DetailsPokemon (){
	const history = useHistory()
	const pathParams = useParams()
	const pokemonDetail = useRequestData(`https://pokeapi.co/api/v2/pokemon/${pathParams.pokename}`)
	
	const backTopage = () => {
		history.goBack()
	}
	const goPokedex = () => {
		history.push('/pokedex')
	}
    return(
        <ContainerDetailsPokemons>
        	<Header
        		textbutton={'Voltar'}
        		functionBtn={backTopage}
        		goPokedex={goPokedex}
        		textBtnPokedex={'Minha Pokedex'}
        	/>
            <div>
				<h1>{pokemonDetail.name}</h1>
			</div>
			<DivContainerDataPokemons>
				<div>
					<div>
						<ImagePokemon src={pokemonDetail.sprites !== undefined ? pokemonDetail.sprites.front_default : 'https://picsum.photos/300/300'} />
					</div>
					<div>
						<ImagePokemon src={pokemonDetail.sprites !== undefined ? pokemonDetail.sprites.back_default : 'https://picsum.photos/300/300'} />
					</div>
				</div>
				<div>
					<div>
						<h2>Stats</h2>
					</div>
					<div>
						<p><strong>hp:</strong>78</p>
						<p><strong>attack:</strong>84</p>
						<p><strong>defense:</strong></p>
						<p><strong>special-attack:</strong>109</p>
						<p><strong>special-defence:</strong>85</p>
						<p><strong>speed:</strong>100</p>
					</div>
				</div>
				<div>
					<div>
						<p>fire</p>
						<p>flying</p>
					</div>
					<div>
						<div>
							<h2>Principais ataques</h2>
						</div>
						<div>
							<p>mega-punch</p>
							<p>fire-punch</p>
							<p>thunder-punch</p>
							<p>scratch</p>
							<p>swords-dance</p>
						</div>
					</div>
				</div>
			</DivContainerDataPokemons>
        </ContainerDetailsPokemons>        
    )
}
export default DetailsPokemon