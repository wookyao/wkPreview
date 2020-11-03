import { on } from '../utils'
import store from '../store'
import style from '../render/style'

export default function controllSwitch() {
  const {
    previewOptions,
    $btnPre, $btnNext, $stage, $previewMask, $btnClose
  } = store.state
  const { sourceList, loop, mount } = previewOptions;

  let
    curIdx = previewOptions.currentIndex,
    sourceLength = sourceList.length,
    curImg = '';

  // 上一张
  on($btnPre, 'click', () => {
    if (curIdx == 0) {
      if (loop) {
        curIdx = sourceLength;
      } else {
        return false
      }
    }
    curImg = sourceList[--curIdx];
    $stage.setAttribute('src', curImg);
    store.commit('set_scale', 1)
    $stage.style.cssText = style.stage;
  })

  // 下一张
  on($btnNext, 'click', () => {
    if (curIdx >= sourceLength - 1) {
      if (loop) {
        curIdx = -1;
      } else {
        return false
      }
    }
    curImg = sourceList[++curIdx];
    $stage.setAttribute('src', curImg)
    store.commit('set_scale', 1)
    $stage.style.cssText = style.stage;
  })

  // 关闭
  on($btnClose, 'click', () => {
    mount.removeChild($previewMask);
    store.commit('reset_state')
  })
}