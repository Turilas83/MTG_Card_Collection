import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

class CardSearch extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
    listItems: [],
    search: '',
    cardCollection: [],
    name: ""
    };
  }
  onChange = (event) => {
    this.setState({search: event.target.value});
  };
  addCard = key => {
    const {name} = this.state;
    const items = {
      name
    };
  
    this.setState({
      names: [...this.state.cardCollection, items],
      name: ""
    });
  };

  buttonPressed = () => {
    console.log("testi");
    fetch("https://api.magicthegathering.io/v1/cards?name="+ this.state.search )
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        listItems: responseData.cards,
      });
    })
  }

  clickAdd(key) {
    this.addCard(key);
  }
  render() {
    const itemRows = this.state.listItems.map((cards, i) =>
    <tr key={cards.id}>
      <td>{cards.name}</td>
      <td>{cards.colors}</td>
      <td>{cards.type}</td>
      <td>{cards.setName}</td>
      <td>  
        <div className="dropdown">
          { cards.imageUrl && <img src={cards.imageUrl} alt={cards.name} width="13" height="19" />}
            <div className="dropdown-content">
              <img src={cards.imageUrl} alt={cards.name} width="223" height="310" />
            </div>
        </div>
      </td>
      <td><button className="addButton" onClick={() => this.clickAdd(cards.name)}>Add</button></td>
    </tr>
  )
    return (
      <div>     
        <div className="searchField">
          <input type="text" className="query" placeholder="Card name" onChange={this.onChange} value={this.state.search}/>
          <button onClick={this.buttonPressed} className="button">Search</button>
        </div>
        <form onSubmit={this.addCard}>
        <table id="cardsTable">
          <tbody>
            <tr>
              <th>Card name</th>
              <th>Color</th>
              <th>Type</th>
              <th>Set</th>
              <th>Image</th>
              <th>Add card to<br/> your collection</th>
            </tr>
            {itemRows}
          </tbody>
        </table>
        </form>
      </div>
    );
  }
}


export default CardSearch;
