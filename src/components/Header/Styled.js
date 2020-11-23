import react from 'react'
import Styled from 'styled-components'

export const Navbar = Styled.header`
	display:flex;
	justify-content:space-between;
	width:100vw;
	padding: 0 10%;
	align-items:center;
	height:50px;
	background: #fff;
	box-shadow: 2px 2px 5px #ddd;
	box-sizing:border-box;
	text-transform:uppercase;
	color:#888;
`;
export const BtnNavbar = Styled.button`
	display:flex;
	justify-content:center;
	width:150px;
	align-items:center;
	height:40px;
	background: #ddd;
	border-radius:2px;
	border:none;
	color:#888;
	text-transform:uppercase;
	cursor:pointer;
	&:hover{
		background:#888;
		color:#ddd;
	}
	&:focus{
		outline:none;
	}
`;
export const BtnNavbarHidden = Styled.div`
	width:150px;
	height:40px;
	background:transparent;
`;