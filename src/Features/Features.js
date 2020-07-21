import React, { Component } from "react";
import Option from "../Option/Option.js";

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from "slugify";

class Features extends Component {
	render() {
		const features = Object.keys(this.props.features).map((feature, idx) => {
			const featureHash = feature + "-" + idx;
			const options = this.props.features[feature].map((item) => {
				const itemHash = slugify(JSON.stringify(item));
				return (
					<Option
						key={itemHash}
						itemHash={itemHash}
						feature={feature}
						item={item}
						selected={this.props.selected}
						handleChange={this.props.handleChange}
					/>
				);
			});
			return (
				<fieldset className="feature" key={featureHash}>
					<legend className="feature__name">
						<h3>{feature}</h3>
					</legend>
					{options}
				</fieldset>
			);
		});

		return features;
	}
}

export default Features;
