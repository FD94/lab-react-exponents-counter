function Exponent(props) {
	return (
		<div className="exponent-counter-container">
			<p className="exponent-label">
				{props.num}n<sup>{props.exponent}</sup>
			</p>
			<p className="exponent-result">
				{props.num} ** {props.exponent} ={" "}
				<span className="total">{props.num ** props.exponent}</span>
			</p>
		</div>
	);
}

export default Exponent;
