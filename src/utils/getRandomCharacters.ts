export const getRandomNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

export const getSymbolFromUnicode = () => {
    return String.fromCharCode(Math.floor(Math.random() * 10 + 33));
};

export const getCharacterFromUnicode = () => {
    // a-z
    return String.fromCharCode(Math.random() * (122 - 97) + 97);
};

export const getUpperCaseCharacterFromUnicode = () => {
    return getCharacterFromUnicode().toUpperCase();
};
