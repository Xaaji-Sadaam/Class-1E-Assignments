export default class HealthPack {
  constructor(GameWidth, img) {
    this.width = 40;

    this.height = 40;

    this.position = {
      x: Math.floor(Math.random() * (GameWidth - 20)) + 10 - this.width / 2,

      y: -20,
    };

    this.speed = Math.floor(Math.random() * 9) + 19;

    this.img = img;

  }

  draw(ctx) {
    ctx.fillStyle = "#00f";

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