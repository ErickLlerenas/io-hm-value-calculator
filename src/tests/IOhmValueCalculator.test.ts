import { describe, it, expect } from "vitest";
import { IOhmValueCalculator } from "../services/IOhmValueCalculator";

describe("IOhmValueCalculator", () => {
  const calculator = new IOhmValueCalculator();

  it("calculates ohm value for red-violet-yellow", () => {
    expect(calculator.calculateOhmValue("red", "violet", "yellow")).toBe(
      270000
    );
  });

  it("calculates ohm value for brown-black-red", () => {
    expect(calculator.calculateOhmValue("brown", "black", "red")).toBe(1000);
  });

  it("calculates ohm value for green-blue-brown", () => {
    expect(calculator.calculateOhmValue("green", "blue", "brown")).toBe(560);
  });
});
