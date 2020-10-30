import {createElement as h, render} from './render'
import style from './style'
import {
  PREVIEW_MASK,
  PREVIEW_BTN_PRE,
  PREVIEW_BTN_NEXT,
  PREVIEW_STAGE
} from '../config'

const previewBtnPre = h('div', {
  id: PREVIEW_BTN_PRE,
  style: style.btnPre
}, [
  h('span', {style: style.preIcon})
])
const previewBtnNext = h('div', {
  id: PREVIEW_BTN_NEXT,
  style: style.btnNext
},[
  h('span', {style: style.nextIcon})
])

const stage = (options) => {
  const {sourceList, currentIndex} = options;
  let imgUrl = sourceList[currentIndex] || ''

  return h('img', {
    id: PREVIEW_STAGE,
    style: style.stage,
    src: imgUrl
  })
}



function template(options) {
  const {sourceList} = options
  let node = h('div', {
    id: PREVIEW_MASK,
    style: style.previewMask
  }, [
    sourceList.length > 1 ?  previewBtnPre : '',
    stage(options),
    sourceList.length > 1 ? previewBtnNext : ''
  ]);


  return render(node)
}


export default template