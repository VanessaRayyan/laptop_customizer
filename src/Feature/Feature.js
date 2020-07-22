import React, { Component } from "react";
import Option from "../Option/Option.js";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

class Feature extends Component {
	render() {
		const featureHash = this.props.feature + "-" + this.props.idx;
		const options = this.props.features[this.props.feature].map((item) => {
			const itemHash = slugify(JSON.stringify(item));
			return (
				<Option
					key={itemHash}
					itemHash={itemHash}
					feature={this.props.feature}
					item={item}
					selected={this.props.selected}
					handleChange={this.props.handleChange}
				/>
			);
		});
		return (
			<fieldset className="feature" key={featureHash}>
				<legend className="feature__name">
					<h3>{this.props.feature}</h3>
				</legend>
				{options}
			</fieldset>
		);
	}
}

export default Feature;
