import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import {Route, NavLink, HashRouter, BrowserRouter, Switch} from 'react-router-dom';
import CardSearch from './CardSearch';
import CardCollection from './CardCollection';
import Home from './Home';
import Navigator from './Navigator';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navigator/>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/search" component={CardSearch}/>
              <Route path="/collection" component={CardCollection}/>
              <Route render={() => <h1>Page not found</h1>}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
