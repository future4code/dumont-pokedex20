import react from 'react'
import Styled from 'styled-components'

export const ContentPokemons = Styled.section`
	width:100vw;
	padding: 10px 10%;
	box-sizing:border-box;
	display:flex;
	flex-wrap:wrap;
	justify-content:center;
	align-items:center;
`;
export const ItemPokemnon = Styled.div`
	border: 1px solid #888;
	width:300px;
	height:400px;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	margin: 5px;
	position:relative;
`;
export const TitlePokemon = Styled.h2`
	color:#888;
	text-transform:Capitalize;
	font-weight:800;
	tex-align:center;
`;

export const ButtonsPokemon = Styled.div`
 	border-top: 1px solid #888;
 	padding: 5px;
 	display:flex;
 	justify-content:space-around;
 	align-items:center;
 	width:98%;
`;
export const BtnDetalhesPokemon = Styled.button`
	width:40%;
	height:40px;
	display:flex;
	justify-content:center;
	align-items:center;
	text-transform:uppercase;
	color:#888;
	border:1px solid #888;
	background:transparent;
	border-radius:5px;
	cursor:pointer;
	&:hover{
		color:#ccc;
		border:1px solid #ccc;
	}
	&:focus{
		outline:none;
	}
`;
export const BtnAdcionarPokemon = Styled.button`
	width:40%;
	height:40px;
	display:flex;
	justify-content:center;
	align-items:center;
	text-transform:uppercase;
	color:#888;
	background:#ddd;
	border:none;
	border-radius:5px;
	cursor:pointer;
	&:hover{
		color:#ddd;
		background:#888;
	}
	&:focus{
		outline:none;
	}
`;