import React, { useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ImgPokemon, PokemonsDetails,NamePokemon } from './Styled';
import {Button} from '../../assets/buttons/Button'

function Pokemon(props){
    const [pokeImage, setPokeImage] = useState([])    
    const history=useHistory()        

    const goToPokeDetail=(pokename)=>{
        history.push(`/DetailsPokemon/${pokename}`)
    }
    
    useEffect(()=>{
        axios
            .get(props.url)
            .then((response)=>{
            setPokeImage(response.data.sprites.other.dream_world.front_default)
        })
            .catch((err)=>{ 
                console.log(err.mensage)
            })
    },[props.url])
            
    const renderButtons = ()=>{
        if(props.pokedex){
            return(
                <div>
                    <Button onClick={()=>props.onClickRemover(props.pokemon,props.index)}>Remover</Button>
                    <Button onClick={()=>goToPokeDetail(props.name)}>Detalhes</Button>
                </div>
            )
        }else{
            return(
                <div>
                    <Button onClick={()=>props.onClickAdicionar(props.pokemon,props.index)}>Capturar</Button>
                    <Button onClick={()=>goToPokeDetail(props.name)}>Detalhes</Button>
                </div>
            )
        }
    }
    return(
        <PokemonsDetails>
            <ImgPokemon>
                <img src={pokeImage} alt='pokemon'/>
            </ImgPokemon>
            <NamePokemon>
                <h2>{props.name}</h2>
            </NamePokemon>            
            {renderButtons()}
        </PokemonsDetails>

    );
}

export default Pokemon 