import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 1,
          name: 'soap',
          cost: 12,
        },
        {
          id: 2,
          name: 'shampoo',
          cost: 20,
        }
      ],
      cart: {},
    };
    this.addToCart = this.addToCart.bind(this);

  }

  addToCart(id) {
    const item = this.state.cart[id];

    if (typeof item === 'undefined') {
      this.setState((preState) => ({
        ...preState,
        cart: {
          ...preState.cart,
          [id]: 1,
        }
      }));
    } else {
      const { cart } = this.state;

      this.setState({
        cart: {
          ...cart,
          [id]: item + 1,
        }
      });
    }

  }

  render() {

    return (
      <div className="App" >
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Simple e-commerce</h1>
        </header> */}
        <ul>
          {
            this.state.items.map(({ id, name, cost }) => (
              <li
                key={id}
                className="Product-intro"
                onClick={() => this.addToCart(id)}>
                {name}<br />{cost}
              </li>
            ))
          }
        </ul>
        <div>
          {Object.keys(this.state.cart).map((itemId) => <div key={itemId}>{itemId}</div>)}
        </div>
      </div >
    );
  }
}

export default App;
