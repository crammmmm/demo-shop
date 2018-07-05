import React, { Component } from 'react';

class ProductItem extends Component {
		constructor(props){
			super(props);
			let products = this.openJSON();	
			this.state = {
				//currentCart=[],
				currentOrder: 0,
				itemCount: products[this.props.index].stock
			};
		}

		openJSON = () => {
			const products = require('./data/products.json');
			return(products);
		}

		onInputChange = element => {
			this.setState({ currentOrder: element.target.value }) 

		}

		onClickAdd = () => {

			let products = this.openJSON();
			let currentStock = this.state.itemCount;

			currentStock = currentStock - this.state.currentOrder;
			products[this.props.index].stock = currentStock;
		    

		    var cart = [];
		    cart.push(products);
		    localStorage.setItem('blabla', JSON.stringify(cart));
		    this.setState({itemCount:currentStock});

		}

		onClickRemove = () => {		
			let products = this.openJSON();	
			let currentStock = this.state.itemCount;
			currentStock = currentStock + parseFloat(this.state.currentOrder);
			products[this.props.index].stock = currentStock;

			var cart = [];
		    cart.push(products);
		    localStorage.setItem('blabla', JSON.stringify(cart));
			this.setState({currentOrder:0, itemCount:currentStock});
		}

		render(){
			return(
				<div>
					<h1>{this.props.itemName}</h1>
					<p>Stock:{this.state.itemCount}</p>
					<input type="number" name="quantity" min="0" max={this.props.itemCount} onChange={this.onInputChange} value={this.state.currentOrder}/>
					<button onClick={this.onClickAdd}>ADD TO CART</button>
					<button onClick={this.onClickRemove}>X</button>
				</div>
			);
		}

}

export default ProductItem;