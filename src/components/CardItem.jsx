import React from "react";
import ReactSVG from "react-svg";
import "./card-item.scss";

const isSvg = image => image.split(".").pop() === "svg";

export default props => {
	const { image, title, text, background } = props.data;
	return (
		<div
			style={
				background && {
					backgroundImage: `url(${background}), linear-gradient(to top, #2414df 0%, #461af2 100%)`
				}
			}
			className="card-container"
		>
			{image && isSvg(image) ? (
				<ReactSVG src={image} alt={title} className="card-image" />
			) : (
				<img src={image} alt={title} className="card-image" />
			)}
			<h1>{title}</h1>
			<p>{text}</p>
		</div>
	);
};
