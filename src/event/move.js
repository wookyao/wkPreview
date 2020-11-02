import { on, off, rafThrottle } from '../utils'
import store from '../store'

export default function move() {
  const { $stage } = store.state

  let x, y, l, t, isMove = false;

  on($stage, 'mousedown', e => {

    const [offsetX, offsetY] = [$stage.offsetLeft, $stage.offsetTop];
    const [stageW, stageH] = [$stage.offsetWidth, $stage.offsetHeight];

    const startX = e.pageX;
    const startY = e.pageY;

    const _dragHandler = rafThrottle(ev => {
      let left = offsetX + ev.pageX - startX
      let top = offsetY + ev.pageY - startY

      if(left <= 0) {
        left = 0
      } else if (left >= window.innerWidth - stageW) {}

      $stage.style.left = left + 'px';
      $stage.style.top = top + 'px';
    })

    on(document, 'mousemove', _dragHandler);
    on(document, 'mouseup', ev => {
      off(document, 'mousemove', _dragHandler)
    })
    e.preventDefault();
  })


}