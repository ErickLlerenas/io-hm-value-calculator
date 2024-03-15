import { Color } from "../types/Color";

export class IOhmValueCalculator {
  public calculateOhmValue(
    bandAColor: Color,
    bandBColor: Color,
    multiplier: number
  ): number {
    const firstDigit = this.getColorValue(bandAColor);
    const secondDigit = this.getColorValue(bandBColor);

    return (firstDigit * 10 + secondDigit) * multiplier;
  }

  public getColorValue(color: Color): number {
    switch (color) {
      case "black":
        return 0;
      case "brown":
        return 1;
      case "red":
        return 2;
      case "orange":
        return 3;
      case "yellow":
        return 4;
      case "green":
        return 5;
      case "blue":
        return 6;
      case "violet":
        return 7;
      case "grey":
        return 8;
      case "white":
        return 9;
      default:
        return -1;
    }
  }

  public getMultiplierValue(color: Color): number {
    switch (color) {
      case "black":
        return 1;
      case "brown":
        return 10;
      case "red":
        return 100;
      case "orange":
        return 1_000;
      case "yellow":
        return 10_000;
      case "green":
        return 100_000;
      case "blue":
        return 1_000_000;
      case "violet":
        return 10_000_000;
      case "grey":
        return 100_000_000;
      case "white":
        return 1_000_000_000;
      case "gold":
        return 0.1;
      case "silver":
        return 0.01;
      default:
        return -1;
    }
  }

  public getToleranceValue(color: Color): number {
    switch (color) {
      case "brown":
        return 1;
      case "red":
        return 2;
      case "green":
        return 0.5;
      case "blue":
        return 0.25;
      case "violet":
        return 0.1;
      case "grey":
        return 0.05;
      case "gold":
        return 5;
      case "silver":
        return 10;
      default:
        return -1;
    }
  }
}
