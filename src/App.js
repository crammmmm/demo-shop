import React, { Component } from 'react';
import ProductItem from './ProductItem'
import Cart from './components/cart'
import './App.css';

class Shop extends Component {
  componentDidMount(){
    //super();
    let products = this.openJSON();
    var cart = [];
    cart.push(products);
    localStorage.setItem('blabla', JSON.stringify(cart));  
    
  }

  openJSON = () => {
      const products = require('./data/products.json');
      return(products);
  }

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
            <p>THRiFT BiKES</p>
          </div>
          <section className="ItemSection">
            {this.displayItems()}
          </section>
          <section className="CartSection">
            <Cart/>
            <button onClick={this.onClick}>CHECK OUT</button>            
          </section>
          
        </div>      
    );
  }
}

export default Shop;
