import {on, isFirefox, isMobile, rafThrottle} from '../utils'

const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel';
let SCALE = 1;
let $EL = null;
let ZOOM = 1;

const Scale = (delta) => {
  let diff = (delta / 120) * 0.015;
  SCALE = SCALE + diff;
  SCALE = SCALE < 0.3 ? 0.3 : SCALE > ZOOM ? ZOOM : SCALE
  $EL.style.transform = `translate(-50%, -50%) scale(${SCALE})`
}

// delta > 0 放大 反之 缩小
const _mouseWheelHanlder = rafThrottle(e => {
  const delta = e?.wheelDelta ?? -e.detail;
  Scale(delta)
})

export default function zoom (el, opts) {
  ZOOM = opts.zoom
  $EL = el
  if(isMobile()) {

  } else {
    on(document, mousewheelEventName,_mouseWheelHanlder)
  }
}