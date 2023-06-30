export default class InputHanderler {
  constructor(paddle, GameWidth) {
    document.addEventListener("keydown", (event) => {

      switch (event.keyCode) {
        case 37:
          paddle.moveLeft();

          break;

        case 39:
          paddle.moveRight();

          break;
      }
    });

    document.addEventListener("keyup", (event) => {

      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) {
            paddle.stop();
          }

          break;

        case 39:
          if (paddle.speed > 0) {
            paddle.stop();
          }

          break;
      }

    });

    document.addEventListener("touchmove", (event) => {
      let rect = GameScreen.getBoundingClientRect();
      let root = document.documentElement;

      let touch = event.changedTouches[0];

      let touchX = parseInt(touch.clientX);

      let touchY = parseInt(touch.clientY) - rect.top - root.scrollTop;

      let pwidth = paddle.width;

      let min = Math.max(touchX - pwidth / 2, 0);

      let max = Math.min(min, GameWidth - pwidth);

      paddle.position.x = max;
    });

    document.addEventListener("touchend", (event) => {
      paddle.stop();
    });
  }
}