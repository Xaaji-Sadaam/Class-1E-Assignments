export default class Bullet {
  constructor(paddle, img) {
    this.width = 30;

    this.height = 30;

    this.top = {
      width: 4,

      height: 2.5,
    };

    this.smallTop = {
      width: 2,

      height: 1.5,
    };

    this.speed = 80;

    this.position = {
      x: paddle.position.x + paddle.width / 2 - this.width / 2,

      y: paddle.position.y - 25,
    };

    this.img = img;

  }

  draw(ctx) {
    /*ctx.fillStyle = '#00f';
  
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  
      ctx.fillRect(this.position.x + this.width / 2 - this.top.width / 2, this.position.y - this.top.height, this.top.width, this.top.height);
  
      ctx.fillRect(this.position.x + this.width / 2 + this.top.width / 2, this.position.y - this.smallTop.height, this.smallTop.width, this.smallTop.height);
  
      ctx.fillRect(this.position.x + this.width / 2 - this.top.width / 2 - this.smallTop.width, this.position.y - this.smallTop.height, this.smallTop.width, this.smallTop.height);
  
      ctx.fillStyle = 'black';
  
      ctx.fillRect(this.position.x + this.width / 2 - this.top.width / 2, this.position.y + this.height - this.top.height + 2, this.top.width, this.top.height)*/

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

    this.position.y -= this.speed / deltaTime;
  }
}