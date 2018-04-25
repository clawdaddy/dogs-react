import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import ManyDogs from './ManyDogs';
import OneDog from './OneDog';

export default function routes (){

    return(
        <Switch>
          <Route exact path='/' component={OneDog}/>
          <Route path='/manyDogs' component={ManyDogs}/>
        </Switch>
    )
}