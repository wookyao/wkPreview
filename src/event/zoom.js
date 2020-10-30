import {on, isFirefox, isMobile, rafThrottle} from '../utils'

const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel';
let SCALE = 1;
let $EL = null

const Scale = () => {}

// delta > 0 放大 反之 缩小
const _mouseWheelHanlder = rafThrottle(e => {
  const delta = e?.wheelDelta ?? -e.detail;
  Scale(delta)
})

export default function zoom (el) {
  $EL = el
  if(isMobile()) {

  } else {
    on(document, mousewheelEventName,_mouseWheelHanlder)
  }
}