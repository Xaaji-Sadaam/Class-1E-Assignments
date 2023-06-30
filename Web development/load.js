export default class Load {

  constructor(gameWidth, gameHeight, fill) {

    this.width = 400;

    this.height = 20;

    this.fill = fill;

    this.offset = 2;

    this.position = {

      x: (gameWidth / 2) - (this.width / 2),

      y: (gameHeight - this.height) - 50

    }

  }

  draw(ctx) {

    ctx.fillStyle = 'White';

    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

    ctx.fillStyle = 'green';

    ctx.fillRect(this.position.x + this.offset, this.position.y + this.offset, mapRange(this.fill, 0, 100, 0, this.width - this.offset), this.height - (this.offset * 2));

  }

}

function mapRange(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}