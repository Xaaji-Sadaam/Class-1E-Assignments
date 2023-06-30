export default class Enemy {
  constructor(gameWidth, img) {
    this.width = 40;

    this.height = 40;

    this.img = img;

    this.position = {
      x: Math.floor(Math.random() * (gameWidth - 20)) + 10 - this.width / 2,

      y: -20,
    };

    this.speed = Math.floor(Math.random() * 49) + 31;
  }

  draw(ctx) {
    ctx.fillStyle = "#f00";

    ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.y += this.speed / deltaTime;
  }
}