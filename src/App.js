import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import React, { Component, useState } from "react";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <div className="container py-5">
//         <Counters />
//       </div>
//     </div>
//   );
// }

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 3 },
			{ id: 3, value: 1 },
			{ id: 4, value: 53 },
		],
	};

	render() {
		return (
			<div className="App">
				<Navbar totalCounters={this.state.counters.filter(c=> c && c.value > 0).length} />
				<div className="container py-5">
					<Counters
						counters={this.state.counters}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onReset={this.handleReset}
					/>
				</div>
			</div>
		);
	}

	handleDelete = (id) => {
		this.setState({
			counters: this.state.counters.filter((c) => c.id !== id),
		});
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counter.id - 1;
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleReset = () => {
		var counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};
}

export default App;
