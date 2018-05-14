import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import CardSearch from './CardSearch';

class CardCollection extends Component {
 state = { users: [] }

 componentDidMount() {
   fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({ users }));
 }
  render() {
    const itemRows = this.state.users.map((user, i) =>
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.color}</td>
      <td>{user.type}</td>
      <td>{user.set}</td>
    </tr>
  )
    return (
      <div>     
        <table id="cardsTable">
          <tbody>
            <tr>
              <th>Card name</th>
              <th>Color</th>
              <th>Type</th>
              <th>Set</th>
            </tr>
            {itemRows}
          </tbody>
        </table>
      </div>
   
    );
  }
}


export default CardCollection;
