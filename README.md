# numberToEquation [![Build Status](https://travis-ci.org/chuckinabox/numberToEquation.svg?branch=master)](https://travis-ci.org/chuckinabox/numberToEquation) [![Coverage Status](https://coveralls.io/repos/github/chuckinabox/numberToEquation/badge.svg?branch=master)](https://coveralls.io/github/chuckinabox/numberToEquation?branch=master) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Convert a number to a list of all simple math equations up to a provided limit digit.

## Installation

`npm install numberToEquation`

## Usage

```javascript
const numberToEquation = require("numberToEquation");

let twos = numberToEquation(2, 3);

twos ===
  {
    "+": ["0 + 2", "1 + 1", "2 + 0"],
    "-": ["2 - 0", "3 - 1"],
    "/": ["2 / 1"],
    "*": ["2 * 1"]
  };

twos = numberToEquation(2, 3, true, false);

twos ===
  {
    "+": ["0 + 2", "1 + 1", "2 + 0"],
    "-": [],
    "/": ["2 / 1"],
    "*": ["2 * 1"]
  };
```

## Params

```
numberToEquation( equationTotal,
                  upperLimitForValues,
                  IncludeAdding,
                  IncludeSubtracting,
                  IncludeDividing,
                  IncludeMultiplying) = {
                    "+": [],
                    "-": [],
                    "/": [],
                    "\*": []
                  };
```

## Tests

`npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
