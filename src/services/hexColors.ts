import { Color } from "../types/Color";

export const getColorHex = (color: Color) => {
  const colorHexMap = {
    black: "#000000",
    brown: "#A52A2A",
    red: "#FF0000",
    orange: "#FFA500",
    yellow: "#FFFF00",
    green: "#008000",
    blue: "#0000FF",
    violet: "#8A2BE2",
    grey: "#808080",
    white: "#FFFFFF",
    gold: "#FFD700",
    silver: "#C0C0C0",
  };

  return colorHexMap[color] || color;
};
