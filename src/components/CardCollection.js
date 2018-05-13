import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import CardSearch from './CardSearch';

class CardCollection extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
    cards: []
    };
  }
  deleteCard = key => {
    const cards = this.state.cards.filter((card, i) => i != key);
    this.setState({
      cards
    });
  };
  clickDelete(key) {
    this.deleteCard(key);
  }
  render() {
    return (
      <div className="MyCards">
        <table>
            <tr><th>Name</th></tr>
            {this.state.cards.map((item, key) => (
            <tbody>
              <tr key={key}>
              <td>{item.key}</td>
              <td>{item.name}</td>
              <button className="deleteButton" onClick={() => this.clickDelete(key)} />
            </tr>
          </tbody>
          
          
          ))}
          
        </table>
      </div>     
    );
  }
}


export default CardCollection;
