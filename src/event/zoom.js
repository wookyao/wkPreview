import { on, isFirefox, isMobile, rafThrottle } from "../utils";
import store from "../store";
import setGesture from "./pinch";

const mousewheelEventName = isFirefox() ? "DOMMouseScroll" : "mousewheel";

const Scale = (delta) => {
  const { $stage, previewOptions } = store.state;
  let zoom = previewOptions?.zoom ?? 5;
  let diff = (delta / 120) * 0.035;
  let scale = store.state.scale;
  scale = scale + diff;
  scale = scale < 0.3 ? 0.3 : scale > zoom ? zoom : scale;
  store.commit("set_scale", scale);
  $stage.style.transform = `translate(-50%, -50%) scale(${store.state.scale})`;
};

// delta > 0 放大 反之 缩小
const _mouseWheelHanlder = rafThrottle((e) => {
  const delta = e?.wheelDelta ?? -e.detail;
  Scale(delta);

  if (e.preentDefault) {
    ev.preventDefault();
  }
  return false;
});

const pinch = () => {
  const { $stage, previewOptions } = store.state;
  const pinchObj = setGesture($stage);

  pinchObj.gesturemove = function (e) {
    //双指移动
    let zoom = previewOptions?.zoom ?? 5;
    let diff = e.scale > 1 ? e.scale * 0.035 : e.scale * -0.035;
    let scale = store.state.scale;
    scale = scale + diff;
    scale = scale < 0.3 ? 0.3 : scale > zoom ? zoom : scale;
    store.commit("set_scale", scale);
    $stage.style.transform = `translate(-50%, -50%) scale(${store.state.scale})`;
  };
};

export default function zoom() {
  if (isMobile()) {
    pinch();
  } else {
    on(document, mousewheelEventName, _mouseWheelHanlder);
  }
}
