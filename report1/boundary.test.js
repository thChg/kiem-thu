const { classifyMbi } = require("../function");

describe("Testing classifyMbi using boundary", () => {
  test("ID1:height = 1.7, weight = 55 → Normal", () => {
    expect(classifyMbi(1.7, 55)).toBe("Normal");
  });

  test("ID2:height = 1.7, weight = 30 → Underweight", () => {
    expect(classifyMbi(1.7, 30)).toBe("Underweight");
  });

  test("ID3:height = 1.7, weight = 31 → Underweight", () => {
    expect(classifyMbi(1.7, 31)).toBe("Underweight");
  });

  test("ID4:height = 1.7, weight = 199 → Obese", () => {
    expect(classifyMbi(1.7, 199)).toBe("Obese");
  });

  test("ID5:height = 1.7, weight = 200 → Obese", () => {
    expect(classifyMbi(1.7, 200)).toBe("Obese");
  });

  test("ID6:height = 1, weight = 55 → Obese", () => {
    expect(classifyMbi(1.0, 55)).toBe("Obese");
  });

  test("ID7:height = 1.1, weight = 55 → Obese", () => {
    expect(classifyMbi(1.1, 55)).toBe("Obese");
  });

  test("ID8:height = 2.4, weight = 55 → Underweight", () => {
    expect(classifyMbi(2.4, 55)).toBe("Underweight");
  });

  test("ID9:height = 2.5, weight = 55 → Underweight", () => {
    expect(classifyMbi(2.5, 55)).toBe("Underweight");
  });
});
