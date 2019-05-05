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
				pages={3}
				className="parallax-container"
			>
				<ParallaxLayer offset={0}>
					<div className="background" />
				</ParallaxLayer>
				<ParallaxLayer offset={0} speed={1}>
					<img src={url("rectangle")} alt="rectangle" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.02} speed={0.05}>
					<img src={url("clouds")} alt="clouds" className="clouds" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.14} speed={0.1}>
					<img src={url("logo")} alt="logo" className="logo" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.26} speed={0.1}>
					<img src={url("mountain")} alt="mountain" className="mountain" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.55} speed={0.4}>
					<img src={url("sea")} alt="sea" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.417} speed={0.6}>
					<img
						src={url("beach-houses")}
						alt="beach-houses"
						className="beach-houses"
					/>
				</ParallaxLayer>
				<ParallaxLayer offset={0.32} speed={0.6}>
					<img src={url("birds")} alt="birds" className="birds" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.135} speed={0.7}>
					<img src={url("trees")} alt="trees" className="trees" />
				</ParallaxLayer>
				<ParallaxLayer offset={0.43} speed={0.8}>
					<img src={url("people")} alt="people" className="people" />
				</ParallaxLayer>
				{this.props.children}
			</Parallax>
		);
	}
}

export default HeroBannerContainer;
