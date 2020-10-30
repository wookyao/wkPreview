import {on} from '../utils'

export default function controllSwitch(options, $Stage, $btnPre, $btnNext) {
  const {sourceList, loop} = options;
  let 
    curIdx = options.currentIndex,
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
    $Stage.setAttribute('src', curImg)
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
    $Stage.setAttribute('src', curImg)
  })

}