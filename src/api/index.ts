import express from "express";
import { IOhmValueCalculator } from "../services/IOhmValueCalculator";
import { Color } from "../types/Color";

const router = express.Router();
const calculator = new IOhmValueCalculator();
const app = express();

router.get("/multiplier/:color", (req, res) => {
  const color: Color = req.params.color as Color;

  try {
    const multiplier = calculator.getMultiplierValue(color);
    res.json({ color, multiplier });
  } catch (error) {
    console.error(error);
    res.status(404).send("Invalid color");
  }
});

router.get("/tolerance/:color", (req, res) => {
  const color: Color = req.params.color as Color;

  try {
    const tolerance = calculator.getToleranceValue(color);
    res.json({ color, tolerance });
  } catch (error) {
    console.error(error);
    res.status(404).send("Invalid color");
  }
});

app.use("/api", router);

app.listen(4000, () => {
  console.log(`Server running on port: ${4000}`);
});
