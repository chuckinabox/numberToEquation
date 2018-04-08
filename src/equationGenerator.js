let equationGenerator = function(
  number,
  upperLimit,
  addParam,
  subtractParam,
  divideParam,
  multiplyParam
) {
  let result = { "+": [], "-": [], "/": [], "*": [] };
  number = Number(number);
  upperLimit = Number(upperLimit);

  if (number === undefined || isNaN(number)) {
    return result;
  } else {
    if (isNaN(upperLimit)) {
      upperLimit = 0;
    }
    for (let x = 0; x <= upperLimit; x++) {
      if (addParam !== false) {
        for (let adding = 0; adding <= upperLimit; adding++) {
          if (x + adding === number) {
            result["+"].push(`${x} + ${adding}`);
          }
        }
      }
      if (subtractParam !== false) {
        for (let subtracting = 0; subtracting <= upperLimit; subtracting++) {
          if (x - subtracting === number) {
            result["-"].push(`${x} - ${subtracting}`);
          }
        }
      }

      if (divideParam !== false) {
        for (let dividing = 1; dividing <= upperLimit + 1; dividing++) {
          if (x / dividing === number) {
            result["/"].push(`${x} / ${dividing}`);
          }
        }
      }
      if (multiplyParam !== false) {
        for (let multipling = 0; multipling * 2 <= upperLimit; multipling++) {
          if (x * multipling === number) {
            result["*"].push(`${x} * ${multipling}`);
          }
        }
      }
    }
  }
  return result;
};

module.exports = equationGenerator;
