import React from 'react'
import Header from '../../components/Header/Header'
import {useHistory} from 'react-router-dom'

function DetailsPokemon (){
	const history = useHistory()
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
            Detalhes Pokemon
        </div>
    )
}
export default DetailsPokemon