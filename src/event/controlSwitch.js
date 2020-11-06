import { on, off } from "../utils";
import store from "../store";
import style from "../render/style";

export default function controllSwitch() {
  const {
    previewOptions,
    $btnPre,
    $btnNext,
    $stage,
    $previewMask,
    $btnClose,
  } = store.state;
  const { sourceList, loop, mount } = previewOptions;

  if (!$stage) return;

  let curIdx = previewOptions.currentIndex,
    sourceLength = sourceList.length,
    curImg = "";

  const _handlerPre = () => {
    if (curIdx == 0) {
      if (loop) {
        curIdx = sourceLength;
      } else {
        return false;
      }
    }
    curImg = sourceList[--curIdx];
    $stage.setAttribute("src", curImg);
    store.commit("set_scale", 1);
    $stage.style.cssText = style.stage;
  };

  const _handlerNext = () => {
    if (curIdx >= sourceLength - 1) {
      if (loop) {
        curIdx = -1;
      } else {
        return false;
      }
    }
    curImg = sourceList[++curIdx];
    $stage.setAttribute("src", curImg);
    store.commit("set_scale", 1);
    $stage.style.cssText = style.stage;
  };

  // 上一张
  on($btnPre, "click", _handlerPre);
  // 下一张
  on($btnNext, "click", _handlerNext);

  // 关闭
  on($btnClose, "click", () => {
    mount.removeChild($previewMask);
    off($btnPre, "click", _handlerPre);
    off($btnNext, "click", _handlerNext);
    store.commit("reset_state");
    document.body.style.overflow = "auto";
  });
}
