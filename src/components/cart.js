import React, { Component } from 'react';

class Cart extends Component {

	componentDidMount(){
		let cart=JSON.parse(localStorage.getItem('cart'));
		console.log(cart.length);
	}

	/*getCart(){
		let items=[]
		let cart=JSON.parse(localStorage.getItem('cart'));
			for (var i = 0; i < cart.length; i++){
				items.push(

					<tr key={i}>
						<td>hello</td>
					</tr>

				)
			}
		return items;
	}*/

	render(){

		return(

			<div>
				<h1>SHOPPiNG CART</h1>
				{/*<table>
				<tbody>
					<tr>
						<th>iTEM</th>
						<th>QTY</th>
						<th>PRiCE</th>
					</tr>					
					{this.getCart()}
				</tbody>
				</table>*/}
			</div>

		);
	}
}

export default Cart;