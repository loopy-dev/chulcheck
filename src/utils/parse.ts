const parseNumberToString = (target: number, numberOfDigits: number) => {
  if (numberOfDigits <= 0) {
    throw new Error(
      'invalid number of digits: number of digits must be higher than 0.'
    );
  }

  if (target >= 10 ** (numberOfDigits - 1)) {
    return String(target);
  }

  const ret = String(target);

  return '0'.repeat(numberOfDigits - ret.length).concat(ret);
};

export default parseNumberToString;
