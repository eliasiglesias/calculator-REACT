const checkOperator = (operator) => {
	if (
		operator === "+" ||
		operator === "-" ||
		operator === "*" ||
		operator === "/"
	) {
		return true;
	}
	return false;
};

export { checkOperator };
