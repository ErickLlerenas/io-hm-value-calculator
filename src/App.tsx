import { useState } from "react";
import { Color } from "./types/Color";
import { getColorHex } from "./services/hexColors";
import { INITIAL_COLORS, INITIAL_SELECTOR } from "./constants/colors";
import { ColorSelector } from "./components/ColorSelector";
import { IOhmValueCalculator } from "./services/IOhmValueCalculator";
import axios from "axios";
import Swal from "sweetalert2";
const calculator = new IOhmValueCalculator();

export default function App() {
  const [selectedColors, setSelectedColors] = useState<Color[]>(INITIAL_COLORS);
  const [showSelector, setShowSelector] = useState(INITIAL_SELECTOR);

  const handleBandClick = (bandIndex: number) => {
    setShowSelector({ show: !showSelector.show, bandIndex });
  };

  const handleSelectColor = (color: Color) => {
    const updatedColors = [...selectedColors];
    updatedColors[showSelector.bandIndex] = color;
    setSelectedColors(updatedColors);
    setShowSelector({ show: false, bandIndex: 0 });
  };

  const calculateOhmValue = async () => {
    try {
      const {
        data: { multiplier },
      } = await axios.get(`/api/multiplier/${selectedColors[2]}`);

      // Usamos el método calculateOhmValue con los colores seleccionados y el multiplicador obtenido del endpoint
      const ohmValue =
        calculator.calculateOhmValue(
          selectedColors[0],
          selectedColors[1],
          selectedColors[2]
        ) * multiplier;

      // Muestra el valor calculado en un diálogo de SweetAlert2
      Swal.fire({
        title: "Valor Calculado",
        text: `Valor de la resistencia: ${ohmValue} Ohms`,
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      console.error("Error al calcular el valor de la resistencia: ", error);
    }
  };

  return (
    <div className="bg-gray-800 h-screen">
      <h1 className="text-3xl text-center text-white pt-24">
        Calculadora de resistencia
      </h1>
      <p className="text-center text-gray-500">
        Cambia al color que deseas calcular
      </p>
      <div className="flex justify-center mt-56 relative">
        <div className="w-96 h-36 bg-orange-100 flex flex-row justify-center rounded-full px-12">
          {selectedColors.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: getColorHex(color) }} // Usamos estilos en línea aquí
              className="h-36 w-10 mx-5 cursor-pointer"
              onClick={() => handleBandClick(index)}
            />
          ))}
        </div>
        {showSelector.show && (
          <ColorSelector onSelectColor={handleSelectColor} />
        )}
      </div>
      <div className="flex justify-center mt-24">
        <button
          onClick={calculateOhmValue}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Calcular Ohms
        </button>
      </div>
    </div>
  );
}
