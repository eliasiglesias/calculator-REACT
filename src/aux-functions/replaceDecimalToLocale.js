const replaceDecimalToLocale = (number, localeDecimal) => {
	return number.replace(".", `${localeDecimal}`);
};

export { replaceDecimalToLocale };
