import {on, isFirefox, isMobile, rafThrottle} from '../utils'
import store from '../store'

const mousewheelEventName = isFirefox() ? 'DOMMouseScroll' : 'mousewheel';
let SCALE = 1;
let $EL = null;
let ZOOM = 1;

const Scale = (delta) => {
  let diff = (delta / 120) * 0.015;
  let scale = store.state.scale;
  scale = scale + diff;
  scale = scale < 0.3 ? 0.3 : scale > ZOOM ? ZOOM : scale;
  store.commit('set_scale', scale)
  $EL.style.transform = `translate(-50%, -50%) scale(${store.state.scale})`
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