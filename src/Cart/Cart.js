import React, { Component } from "react";
import CartItem from "../CartItem/CartItem.js";
import Total from "../Total/Total.js";

class Cart extends Component {
	render() {
		const summary = Object.keys(this.props.selected).map((feature, idx) => {
			const featureHash = feature + "-" + idx;
			const selectedOption = this.props.selected[feature];

			return (
				<CartItem
					key={featureHash}
					hash={featureHash}
					selectedoption={selectedOption}
					featureName={feature}
				/>
			);
		});
		const total = Object.keys(this.props.selected).reduce(
			(acc, curr) => acc + this.props.selected[curr].cost,
			0
		);

		return (
			<section className="main__summary">
				<h2>Your cart</h2>
				{summary}
				<Total total={total} />
			</section>
		);
	}
}

export default Cart;
