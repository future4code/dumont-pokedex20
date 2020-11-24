import React from 'react'
import Header from '../../components/Header/Header'
import {ContainerDetailsPokemons, DivContainerDataPokemons} from './Styled'
import {useHistory,useParams} from 'react-router-dom'

function DetailsPokemon (){
    const history = useHistory()
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
				<h1>Nome do Pokemon</h1>
			</div>
			<DivContainerDataPokemons>
				<div>
					<div>
						Imagem 1
					</div>
					<div>
						Imagem 2
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

        </div>
    )
}
export default DetailsPokemon