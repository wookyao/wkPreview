import { on, off, rafThrottle, isMobile } from '../utils'
import store from '../store'

const drag = () => {
  const isM = isMobile();
  const TAPDOWN = isM ? 'touchstart' : 'mousedown'
  const TAPMOVE = isM ? 'touchmove' : 'mousemove'
  const TAPUP = isM ? 'touchend' : 'mouseup'

  const { $stage } = store.state
  on($stage, TAPDOWN, e => {
    if(isM && e.touches.length > 1) return
    e = isM ? e.touches[0] : e;
    const [offsetX, offsetY] = [$stage.offsetLeft, $stage.offsetTop];

    const startX = e.pageX;
    const startY = e.pageY;

    const _dragHandler = rafThrottle(ev => {
      if(isM && ev.touches.length > 1) return
      ev = isM ? ev.touches[0] : ev;
      let left = offsetX + ev.pageX - startX
      let top = offsetY + ev.pageY - startY


      $stage.style.left = left + 'px';
      $stage.style.top = top + 'px';
    })

    on(document, TAPMOVE, _dragHandler);
    on(document, TAPUP, ev => {
      off(document, TAPMOVE, _dragHandler)
    })
    e.preventDefault();
  })
}





export default function move() {
  drag.call(this)
}