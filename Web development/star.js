export default class Star {
  constructor(isTop, gameWidth, gameHeight) {
    this.height = 2;

    this.width = 2;

    this.position = {
      x: Math.floor(Math.random() * gameWidth),
    };

    this.speed = Math.floor(Math.random() * 4) + 6;

    if (isTop) {
      this.position.y = -10;
    } else {
      this.position.y = Math.floor(Math.random() * gameHeight);
    }
  }

  draw(ctx) {
    ctx.fillStyle = "white";

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime) {
    if (!deltaTime) return;

    this.position.y += this.speed / deltaTime;
  }
}