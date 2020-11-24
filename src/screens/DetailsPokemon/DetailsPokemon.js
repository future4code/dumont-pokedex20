import React from 'react'
import Header from '../../components/Header/Header'
import {useHistory,useParams} from 'react-router-dom'

function DetailsPokemon (){

	const backTopage = () => {
		history.goBack()
	}
	const goPokedex = () => {
		history.push('/pokedex')
	}
    return(
        <div>
        	<Header
        		textbutton={'Voltar'}
        		functionBtn={backTopage}
        		goPokedex={goPokedex}
        		textBtnPokedex={'Minha Pokedex'}
        	/>
        </div>
    )
}
export default DetailsPokemon