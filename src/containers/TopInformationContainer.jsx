import React, { Fragment } from "react";
import Media from "react-media";
import Button from "../components/Button";
import CardItem from "../components/CardItem";
import DownArrow from "../components/DownArrow";
import RightArrow from "../components/RightArrow";
import "./top-information-container.scss";

class TopInformationContainer extends React.PureComponent {
	render() {
		const { cardsData, buttonText } = this.props;
		return (
			<div className="top-information-container">
				<div className="cards-container">
					{cardsData &&
						cardsData.map((data, index) => {
							const isLastItem = cardsData.length === index + 1;
							return (
								<Fragment key={Math.random()}>
									<CardItem data={data} />
									<Media query="(max-width: 1750px)">
										{matches =>
											matches ? (
												isLastItem ? null : (
													<DownArrow />
												)
											) : isLastItem ? null : (
												<RightArrow />
											)
										}
									</Media>
								</Fragment>
							);
						})}
				</div>
				<div className="button-container">
					<Button text={buttonText} />
				</div>
			</div>
		);
	}
}

export default TopInformationContainer;
