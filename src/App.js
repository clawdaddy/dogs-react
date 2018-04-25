import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from './routes';
import { Route, Switch } from 'react-router-dom';
import OneDog from './OneDog';
import ManyDogs from './ManyDogs';

class App extends Component {
  

  render(){

    return(
      <div className='App'>
        <Switch>
          <Route exact path='/' component={OneDog}/>
          <Route path='/manyDogs' component={ManyDogs}/>
        </Switch>
      </div>
    )
  }
}

export default App;
