const equationGenerator = require("../src/equationGenerator");
const math = require("mathjs");

describe("Returns array of equations to equal number input", function() {
  it("No entry returns empty object", function() {
    expect(equationGenerator()).toEqual({ "+": [], "-": [], "/": [], "*": [] });
  });
  it("Bad entry returns empty object", function() {
    expect(equationGenerator("abc")).toEqual({
      "+": [],
      "-": [],
      "/": [],
      "*": []
    });
  });
  it("0 returns 0+0, 0-0, 0/1, 0*0", function() {
    const zeroResults = equationGenerator("0");
    expect(zeroResults["+"]).toEqual(["0 + 0"]);
    expect(zeroResults["-"]).toEqual(["0 - 0"]);
    expect(zeroResults["/"]).toEqual(["0 / 1"]);
    expect(zeroResults["*"]).toEqual(["0 * 0"]);
  });
  it("No divided by 0 results", function() {
    let zerosDivide = equationGenerator("0")["/"];
    expect(zerosDivide.includes("0 / 0")).toBe(false);
  });
  it("upperLimit parameter returns greater results", function() {
    let zerosDivide = equationGenerator("0", "3")["/"];
    expect(zerosDivide.includes("0 / 1")).toBe(true);
    expect(zerosDivide.includes("0 / 3")).toBe(true);

    let foursPlus = equationGenerator("4", "50")["+"];
    expect(foursPlus.includes("4 + 0")).toBe(true);
  });
  it("mathematicaly correct results", function() {
    let number = 10;
    let iter = 0;
    const results = equationGenerator(number, "4");

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
