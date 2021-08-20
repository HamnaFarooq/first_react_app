import React, { Component } from "react";

class Navbar extends Component {
	render() {
		console.log("props", this.props);

		return (
			<nav className="container navbar navbar-light bg-light">
				<a className="navbar-brand" href="#">
					Navbar
					<div className="btn m-3 btn-sm btn-secondary">
						{this.props.totalCounters}
					</div>
				</a>
			</nav>
		);
	}
}

export default Navbar;
