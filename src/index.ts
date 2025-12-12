import { Game } from "./ui/game.js";

window.onload = () => {
  const canvas = document.getElementById("game") as HTMLCanvasElement;
  new Game(canvas);
};
