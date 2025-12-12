"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const game_1 = require("./ui/game");
window.onload = () => {
  const canvas = document.getElementById("game");
  new game_1.Game(canvas);
};
