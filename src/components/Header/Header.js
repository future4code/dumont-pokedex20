import React from 'react'
import { useHistory } from 'react-router-dom'
import { ContainerHeader, LogoPokedex } from './Styled'
import {Button} from '../../assets/buttons/Button'
import Logo from '../../assets/logo.png'
function Header (){
	const history = useHistory()

	const goToHomePage = ()=>{
		history.push('/')
	}
	const goToPokedex = ()=>{
		history.push('/pokedex')
	}
	return(
		<ContainerHeader>
			<div>
				<Button onClick={goToHomePage}>HomePage</Button>
			</div>	
			<div>
				<LogoPokedex src ={Logo}/>		
			</div>					
			<div>
				<Button onClick={goToPokedex}>Pokedex</Button>
			</div>
		</ContainerHeader>
	)
}
export default Header