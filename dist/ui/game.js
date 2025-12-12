"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
  constructor(canvas) {
    this.bullets = [];
    this.enemies = [];
    this.left = false;
    this.right = false;
    this.space = false;
    this.loop = () => {
      this.update();
      this.draw();
      requestAnimationFrame(this.loop);
    };
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.player = {
      x: canvas.width / 2 - 20,
      y: canvas.height - 40,
      width: 40,
      height: 20,
    };
    for (let i = 0; i < 6; i++) {
      this.enemies.push({ x: 60 + i * 60, y: 40, active: true });
    }
    this.initControls();
    this.loop();
  }
  initControls() {
    window.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft") this.left = true;
      if (e.code === "ArrowRight") this.right = true;
      if (e.code === "Space") this.space = true;
    });
    window.addEventListener("keyup", (e) => {
      if (e.code === "ArrowLeft") this.left = false;
      if (e.code === "ArrowRight") this.right = false;
      if (e.code === "Space") this.space = false;
    });
  }
  update() {
    if (this.left) this.player.x -= 5;
    if (this.right) this.player.x += 5;
    this.player.x = Math.max(
      0,
      Math.min(this.canvas.width - this.player.width, this.player.x),
    );
    if (this.space) this.shoot();
    this.bullets.forEach((b) => (b.y -= 8));
    this.bullets = this.bullets.filter((b) => b.y > 0 && b.active);
    this.enemies.forEach((e) => {
      this.bullets.forEach((b) => {
        if (
          e.active &&
          b.active &&
          b.x > e.x &&
          b.x < e.x + 40 &&
          b.y > e.y &&
          b.y < e.y + 20
        ) {
          e.active = false;
          b.active = false;
        }
      });
    });
  }
  shoot() {
    if (
      this.bullets.length === 0 ||
      this.bullets[this.bullets.length - 1].y < this.player.y - 40
    ) {
      this.bullets.push({
        x: this.player.x + this.player.width / 2,
        y: this.player.y,
        active: true,
      });
    }
  }
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // Player
    this.ctx.fillStyle = "lime";
    this.ctx.fillRect(
      this.player.x,
      this.player.y,
      this.player.width,
      this.player.height,
    );
    // Bullets
    this.ctx.fillStyle = "yellow";
    this.bullets.forEach((b) => {
      if (b.active) this.ctx.fillRect(b.x - 2, b.y - 10, 4, 10);
    });
    // Enemies
    this.ctx.fillStyle = "red";
    this.enemies.forEach((e) => {
      if (e.active) this.ctx.fillRect(e.x, e.y, 40, 20);
    });
  }
}
exports.Game = Game;
