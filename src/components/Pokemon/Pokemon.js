import React, { useEffect, useState,useContext } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ImgPokemon, PokemonsDetails,NamePokemon } from './Styled';
import {Button} from '../../assets/buttons/Button'
import GlobalStateContext from '../../global/GlobalStateContext'


function Pokemon(props){
    const [pokeImage, setPokeImage] = useState([])
    
    const history=useHistory()    
    const {states, setters,requests} = useContext(GlobalStateContext)

    const goToPokeDetail=(pokename)=>{
        history.push(`/DetailsPokemon/${pokename}`)
    }
    
    useEffect(()=>{
        getPokeImage()
    },[])

    
    const getPokeImage =()=>{
        axios
            .get(props.url)
            .then((response)=>{
            setPokeImage(response.data.sprites.front_default)
        })
            .catch((err)=>{ 
                console.log(err.mensage)
            })
    }    
   

    return(
        <PokemonsDetails>
            <ImgPokemon>
                <img src={pokeImage}/>
            </ImgPokemon>
            <NamePokemon>
                <h2>{props.name}</h2>
            </NamePokemon>            
            <div>
                <Button onClick={()=>props.onClickAdicionar(props.pokemon,props.index)}>Adicionar</Button>
                <Button onClick={()=>goToPokeDetail(props.name)}>Detalhes</Button>
            </div>
        </PokemonsDetails>

    );
}

export default Pokemon 