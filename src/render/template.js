import { createElement as h, render } from './render'
import style from './style'
import {
  PREVIEW_MASK,
  PREVIEW_BTN_PRE,
  PREVIEW_BTN_NEXT,
  PREVIEW_STAGE,
  PREVIEW_BTN_CLOSE
} from '../config'

// 上一页 按钮
const previewBtnPre = h('div', {
  id: PREVIEW_BTN_PRE,
  style: style.btnPre,
  storeCommit: 'set_node_btn_pre'
}, [
  h('span', { style: style.preIcon })
])

// 下一页 按钮
const previewBtnNext = h('div', {
  id: PREVIEW_BTN_NEXT,
  style: style.btnNext,
  storeCommit: 'set_node_btn_next'
}, [
  h('span', { style: style.nextIcon })
])

// 关闭 按钮
const previewBtnClose = h('div', {
  id: PREVIEW_BTN_CLOSE,
  style: style.btnClose,
  storeCommit: 'set_node_btn_close'
}, [
  h('span', {
    style: style.closeIcon1
  }),
  h('span', {
    style: style.closeIcon2
  })
])

// 舞台 image
const stage = (options) => {
  const { sourceList, currentIndex } = options;
  let imgUrl = sourceList[currentIndex] || ''

  return h('img', {
    id: PREVIEW_STAGE,
    style: style.stage,
    src: imgUrl,
    storeCommit: 'set_node_stage'
  })
}

function template(options) {
  const { sourceList } = options
  let node = h('div', {
    id: PREVIEW_MASK,
    style: style.previewMask,
    storeCommit: 'set_node_preview'
  }, [
    previewBtnClose,
    sourceList.length > 1 ? previewBtnPre : '',
    stage(options),
    sourceList.length > 1 ? previewBtnNext : ''
  ]);

  return render(node)
}


export default template