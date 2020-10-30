import {createElement as h, render} from './render'
import style from './style'

const previewBtnPre = h('div', {
  id: 'JS-preview-btn-pre',
  style: style.btnPre
}, [
  h('span', {style: style.preIcon})
])
const previewBtnNext = h('div', {
  id: 'JS-preview-btn-next',
  style: style.btnNext
},[
  h('span', {style: style.nextIcon})
])

const stage = (options) => {
  const {sourceList, currentIndex} = options;
  let imgUrl = sourceList[currentIndex] || ''

  return h('img', {
    id: 'JS-preview-stage',
    style: style.stage,
    src: imgUrl
  })
}



function template(options) {
  const {sourceList} = options
  let node = h('div', {
    id: "JS-Preview-mask",
    style: style.previewMask
  }, [
    sourceList.length > 1 ?  previewBtnPre : '',
    stage(options),
    sourceList.length > 1 ? previewBtnNext : ''
  ]);


  return render(node)
}


export default template