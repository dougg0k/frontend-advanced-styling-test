import React from "react";
import "./hero-container.scss";

const heroBanner = `${process.env.PUBLIC_URL}/assets/imgs/hero-banner.png`;
class HeroContainer extends React.PureComponent {
	render() {
		return (
			<div>
				<img src={heroBanner} alt="Hero Banner" className="hero-banner" />
			</div>
		);
	}
}

export default HeroContainer;
