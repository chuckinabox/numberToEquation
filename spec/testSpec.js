const equationGenerator = require("../src/equationGenerator");
const math = require("mathjs");

describe("Returns array of equations to equal number input", function() {
  it("No entry returns empty object", function() {
    expect(equationGenerator()).toEqual({ "+": [], "-": [], "/": [], "*": [] });
  });
  it("0 returns 0+0, 0-0, 0/1, 0*0", function() {
    let zeroResults = equationGenerator("0");
    expect(zeroResults["+"]).toEqual(["0 + 0"]);
    expect(zeroResults["-"]).toEqual(["0 - 0"]);
    expect(zeroResults["/"]).toEqual(["0 / 1"]);
    expect(zeroResults["*"]).toEqual(["0 * 0"]);
  });
  it("No divided by 0 results", function() {
    expect(equationGenerator("0")["/"]).not.toEqual(
      jasmine.arrayContaining(["0 / 0"])
    );
  });
  it("upperLimit parameter returns greater results", function() {
    expect(equationGenerator("0", "3")["/"]).toEqual(
      jasmine.arrayContaining(["0 / 1", "0 / 3"])
    );
    expect(equationGenerator("4", "50")["+"]).toEqual(
      jasmine.arrayContaining(["4 + 0"])
    );
  });
  it("mathematicaly correct results", function() {
    let number = 10;
    let iter = 0;
    let results = equationGenerator(number, "4");

    for (iter = 0; iter < results["+"].length; iter++) {
      expect(math.eval(results["+"][iter])).toEqual(number);
    }
    for (iter = 0; iter < results["-"].length; iter++) {
      expect(math.eval(results["-"][iter])).toEqual(number);
    }
    for (iter = 0; iter < results["/"].length; iter++) {
      expect(math.eval(results["/"][iter])).toEqual(number);
    }
    for (iter = 0; iter < results["*"].length; iter++) {
      expect(math.eval(results["*"][iter])).toEqual(number);
    }
  });
});

describe("Exclude math operations", function() {
  it("Exclude +", function() {
    expect(equationGenerator(4, 2, false)["+"]).toEqual([]);
  });
  it("Exclude -", function() {
    expect(equationGenerator(4, 2, true, false)["-"]).toEqual([]);
  });
  it("Exclude /", function() {
    expect(equationGenerator(4, 2, true, true, false)["/"]).toEqual([]);
  });
  it("Exclude *", function() {
    expect(equationGenerator(4, 2, true, true, true, false)["*"]).toEqual([]);
  });
});
