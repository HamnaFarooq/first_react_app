import React, { Component } from "react";

class Counter extends Component {
	render() {
		return (
			<React.Fragment>
				<span className={this.getBadgeClasses()}>
					{this.props.counter.value}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary mx-3 btn-sm"
				>
					Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm"
				>
					Delete
				</button>
				<br />
			</React.Fragment>
		);
	}

	getBadgeClasses() {
		let badge = "btn m-3 btn-sm btn-";
		badge += this.props.counter.value === 0 ? "warning" : "info";
		return badge;
	}
}

export default Counter;
