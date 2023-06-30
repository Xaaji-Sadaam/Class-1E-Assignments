export default class Paddle {
  constructor(GameWidth, GameHeight, img) {
    this.gameWidth = GameWidth;

    this.width = 64;

    this.height = 64;

    this.img = img;

    this.maxSpeed = 20;

    this.speed = 0;

    this.position = {
      x: GameWidth / 2 - this.width / 2,
      y: GameHeight - this.height - 10,
    };
  }

  moveLeft() {
    this.speed = -this.maxSpeed;
  }

  moveRight() {
    this.speed = this.maxSpeed;
  }

  stop() {
    this.speed = 0;
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

    this.position.x += this.speed;

    if (this.position.x < 0) {
      this.position.x = 0;
    }

    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}