import { on, off, rafThrottle, isMobile } from '../utils'
import store from '../store'

const drag = () => {
  const { $stage } = store.state
  on($stage, 'mousedown', e => {
    const [offsetX, offsetY] = [$stage.offsetLeft, $stage.offsetTop];

    const startX = e.pageX;
    const startY = e.pageY;

    const _dragHandler = rafThrottle(ev => {
      let left = offsetX + ev.pageX - startX
      let top = offsetY + ev.pageY - startY


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


export default function move() {
  const isM = isMobile();

  if (isM) { } else {
    drag.call(this)
  }

}