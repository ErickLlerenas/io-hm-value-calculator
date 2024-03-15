import { COLORS } from "../constants/colors";
import { getColorHex } from "../services/hexColors";
import { Color } from "../types/Color";

export const ColorSelector = ({
  onSelectColor,
}: {
  onSelectColor: (color: Color) => void;
}) => {
  return (
    <div className="absolute mt-2 bg-gray-100 shadow-lg rounded-lg p-2">
      {COLORS.map((color) => (
        <div
          key={color}
          style={{ backgroundColor: getColorHex(color) }}
          className="h-6 w-6 rounded-full cursor-pointer m-1"
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
};
