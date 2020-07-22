import React, { Component } from "react";
import Feature from "../Feature/Feature.js";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

class Parts extends Component {
	render() {
		const features = Object.keys(this.props.features).map((feature, idx) => {
			return (
				<Feature
					feature={feature}
					idx={idx}
					features={this.props.features}
					selected={this.props.selected}
					handleChange={this.props.handleChange}
				/>
			);
		});

		return features;
	}
}

export default Parts;
