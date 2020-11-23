import React from 'react'
import Header from '../../components/Header/Header'
import {useHistory} from 'react-router-dom'

function HomePage (){
	const history = useHistory()
	const openPokedex = () => {
		history.push('/Pokedex')
	}
    return(
        <div>
        	<Header
        		textbutton={'Minha Pokedex'}
        		functionBtn={openPokedex}
        	/>
            HomePage
        </div>
    )
}
export default HomePage