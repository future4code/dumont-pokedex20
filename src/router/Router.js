import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import HomePage from '../screens/HomePage/HomePage'
import DetailsPokemon from '../screens/DetailsPokemon/DetailsPokemon'
import Pokedex from '../screens/Pokedex/Pokedex'

function Router (){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/DetailsPokemon/:pokename'>
                    <DetailsPokemon/>
                </Route>
                <Route exact path='/Pokedex'>
                    <Pokedex/>                    
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router