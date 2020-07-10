const checkDecimalCharacter = (character) => {
	return character === ",";
};

const includesDecimal = (number) => {
	return number.includes(",");
};

export { checkDecimalCharacter, includesDecimal };
