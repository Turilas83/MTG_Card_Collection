import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import CardSearch from './CardSearch';
import CardCollection from './CardCollection';

class App extends Component {
 
render() {
  return (
    <main>
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Magic the Gathering</h1>
          </header>
          <ul className="header">
            <li><NavLink to="/search">Card Search</NavLink></li>
            <li><NavLink to="/collection">Card Collection</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/search" component={CardSearch}/>
            <Route path="/collection" component={CardCollection}/>
          </div>
        </div>
      </HashRouter>
    </main>
  );
}
}


export default App;
