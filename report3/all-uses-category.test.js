const { classifyMbi } = require("../function");

describe("Testing classifyMbi using test cases built to achieve all-uses coverage category", () => {
  test("ID1: height = 0.5, weight = 20 → Invalid input", () => {
    expect(() => classifyMbi(0.5, 20)).toThrow("Invalid input");
  });

  test("ID2: height = 1.70, weight = 50 → Underweight", () => {
    expect(classifyMbi(1.7, 50)).toBe("Underweight");
  });

  test("ID3: height = 1.68, weight = 60 → Normal", () => {
    expect(classifyMbi(1.68, 60)).toBe("Normal");
  });

  test("ID4: height = 1.75, weight = 80 → Overweight", () => {
    expect(classifyMbi(1.75, 80)).toBe("Overweight");
  });

  test("ID5: height = 1.60, weight = 90 → Obese", () => {
    expect(classifyMbi(1.6, 90)).toBe("Obese");
  });
});
