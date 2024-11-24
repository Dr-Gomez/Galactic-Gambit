import "./style.css";
import lightSrc from "./assets/light.png";
import darkSrc from "./assets/dark.png";

const app: HTMLDivElement = document.getElementById("app") as HTMLDivElement;

const squareWidth: number = 16;
const squareHeight: number = 16;

const numRows: number = 8;
const numCols: number = 8;

for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numCols; col++) {
    const square = document.createElement("img");
    square.style.width = `${squareWidth}px`;
    square.style.height = `${squareHeight}px`;
    square.style.imageRendering = "pixelated";
    square.style.position = "absolute";

    const xPos =
      (col - row) * (squareWidth / 2) +
      window.innerWidth / 2 -
      (numCols * squareWidth) / 4;
    const yPos = (col + row) * (squareHeight / 4);

    square.style.left = `${xPos}px`;
    square.style.top = `${yPos}px`;

    if ((row + col) % 2 === 0) {
      square.src = lightSrc;
    } else {
      square.src = darkSrc;
    }

    app.appendChild(square);
  }
}
