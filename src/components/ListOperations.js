import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const ListOperations = (props) => {
	return (
		<ListGroup className="d-flex justify-content-center">
			{props.operations.map((value, index) => {
				return <ListGroupItem key={index}>{value}</ListGroupItem>;
			})}
		</ListGroup>
	);
};

export { ListOperations };
