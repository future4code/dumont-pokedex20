import react,{useEffect,useState} from 'react'
import {useRequestData} from '../../RequestData/useRequestData'
import {ImagePokemon} from './Styled'

const GetImagemPokemon = (props) => {
	const pokemon = useRequestData(props.namePokemon)
	const urlDaImagem = pokemon.sprites
	
	return(
			<ImagePokemon src={urlDaImagem !== undefined ? urlDaImagem.front_default : 'https://picsum.photos/300/300'} />
		)
}
export default GetImagemPokemon