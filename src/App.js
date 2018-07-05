import React, { Component } from 'react';
import ProductItem from './ProductItem'
import './App.css';

class Shop extends Component {
  /*constructor(){
    super();
    this.state={
      currentCart: [],
      itemCount: 0
    };
  }*/

  displayItems = () => {
    const products = require('./data/products.json');
    let items=[];

    for (var i = 0; i < products.length; i++){
          items.push(<ProductItem key={i}  index={i} itemName={products[i].name}/>)
        }
    return items;

  }

  onClick = () => {
    /*const products = require('./data/products.json');
    var cart = this.state.currentCart.slice();
    cart.push(products);
    localStorage.setItem('cart', JSON.stringify(cart));*/
    //console.log(products)
  }

  render() {

    return (        
        <div>
          <div className="App-header">
            <button onClick={this.onClick}>CHECK OUT</button>
            <p>THRiFT BiKES</p>
          </div>
          {this.displayItems()}
          
        </div>      
    );
  }
}

export default Shop;
