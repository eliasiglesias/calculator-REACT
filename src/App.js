import React, { useState } from "react";
import "./App.css";
import { Row, Container } from "reactstrap";
import { CalculatorBody } from "./components/CalculatorBody";
import { CalculatorOutput } from "./components/CalculatorOutput";
import { operationFunction } from "./aux-functions/operationFunction";
import { checkOperator } from "./aux-functions/checkOperator";
import { checkNumberCharacter } from "./aux-functions/checkNumberCharacter";
import { checkFirstNumber } from "./aux-functions/checkFirstNumber";
import { checkResultCharacter } from "./aux-functions/checkResultCharacter";
import { checkC } from "./aux-functions/checkC";
import { checkCE } from "./aux-functions/checkCE";
import { setNegateNumber } from "./aux-functions/setNegateNumber";
import { checkNegateCharacter } from "./aux-functions/checkNegateCharacter";
import { checkElevateCharacter } from "./aux-functions/checkElevateCharacter";
import { elevateNumber } from "./aux-functions/elevateNumber";
import {
	checkDecimalCharacter,
	includesDecimal,
} from "./aux-functions/checkDecimalCharacter";
import { getLocaleDecimal } from "./aux-functions/getLocaleDecimal";
import { replaceDecimalToLocale } from "./aux-functions/replaceDecimalToLocale";
import { replaceDecimalToInteger } from "./aux-functions/replaceDecimalToInteger";
import { ListOperations } from "./components/ListOperations";

function App() {
	const [firstNumber, setFirstNumber] = useState("0");
	const [secondNumber, setSecondNumber] = useState("");
	const [operator, setOperator] = useState("");
	const [operation, setOperation] = useState([]);

	const handleClickNumber = (event) => {
		const character = event.target.textContent;
		const isNumber = checkNumberCharacter(character);
		const initialFirstNumber = checkFirstNumber(firstNumber);
		const checkOperatorRequires = checkOperator(character) && firstNumber;
		const resultCharacter = checkResultCharacter(character);
		const checkDeleteAllCharacter = checkC(character);
		const checkDeleteCurrentCharacter = checkCE(character);
		const checkDecimalOperator = checkDecimalCharacter(character);
		const checkNegateOperator = !operator && checkNegateCharacter(character);
		const checkElevateOperator = !operator && checkElevateCharacter(character);
		const checkAllParameters =
			resultCharacter && firstNumber && secondNumber && operator;
		const localeDecimal = getLocaleDecimal();
		const checkFirstNumberDecimal = !includesDecimal(firstNumber) && !operator;
		const checkSecondNumberDecimal = !includesDecimal(secondNumber) && operator;

		// Cambiar estado del primer o del segundo numero
		if (isNumber) {
			if (!operator) {
				let firstNumberTemp = `${firstNumber}${character}`;
				if (initialFirstNumber) {
					firstNumberTemp = character;
				}
				setFirstNumber(firstNumberTemp);
			}
			if (operator) {
				setSecondNumber(`${secondNumber}${character}`);
			}
		}

		// Cambiar estado del operador
		if (checkOperatorRequires) {
			setOperator(` ${character} `);
		}

		// Concatenar operaciones sin pulsar el igual
		if (checkOperatorRequires && secondNumber) {
			const operationComplete = [firstNumber, operator, secondNumber];
			setOperation([...operation, operationComplete]);
			const setFirstNumberToParse = replaceDecimalToInteger(
				firstNumber,
				localeDecimal
			);
			const setSecondNumberToParse = replaceDecimalToInteger(
				secondNumber,
				localeDecimal
			);
			const result = operationFunction(
				parseFloat(setFirstNumberToParse),
				parseFloat(setSecondNumberToParse),
				operator
			);
			console.log(result);
			setFirstNumber(result);
			setOperator(` ${character} `);
			setSecondNumber("");
		}

		// Resultado de la operación. Cambia estado de nuestros tres elementos
		if (checkAllParameters) {
			const operationComplete = [firstNumber, operator, secondNumber];
			setOperation([...operation, operationComplete]);
			const setFirstNumberToParse = replaceDecimalToInteger(
				firstNumber,
				localeDecimal
			);
			const setSecondNumberToParse = replaceDecimalToInteger(
				secondNumber,
				localeDecimal
			);
			const result = operationFunction(
				parseFloat(setFirstNumberToParse),
				parseFloat(setSecondNumberToParse),
				operator
			);

			setFirstNumber(replaceDecimalToLocale(result, localeDecimal));
			setOperator("");
			setSecondNumber("");
		}

		// Cambia el estado de los elementos con la funcionalidad del botón "C"
		if (checkDeleteAllCharacter) {
			const operationComplete = [firstNumber, operator, secondNumber, " C"];
			setOperation([...operation, operationComplete]);
			setFirstNumber("0");
			setSecondNumber("");
			setOperator("");
		}

		// Cambia el estado de los elementos con la funcionalidad del botón "CE"
		if (checkDeleteCurrentCharacter) {
			if (secondNumber) {
				const operationComplete = [secondNumber, " CE"];
				setOperation([...operation, operationComplete]);
				setSecondNumber("");
			}
			if (firstNumber && !operator) {
				const operationComplete = [firstNumber, " CE"];
				setOperation([...operation, operationComplete]);
				setFirstNumber("0");
			}
		}

		// Cambia un número a negativo o positivo
		if (checkNegateOperator) {
			const operationComplete = [firstNumber, " (-)"];
			setOperation([...operation, operationComplete]);
			const parseNumber = replaceDecimalToInteger(firstNumber, localeDecimal);
			const negate = setNegateNumber(parseNumber);
			const parseDecimal = replaceDecimalToLocale(negate, localeDecimal);
			setFirstNumber(parseDecimal);
		}

		// Eleva al cuadrado un número
		if (checkElevateOperator) {
			const operationComplete = [firstNumber, " χ²"];
			setOperation([...operation, operationComplete]);
			const parseNumber = replaceDecimalToInteger(firstNumber, localeDecimal);
			const negate = elevateNumber(parseNumber);
			const parseDecimal = replaceDecimalToLocale(negate, localeDecimal);
			setFirstNumber(parseDecimal);
		}

		// Añadir coma a un número entero
		if (checkDecimalOperator) {
			if (checkFirstNumberDecimal) {
				const firstNumberTemp = `${firstNumber}${localeDecimal}`;
				setFirstNumber(firstNumberTemp);
			}
			if (checkSecondNumberDecimal) {
				const secondNumberTemp = `${secondNumber}${localeDecimal}`;
				setSecondNumber(secondNumberTemp);
			}
		}
	};

	return (
		<div className="App">
			<Container className="mt-5">
				<Row className="d-flex justify-content-center mt-5">
					<div className="border p-5 pb-3">
						<CalculatorOutput
							className="mx-3 py-3 mt-4 border"
							text={`${firstNumber}${operator}${secondNumber}`}
						/>
						<CalculatorBody handleClick={handleClickNumber} />
					</div>
					<div className="d-flex align-items-center">
						<ListOperations operations={operation} />
					</div>
				</Row>
			</Container>
		</div>
	);
}

export default App;
