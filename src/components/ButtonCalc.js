import React from "react";
import { Button } from "reactstrap";

const ButtonCalc = (props) => {
	return (
		<Button
			outline
			color={props.color}
			className={props.className}
			onClick={props.handleClick}
		>
			{props.text}
		</Button>
	);
};

export { ButtonCalc };
