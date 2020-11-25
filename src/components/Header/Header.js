import react from 'react'
import {Navbar,BtnNavbar,BtnNavbarHidden} from './Styled'

const Header = (props) =>{

	return(

			<Navbar>
				<BtnNavbar onClick={props.functionBtn}>{props.textbutton}</BtnNavbar>
				<h1>Pokedex</h1>
				{props.goPokedex ?
					<BtnNavbar onClick={props.goPokedex}>{props.textBtnPokedex}</BtnNavbar>
				:
					<BtnNavbarHidden></BtnNavbarHidden>
				}


			</Navbar>
		)
}
export default Header 