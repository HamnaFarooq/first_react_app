import { react } from "@babel/types";
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
	render() {
		return (
			<div>
				{this.props.counters.map((counter) => (
					<Counter
						key={counter.id}
						counter={counter}
						onDelete={this.props.onDelete}
						onIncrement={this.props.onIncrement}
					/>
				))}
				<br />
				<button
					onClick={() => this.props.onReset()}
					className="btn btn-info btn-sm"
				>
					Reset
				</button>
			</div>
		);
	}
}

export default Counters;
