import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchMainData } from "./actions";
import "./App.scss";

class App extends React.PureComponent {
	componentDidMount() {
		this.props.actions.fetchMainData();
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>{this.props.data.title}</title>
				</Helmet>
				<div />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.mainReducer.data
	};
};

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(
			{
				fetchMainData
			},
			dispatch
		)
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
