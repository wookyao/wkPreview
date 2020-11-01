import {on} from '../utils'
import store from '../store'

export default function controllSwitch() {
  const {previewOptions,$btnPre,$btnNext, $stage,} = store.state
  const {sourceList, loop} = previewOptions;
  
  let 
    curIdx = previewOptions.currentIndex,
    sourceLength = sourceList.length,
    curImg = '';
  
  // 上一张
  on($btnPre, 'click', () => {
    if(curIdx == 0) {
      if(loop) {
        curIdx = sourceLength;
      } else {
        return false
      }
    }
    curImg = sourceList[--curIdx];
    $stage.setAttribute('src', curImg);
    store.commit('set_scale', 1)
    $stage.style.transform = `translate(-50%, -50%) scale(1)`
  })

  // 下一张
  on($btnNext, 'click', () => {
    if(curIdx >= sourceLength - 1) {
      if(loop) {
        curIdx = -1;
      } else {
        return false
      }
    } 
    curImg = sourceList[++curIdx];
    $stage.setAttribute('src', curImg)
    store.commit('set_scale', 1)
    $stage.style.transform = `translate(-50%, -50%) scale(1)`
  })
}