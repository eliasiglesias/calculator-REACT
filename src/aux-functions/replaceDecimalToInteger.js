const replaceDecimalToInteger = (number, localeDecimal) => {
	return number.replace(`${localeDecimal}`, ".");
};

export { replaceDecimalToInteger };
