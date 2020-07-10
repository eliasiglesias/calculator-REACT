import { roundResult } from "./roundResult";

const operationFunction = (oper1, oper2, operator) => {
	switch (operator) {
		case " + ":
			return `${oper1 + oper2}`;
		case " - ":
			return `${oper1 - oper2}`;
		case " * ":
			return `${oper1 * oper2}`;
		case " / ":
			return `${roundResult(oper1 / oper2)}`;
		default:
			return;
	}
};

export { operationFunction };
