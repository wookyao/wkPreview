import {
  PREVIEW_BTN_PRE,
  PREVIEW_BTN_NEXT,
  PREVIEW_STAGE
} from '../config'

export default function controllSwitch(options) {
  const {sourceList, loop} = options;
  let 
    $Stage = document?.getElementById?.(PREVIEW_STAGE),
    $btnPre = document?.getElementById?.(PREVIEW_BTN_PRE),
    $btnNext = document?.getElementById?.(PREVIEW_BTN_NEXT),
    curIdx = options.currentIndex,
    sourceLength = sourceList.length,
    curImg = '';
  
  // 上一张
  $btnPre.addEventListener('click', () => {
    if(curIdx == 0) {
      if(loop) {
        curIdx = sourceLength;
      } else {
        return false
      }
    }
    curImg = sourceList[--curIdx];
    $Stage.setAttribute('src', curImg)
  })

  // 下一张
  $btnNext.addEventListener('click', () => {
    if(curIdx >= sourceLength - 1) {
      if(loop) {
        curIdx = -1;
      } else {
        return false
      }
    } 
    curImg = sourceList[++curIdx];
    $Stage.setAttribute('src', curImg)
  })

}