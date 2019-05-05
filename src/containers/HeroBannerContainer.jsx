import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./hero-banner-container.scss";

const url = (name, wrap = false, isPng = false) => {
	const ext = isPng ? "png" : "svg";
	const url = `${process.env.PUBLIC_URL}/assets/layers/${name}.${ext}`;
	return wrap ? `url(${url})` : url;
};

class HeroBannerContainer extends React.PureComponent {
	render() {
		return (
			<Parallax
				ref={ref => (this.parallax = ref)}
				className="parallax-container"
			>
				<ParallaxLayer offset={0}>
					<div className="background" />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={0.5} className="rectangle-container">
					<img src={url("rectangle")} alt="rectangle" className="rectangle" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.02} speed={0.05} className="clouds-container">
					<img src={url("clouds")} alt="clouds" className="clouds" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.14} speed={0.1} className="logo-container">
					<img src={url("logo")} alt="logo" className="logo" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.26} speed={0.1} className="mountain-container">
					<img src={url("mountain")} alt="mountain" className="mountain" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.55} speed={0.4} className="sea-container">
					<img src={url("sea")} alt="sea" className="sea" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.417} speed={0.6} className="houses-container">
					<img src={url("houses")} alt="houses" className="houses" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.32} speed={0.6} className="birds-container">
					<img src={url("birds")} alt="birds" className="birds" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.135} speed={0.7} className="trees-container">
					<img src={url("trees")} alt="trees" className="trees" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.43} speed={1} className="people-container">
					<img src={url("people")} alt="people" className="people" />
				</ParallaxLayer>
				{this.props.children}
			</Parallax>
		);
	}
}

export default HeroBannerContainer;
