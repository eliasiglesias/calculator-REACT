import React from "react";
import { Col } from "reactstrap";
import { ButtonCalc } from "./ButtonCalc";

const CalculatorBody = (props) => {
	return (
		<>
			<Col className="mt-5" xs="12">
				<ButtonCalc
					color="warning"
					text="CE"
					handleClick={props.handleClick}
					className="p-2"
				/>
				<ButtonCalc
					className="ml-2"
					color="danger"
					text="C"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2 p-2 px-2"
					color="dark"
					text="χ²"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="info"
					text="/"
					handleClick={props.handleClick}
				/>
			</Col>
			<Col className="mt-2" xs="12">
				<ButtonCalc
					color="secondary"
					text="7"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="secondary"
					text="8"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="secondary"
					text="9"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2 px-3"
					color="info"
					text="*"
					handleClick={props.handleClick}
				/>
			</Col>
			<Col className="mt-2" xs="12">
				<ButtonCalc
					color="secondary"
					text="4"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="secondary"
					text="5"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="secondary"
					text="6"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2 px-3"
					color="info"
					text="-"
					handleClick={props.handleClick}
				/>
			</Col>
			<Col className="mt-2" xs="12">
				<ButtonCalc
					color="secondary"
					text="1"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="secondary"
					text="2"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="secondary"
					text="3"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="info"
					text="+"
					handleClick={props.handleClick}
				/>
			</Col>
			<Col className="mt-2" xs="12">
				<ButtonCalc
					className="p-1"
					color="dark"
					text="+/-"
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="secondary"
					text="0"
					handleClick={props.handleClick}
				/>

				<ButtonCalc
					className="ml-2 p-1 px-3"
					color="dark"
					text=","
					handleClick={props.handleClick}
				/>
				<ButtonCalc
					className="ml-2"
					color="success"
					text="="
					handleClick={props.handleClick}
				/>
			</Col>
		</>
	);
};

export { CalculatorBody };
