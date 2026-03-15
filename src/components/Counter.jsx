import { useState } from "react";
import Exponent from "./Exponent";

const Counter = () => {
	const [count, setCount] = useState(0);

	const decrement = () => setCount((prevCount) => prevCount - 1);
	const increment = () => setCount((prevCount) => prevCount + 1);
	return (
		<>
			<div className="counter-container">
				<p className="counter-value">{count}</p>
				<button className="counter-button" onClick={decrement}>
					-
				</button>
				<button className="counter-button" onClick={increment}>
					+
				</button>
			</div>
			<div className="container">
				<Exponent num={count} exponent={2} />
				<Exponent num={count} exponent={3} />
				<Exponent num={count} exponent={4} />
				<Exponent num={count} exponent={5} />
				<Exponent num={count} exponent={6} />
			</div>
		</>
	);
};

export default Counter;
