import React from 'react'
import Header from '../../components/Header/Header'
import {useHistory} from 'react-router-dom'

function Pokedex (){
	const history = useHistory()
	const backToHomePage = () => {
		history.goBack()
	}
    return(
        <div>
        <Header
        	textbutton={'Voltar'}
        	functionBtn={backToHomePage}
        />
            Pokedex
        </div>
    )
}
export default Pokedex