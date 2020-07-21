import React, { Component } from "react";

const USCurrencyFormat = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
});

class CartItem extends Component {
	render() {
		return (
			<div className="summary__option" key={this.props.hash}>
				<div className="summary__option__label">{this.props.featureName} </div>
				<div className="summary__option__value">
					{this.props.selectedoption.name}
				</div>
				<div className="summary__option__cost">
					{USCurrencyFormat.format(this.props.selectedoption.cost)}
				</div>
			</div>
		);
	}
}

export default CartItem;
