import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import About from './components/About'
import Game from './components/Game'

// In this application, App will function simply to hold and position our components.
// Logic will be handled through actions and/or in components

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='content'>
        <Switch>
          <Route path='/game' component={Game} />

          <Route exact path='/' component={About} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
