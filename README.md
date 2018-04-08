# numberToEquation

Convert a number to a list of all simple math equations up to a provided limit.

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

Example:

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
