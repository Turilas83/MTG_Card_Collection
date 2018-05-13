import React, { Component } from 'react';
import CardSearch from './CardSearch';
import CardCollection from './CardCollection';
import { Route, NavLink, HashRouter, BrowserRouter, Switch, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigator extends Component {

    render() {
        return (
            <Navbar>
            <Navbar.Header>
            <Navbar.Brand>
            <a href="/">MTG</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem eventKey={1} href="/search">
                Card Search
              </NavItem>
              <NavItem eventKey={2} href="/collection">
                Card Collection
              </NavItem>
            </Nav>
          </Navbar>
        );
    }
}


export default Navigator;
