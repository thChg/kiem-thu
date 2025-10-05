const { classifyMbi } = require("./function");

describe("Testing classifyMbi using decision table", () => {
  test("ID1: height = 0.5, weight = 20 → Invalid input", () => {
    expect(() => classifyMbi(0.5, 20)).toThrow("Invalid input");
  });

  test("ID2: height = 0.4, weight = 50 → Invalid input", () => {
    expect(() => classifyMbi(0.4, 50)).toThrow("Invalid input");
  });

  test("ID3: height = 0.1, weight = 250 → Invalid input", () => {
    expect(() => classifyMbi(0.1, 250)).toThrow("Invalid input");
  });

  test("ID4: height = 1.1, weight = 20 → Invalid input", () => {
    expect(() => classifyMbi(1.1, 20)).toThrow("Invalid input");
  });

  test("ID5: height = 1.5, weight = 50 → Normal", () => {
    expect(classifyMbi(1.5, 50)).toBe("Normal");
  });

  test("ID6: height = 2.0, weight = 250 → Invalid input", () => {
    expect(() => classifyMbi(2.0, 250)).toThrow("Invalid input");
  });

  test("ID7: height = 2.6, weight = 20 → Invalid input", () => {
    expect(() => classifyMbi(2.6, 20)).toThrow("Invalid input");
  });

  test("ID8: height = 3.0, weight = 50 → Invalid input", () => {
    expect(() => classifyMbi(3.0, 50)).toThrow("Invalid input");
  });

  test("ID9: height = 3.1, weight = 250 → Invalid input", () => {
    expect(() => classifyMbi(3.1, 250)).toThrow("Invalid input");
  });
});
