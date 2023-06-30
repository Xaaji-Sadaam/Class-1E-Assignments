export default class MEnemy {
  constructor(gameWidth, img) {
    this.width = 100;

    this.height = 100;

    this.health = parseFloat(Math.floor(Math.random() * 10) + 10);

    this.img = img;

    this.position = {
      x: Math.floor(Math.random() * (gameWidth - 20)) + 10 - this.width / 2,

      y: -20,
    };

    this.speed = Math.floor(Math.random() * 19) + 15;
  }

  draw(ctx) {
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