const getLocaleDecimal = () => {
	const number = 1.1;
	const decimalSeparator = number.toLocaleString().replace(/1/g, "");
	return decimalSeparator;
};

export { getLocaleDecimal };
